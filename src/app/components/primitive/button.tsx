import { MouseEventHandler } from "react";

interface ButtonProps {
  children: React.ReactNode;
  onChange: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  extraClass?: string;
  isSubmit?: boolean;
}

const Button = ({
  onChange,
  children,
  disabled = false,
  extraClass,
  isSubmit,
}: ButtonProps) => {
  return (
    <button
      type={isSubmit ? "button" : "submit"}
      disabled={disabled}
      className={`text-black py-1.5 px-4 rounded ${
        extraClass && extraClass
      }`}
      onClick={onChange}
    >
      {children}
    </button>
  );
};

export default Button;
