import { cn } from "@/utils";

interface SubmitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const SubmitButton = ({
  children,
  className,
  ...props
}: SubmitButtonProps) => {
  return (
    <button
      className={cn(
        "bg-yellow-400 p-4 text-black font-semibold flex items-center justify-center rounded-md hover:bg-yellow-500 transition-colors",
        className,
      )}
      {...props}
    >
      <span className="flex items-center justify-center space-x-2 w-fit text-nowrap">
        {children}
      </span>
    </button>
  );
};
