"use client";

import { ChangeEventHandler, RefObject, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { addTrack, removeTrack, uploadTrack } from "@/actions";
import {
  Backdrop,
  Button,
  Form,
  FormField,
  Input,
  Loader,
  MessageBox,
  Window,
} from "@/components";
import { useToggleMessage } from "@/hooks";
import { usePlayer } from "@/context";

import styles from "./page.module.scss";

export default function NewTrackModal(): React.JSX.Element {
  const router = useRouter();
  const [isFileSelected, setIsFileSelected] = useState<boolean>(false);
  const [isURL, setIsURL] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [filename, setFilename] = useState<string>("No file");
  const [url, setURL] = useState<string>("No URL");
  const [duration, setDuration] = useState<string>("0:00");
  const [error, setError] = useToggleMessage();
  const inputRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
  const { setURL: setPlayerURL } = usePlayer();

  const openBrowser: Fun = () => {
    const inputElement: HTMLInputElement | null = inputRef.current;

    if (inputElement) {
      inputElement.click();
    }
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = async (event) => {
    const target: EventTarget & HTMLInputElement = event.target;
    const files: FileList | null = target.files;
    const url: string = target.value;

    if (url || files) {
      if (files) {
        setIsLoading(true);

        const formData: FormData = new FormData();
        formData.append("file", files.item(0) as File);

        const result: ActionResult<AudioFileInfo> = await uploadTrack(formData);

        if (result.status === "success") {
          const audioData: AudioFileInfo = result.data!;

          setFilename(audioData.filename);
          setDuration(audioData.duration);
          setIsFileSelected(true);
        } else {
          setError(result.message);
        }

        setIsLoading(false);
      } else {
        if (target.checkValidity()) {
          setIsURL(true);
          setURL(url);
          setPlayerURL(url);
        } else {
          setError("Incorrect link!");
        }
      }
    }
  };

  const handleClose: Fun = async () => {
    if (isFileSelected) {
      const formData: FormData = new FormData();
      formData.set("filename", filename);

      const result: ActionResult<null> | null = await removeTrack(formData);

      if (result && result.status === "error") {
        console.log(result.message);
      }
    }

    if (isURL) {
      setPlayerURL(null);
    }
  };

  const submit: ActionHandler = async (formData) => {
    const result: ActionResult<null> | void = await addTrack(formData);

    if (result && result.status === "error") {
      return result;
    }

    console.log("redirect");
    router.push("/music", { scroll: false });
  };

  console.log("Rendering modal new-track page...");

  return (
    <Backdrop>
      <Window
        className={styles.window}
        title="Upload New Track"
        onClose={handleClose}
      >
        <>
          <MessageBox message={error} />
          {isFileSelected || isURL ? (
            <>
              <Form action={submit}>
                <>
                  {isFileSelected && (
                    <FormField label="File name:">
                      <input
                        type="text"
                        name="filename"
                        value={filename}
                        readOnly
                      />
                    </FormField>
                  )}
                  {isURL && (
                    <FormField label="URL:">
                      <input type="url" name="url" value={url} readOnly />
                    </FormField>
                  )}
                </>
                <FormField label="Duration">
                  <Input
                    type="text"
                    name="duration"
                    value={duration}
                    readOnly={isFileSelected}
                  />
                </FormField>
                <FormField label="Title:">
                  <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    pattern="^[a-zA-Z0-9+& ]+"
                    required
                  />
                </FormField>
                <FormField label="Style: ">
                  <input
                    type="text"
                    name="style"
                    placeholder="Style"
                    pattern="^[a-zA-Z& ]+"
                    required
                  />
                </FormField>
              </Form>
            </>
          ) : (
            <>
              {isLoading ? (
                <Loader inner />
              ) : (
                <div className={styles["select-form"]}>
                  <input
                    type="file"
                    accept="audio/*"
                    style={{ display: "none" }}
                    ref={inputRef}
                    onChange={handleChange}
                  />
                  <Button onClick={openBrowser}>Select File</Button>
                  <p>Or</p>
                  <FormField label="Set URL:">
                    <input
                      type="url"
                      placeholder="Set URL"
                      pattern="^[a-zA-Z0-9&_\-\+&.?:/]+"
                      onChange={handleChange}
                    />
                  </FormField>
                </div>
              )}
            </>
          )}
        </>
      </Window>
    </Backdrop>
  );
}
