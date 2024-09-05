import { Mail, MailCheck } from "lucide-react";
import { InputFormField } from "./InputFormField";
import { SubmitButton } from "./SubmitButton";

export const FormSignUp = () => {
  return (
    <form className="space-y-8 max-w-96">
      <p>We love having you back</p>
      <InputFormField type="text" placeholder="Email" />
      <InputFormField type="password" placeholder="Password" />
      <SubmitButton type="submit">
        <span>Register with your Email</span>
        <MailCheck />
      </SubmitButton>
    </form>
  );
};
