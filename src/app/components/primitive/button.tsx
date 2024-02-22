import { ButtonProps } from "@/types/primitive.types";

const Button = ({
    text,
    type = "button",
    disabled = false,
    extraClass,
}: ButtonProps) => {
  return (
    <button type={type} disabled={disabled} className="text-black py-1.5 px-4 rounded shadow-lg bg-cyan-400">{text}</button>
  )
};

export default Button;
