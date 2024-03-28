import { Author } from "@/types/data.type";

interface SelectProps {
  htmlFor: string;
  label: string;
  name: string;
  disabled?: boolean;
  required?: boolean;
  placeholder: string;
  options: Author[];
  extraClass?: string;
}

const Select = ({
  htmlFor,
  label,
  name,
  disabled = false,
  required,
  placeholder,
  options,
  extraClass,
}: SelectProps) => {
  return (
    <label className="flex text-black rounded-3xl py-0.5 w-full" htmlFor={htmlFor} data-testid="select-label">
      <span className="" data-testid="select-caption">
        {label && <span className="">{label}</span>}
      </span>
      <span className="w-full" data-testid="select-wrapper">
        <select
          className={`text-black p-2 rounded-3xl ${extraClass ? extraClass : ""}`}
          name={name}
          id={htmlFor}
          disabled={disabled}
          required={required}
        >
          <option value={placeholder} disabled className="text-black" selected={true}>
            {placeholder}
          </option>
          {options.map((option: any) => (
            <option key={option.id} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
      </span>
    </label>
  );
};

export default Select;
