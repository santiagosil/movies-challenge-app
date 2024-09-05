import { Ticket } from "lucide-react";
import { InputFormField } from "./InputFormField";
import { SubmitButton } from "./SubmitButton";

export const FormLogin = () => {
  return (
    <form className="space-y-8 max-w-96">
      <p>We love having you back</p>
      <InputFormField type="text" placeholder="Email" />
      <InputFormField type="password" placeholder="Password" />
      <SubmitButton type="submit">
        <span>Continue</span>
        <Ticket />
      </SubmitButton>
    </form>
  );
};
