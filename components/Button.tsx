import {
  ForwardRefExoticComponent,
  ForwardedRef,
  RefAttributes,
  forwardRef,
} from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: ForwardRefExoticComponent<
  ButtonProps & RefAttributes<HTMLButtonElement>
> = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, children, disabled, type = "button", ...props }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ): React.ReactElement => {
    return (
      <button
        type={type}
        className={twMerge(
          `
            w-full 
            rounded-full 
            bg-green-500
            border
            border-transparent
            px-3 
            py-3 
            disabled:cursor-not-allowed 
            disabled:opacity-50
            text-black
            font-bold
            hover:opacity-75
            transition
          `,
          disabled && "opacity-75 cursor-not-allowed",
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
