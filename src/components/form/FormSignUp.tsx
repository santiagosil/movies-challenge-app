import { MailCheck } from "lucide-react";

import { InputFormField } from "./InputFormField";
import { SubmitButton } from "./SubmitButton";

export function FormSignUp() {
  return (
    <form className="max-w-96 space-y-8">
      <p>We love having you back</p>
      <InputFormField placeholder="Email" type="text" />
      <InputFormField placeholder="Password" type="password" />
      <SubmitButton type="submit">
        <span>Register with your Email</span>
        <MailCheck />
      </SubmitButton>
    </form>
  );
}
