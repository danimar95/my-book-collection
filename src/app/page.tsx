"use client";
import { useState } from "react";
import Select from "./(ui)/_components/primitive/Select";
import BookCard from "./(ui)/_components/bookCard";
import Input from "./(ui)/_components/primitive/Input";
import Button from "./(ui)/_components/primitive/Button";
import Link from "next/link";
import { getAuthors } from "./api/authors/create/route";

const Home = () => {
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
    <main className="bg-sky-50 h-screen p-24 2-screen text-black">
      <span className="text-black flex justify-center mb-12 text-3xl">
        My Library
      </span>
      <div className="flex justify-between px-4 py-8 shadow-lg rounded-3xl bg-slate-100 gap-8">
        <div className="w-7/12">
          <Input
            placeholder="Search for books or authors here"
            id="search"
            searchTerm={searchTerm}
            handleChange={(e) => handleChange(e)}
            setSearchTerm={setSearchTerm}
            search
            extraClass="shadow"
          />
        </div>
        <div className="flex justify-around w-5/12 gap-4">
          <Select
            htmlFor="search-bar"
            label=""
            name="author"
            placeholder="Author"
            options={authorsDummy}
            extraClass="shadow w-full"
          />
          <Select
            htmlFor="search-bar"
            label=""
            name="genre"
            placeholder="Genre"
            options={genresDummy}
            extraClass="shadow w-full"
          />
        </div>
      </div>
      <div className="mt-14">
        <div className="flex justify-between">
          <span>Results</span>
          <Link href="author-form">+ Add Author</Link>
        </div>
        <div className="flex flex-wrap gap-0.5 overflow-auto max-h-80 mt-4">
          {booksDummy.map((book, index) => (
            <BookCard
              key={`${book.id}-${index}`}
              id={book.id}
              image={`https://picsum.photos/id/${Math.floor(
                Math.random() * 100
              )}/200/300`}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
