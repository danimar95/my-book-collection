import { Dispatch, SetStateAction } from "react";
import { faClose, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";


interface InputProps {
  id: string;
  searchTerm: string;
  placeholder: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  extraClass?: string;
  search?: boolean;
  setSearchTerm?: Dispatch<SetStateAction<string>>;
}

const Input = ({
  placeholder,
  handleChange,
  searchTerm,
  extraClass,
  search = false,
  setSearchTerm,
}: InputProps) => {
   const handleReset = () => {
    setSearchTerm && setSearchTerm("");
  };
  return (
    <div className="relative w-full">
      <input
        id="search-bar"
        className={`border-black rounded-3xl px-4 py-2 w-full ${search && "pl-10"} ${
          extraClass ? extraClass : ""
        }`}
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        value={searchTerm}
      />
       {search && Boolean(searchTerm.length) && (
        <button onClick={handleReset} className="absolute right-0 top-2">
          <FontAwesomeIcon
            icon={faClose}
            className="w-12 text-stone-500"
          />
        </button>
      )}
      {search && (
       <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="absolute left-4 top-3.5 w-4 text-stone-500"
        />
      )}
    </div>
  );
};

export default Input;
