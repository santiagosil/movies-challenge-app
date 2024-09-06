import {cn} from "@/utils";

interface SubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function SubmitButton({children, className, type, ...props}: SubmitButtonProps) {
  return (
    <button
      className={cn(
        "flex items-center justify-center rounded-md bg-yellow-400 p-4 font-semibold text-black transition-colors hover:bg-yellow-500",
        className,
      )}
      // eslint-disable-next-line react/button-has-type
      type={type}
      {...props}
    >
      <span className="flex w-fit items-center justify-center space-x-2 text-nowrap">
        {children}
      </span>
    </button>
  );
}
