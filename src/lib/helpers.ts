import { ValidationError } from "joi";

export const successResponse = (message: string, status: number = 200) => {
  return Response.json(
    {
      status: "success",
      code: status,
      message,
    },
    {
      status,
    }
  );
};

export const errorResponse = (error: unknown, status: number = 400) => {
  const result = {
    status: "error",
    code: status,
    message: "",
  };

  if (error instanceof ValidationError) {
    result.message = error.message;
  } else {
    result.message = error as string;
  }

  //result.message = result.message.replaceAll(/['"]/g, "");

  return Response.json(result, { status });
};
