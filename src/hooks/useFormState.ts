import { useState } from "react";

import { useToggleMessage } from ".";

export const useFormState = (action: ActionHandler) => {
  const [status, setStatus] = useState<ActionResultStatus>("unknown");
  const [message, setMessage] = useToggleMessage();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formAction = async (formData: FormData) => {
    setIsLoading(true);

    const result: ActionResult<unknown> | null = await action(formData);

    if (result) {
      setStatus(result.status);
      setMessage(result.message);
      setTimeout(() => setStatus("unknown"), 3000);
    }

    setIsLoading(false);
  };

  return [status, message, isLoading, formAction] as const;
};
