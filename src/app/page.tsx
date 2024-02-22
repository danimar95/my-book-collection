"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Select from "./components/primitive/select";
import BookCard from "./components/bookCard";
import Input from "./components/primitive/input";


export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const authorsDummy = [
    { id: 1, value: "Gabriel Garcia Marquez" },
    { id: 2, value: "Elizabeth Gilbert" },
  ];

  const genresDummy = [
    { id: 1, value: "Romance" },
    { id: 2, value: "Magic realism" },
  ];

  const booksDummy = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
  ];

  return (
    <main className="bg-white h-screen p-24 2-screen">
      <span className="text-black flex justify-center mb-12">
        My book collection
      </span>
      <div className="flex justify-between relative">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-black absolute left-4 top-3.5 w-4"
        />
        <Input
          placeholder="Search for books or authors here"
          id="search"
          searchTerm={searchTerm}
          handleChange={(e) => handleChange(e)}
          extraClass="w-7/12 pl-10"
        />
        <div className="flex justify-around w-5/12">
          <Select
            htmlFor="search-bar"
            label=""
            name="author"
            placeholder="Author"
            options={authorsDummy}
          />
          <Select
            htmlFor="search-bar"
            label=""
            name="genre"
            placeholder="Genre"
            options={genresDummy}
          />
        </div>
      </div>
      <div className="mt-14">
        <span className="text-black">Results</span>
        <div className="flex flex-wrap overflow-auto max-h-80 mt-4">
          {booksDummy.map((book) => (
            <BookCard
              id={book.id}
              image="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
