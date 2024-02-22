import { Author } from "./data.type";

export interface InputProps {
  id: string;
  searchTerm: string;
  placeholder: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  extraClass?: string;
}

export interface SelectProps {
  htmlFor: string;
  label: string;
  name: string;
  disabled?: boolean;
  required?: boolean;
  placeholder: string;
  options: Author[];
  extraClass?: string;
}

export interface ButtonProps {
  text: string;
  type?: string;
  disabled?: boolean;
  extraClass?: string;
}

export interface LinkProps {
  href: string;
  extraClass?: string;
  target?: string;
  rel?: string;
}