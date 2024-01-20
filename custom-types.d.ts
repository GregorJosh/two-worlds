interface RouteHandlers {
  [key: string]: RouteHandler;
}

interface ResponseBody {
  status: string;
  code: number;
  message: string;
}

interface User {
  username: string;
  password: string;
}

interface ArticleDocument {
  title: string;
  content: string[];
}

interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

type FormInputElement =
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLOptionElement;

type RouteHandler = (request: Request, ...args: any) => unknown;

type ErrorMessage = string;

type OnSubmitHandler = (
  event: FormEvent<HTMLFormElement>
) => Promise<ErrorMessage | void>;
