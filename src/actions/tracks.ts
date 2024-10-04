"use server";

import type { Track } from "@/models";

import { unlink, writeFile } from "fs/promises";
import { join } from "path";
import { AudioContext } from "node-web-audio-api";
import "node_modules/node-web-audio-api";

import { db } from "@/libs";

const MUSIC_DIR: string = join(process.cwd(), "public", "music");

export const getTracks = async (): Promise<Documents.Track[]> => {
  try {
    const tracks: Track[] = await db.Track.find().lean();

    return tracks.map((track) => {
      const { _id, ...rest } = track;

      return rest;
    });
  } catch (error: unknown) {
    throw (<Error>error).message;
  }
};

export const getTrackByTitle = async (
  title: string
): Promise<Documents.Track | null> => {
  try {
    const track: Track | null = await db.Track.findOne({
      title: title.replaceAll("-", " "),
    }).lean();

    if (track) {
      const { _id, ...rest } = track;

      return rest;
    }

    return null;
  } catch (error: unknown) {
    throw (<Error>error).message;
  }
};

export const uploadTrack: ActionHandler = async (
  formData
): Promise<ActionResult<AudioFileInfo>> => {
  try {
    const file = <File>formData.get("file");
    const filename: string = file.name;
    const arrayBuffer: ArrayBuffer = await file.arrayBuffer();
    const audioContext: AudioContext = new AudioContext();

    const data: Buffer = Buffer.from(arrayBuffer);
    const path: string = join(MUSIC_DIR, filename);

    const audioData: AudioBuffer = await audioContext.decodeAudioData(
      arrayBuffer
    );
    const duration: string = (audioData.duration / 60)
      .toFixed(2)
      .replace(".", ":");

    await writeFile(path, data);

    return {
      status: "success",
      message: "New music uploaded successfuly",
      data: { filename, duration },
    };
  } catch (error: unknown) {
    return {
      status: "error",
      message: (<Error>error).message,
    };
  }
};

export const removeTrack: ActionHandler = async (
  formData
): Promise<ActionResult<null> | void> => {
  try {
    const title = <string>formData.get("title");
    const { filename } = <Track>await db.Track.findOne({ title }).lean();

    if (filename !== "No file") {
      const path: string = join(MUSIC_DIR, filename);

      await unlink(path);
    }

    await db.Track.deleteOne({ title });
  } catch (error: unknown) {
    return {
      status: "error",
      message: (<Error>error).message,
    };
  }
};

export const addTrack: ActionHandler = async (
  formData
): Promise<ActionResult<null> | void> => {
  try {
    const url = <string | null>formData.get("url");
    const filename = <string | null>formData.get("filename");
    const duration = <string>formData.get("duration");
    const title = <string>formData.get("title");
    const style = <string>formData.get("style");

    const newTrack = new db.Track();
    newTrack.artist = "Gregor Josh";
    newTrack.title = title;
    newTrack.style = style;
    newTrack.filename = filename || "No file";
    newTrack.duration = duration;
    newTrack.url = url || "No URL";

    await newTrack.save();
  } catch (error: unknown) {
    return {
      status: "error",
      message: (<Error>error).message,
    };
  }
};
