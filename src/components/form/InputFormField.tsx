import {Eye, EyeOff} from "lucide-react";
import {useState} from "react";

type InputFormFieldProps = React.InputHTMLAttributes<HTMLInputElement>;

export function InputFormField({type, ...props}: InputFormFieldProps) {
  const [typeAux, setTypeAux] = useState(type);

  return (
    <div className="relative z-0 w-full text-black">
      <input {...props} className="rounded-t-lg p-3" type={typeAux} />
      {type === "password" && (
        <button
          className="absolute right-3 top-1/2 size-5 -translate-y-1/2 text-black"
          type="button"
          onClick={() => setTypeAux((prev) => (prev === "password" ? "text" : "password"))}
        >
          {typeAux === "password" ? <Eye /> : <EyeOff />}
        </button>
      )}
    </div>
  );
}
