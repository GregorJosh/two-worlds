interface PropsWithClassName {
  className?: string;
}

interface ModalProps {
  onClose?: () => void | undefined;
}

interface Styles {
  readonly [key: string]: string;
}

namespace Documents {
  interface User {
    username: string;
    password: string;
  }

  interface Article {
    name: string;
    content: string;
    images: string[];
  }

  interface Track {
    artist: string;
    title: string;
    style: string;
    filename: string;
    duration: string;
    url: string;
  }
}

interface AudioFileInfo {
  filename: string;
  duration: string;
}

interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
}

interface Product {
  name: string;
  url: string;
}

type ActionResultStatus = "success" | "error" | "unknown";

interface ActionResult<DataType> {
  status: ActionResultStatus;
  message: string;
  data?: DataType;
}

type Fun = () => void;

type FormInputElement =
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLOptionElement;

type ActionHandler = (
  formData: FormData,
  ...args: any
) => Promise<ActionResult | null | undefined>;
