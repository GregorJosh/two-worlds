interface PropsWithClassName {
  className?: string;
}

interface ModalProps {
  onClose?: () => void | undefined;
}

interface Styles {
  readonly [key: string]: string;
}

interface UserDocument {
  username: string;
  password: string;
}

interface ArticleDocument {
  name: string;
  title: string;
  content: string[];
}

interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

type ActionResultStatus = "success" | "error" | "unknown";

interface ActionResult<DataType = null> {
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
