import { SelectProps } from "@/types/primitive.types";

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
    <label className="flex text-black border border-black rounded-md px-4 py-0.5" htmlFor={htmlFor} data-testid="select-label">
      <span className="" data-testid="select-caption">
        {label && <span className="">{label}</span>}
      </span>
      <span className="w-full" data-testid="select-wrapper">
        <select
          className={`text-black p-2 rounded-md ${extraClass ? extraClass : ""}`}
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
