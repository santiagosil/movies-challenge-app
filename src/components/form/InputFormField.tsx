import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface InputFormFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const InputFormField = ({ type, ...props }: InputFormFieldProps) => {
  const [typeAux, setTypeAux] = useState(type);

  return (
    <div className="relative z-0 w-full text-black">
      <input {...props} type={typeAux} className="p-3 rounded-t-lg" />
      {type === "password" && (
        <button
          onClick={() =>
            setTypeAux((prev) => (prev === "password" ? "text" : "password"))
          }
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-black size-5"
        >
          {typeAux === "password" ? <Eye /> : <EyeOff />}
        </button>
      )}
    </div>
  );
};
