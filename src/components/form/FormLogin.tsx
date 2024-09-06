import {Ticket} from "lucide-react";

import {InputFormField} from "./InputFormField";
import {SubmitButton} from "./SubmitButton";

export function FormLogin() {
  return (
    <form className="max-w-96 space-y-8">
      <p>We love having you back</p>
      <InputFormField placeholder="Email" type="text" />
      <InputFormField placeholder="Password" type="password" />
      <SubmitButton type="submit">
        <span>Continue</span>
        <Ticket />
      </SubmitButton>
    </form>
  );
}
