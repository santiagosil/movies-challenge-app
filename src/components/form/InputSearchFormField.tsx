import {Search} from "lucide-react";

type InputSearchFormFieldProps = React.InputHTMLAttributes<HTMLInputElement>;

export function InputSearchFormField({...props}: InputSearchFormFieldProps) {
  return (
    <label className="w-64 space-y-4 text-white">
      <span className="text-xl font-bold">Search</span>
      <div className="relative">
        <input
          className="border-b border-b-neutral-500/60 bg-neutral-850 px-4 py-3 text-white outline-none placeholder:text-white/60 focus:border-b-white"
          placeholder="Keywords"
          {...props}
        />
        <Search className="absolute right-3 top-1/2 size-5 -translate-y-1/2 text-white" />
      </div>
    </label>
  );
}
