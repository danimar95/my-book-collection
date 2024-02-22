import { InputProps } from "@/types/primitive.types";

const Input = ({
  placeholder,
  handleChange,
  searchTerm,
  extraClass,
}: InputProps) => (
  <input
    id="search-bar"
    className={`border-black border rounded p-2 text-black ${extraClass ? extraClass : ""}`}
    type="text"
    placeholder={placeholder}
    onChange={handleChange}
    value={searchTerm}
  />
);

export default Input;
