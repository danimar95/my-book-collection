"use client";
import Select from "../_components/primitive/Select";
import Input from "../_components/primitive/Input";
import Button from "../_components/primitive/Button";
import DetailLayout from "../_components/layout/DetailLayout";

const genresDummy = [
  { id: 1, value: "Comedy" },
  { id: 2, value: "Romance" },
];

const BookForm = () => (
  <DetailLayout>
    <div className="flex h-full items-center justify-start flex-col p-10">
      <div className="w-full flex flex-col item-center justify-center">
        <div className="w-full flex p-2 items-start">
          <span className="text-black w-3/12">Genre</span>
          <Select
            htmlFor="search-bar"
            label=""
            name="author"
            placeholder="Genre"
            options={genresDummy}
            extraClass="w-full shadow px-6"
          />
        </div>
        <div className="flex justify-around p-2 items-center">
          <span className="text-black w-3/12">Book's name</span>
          <Input
            id="name"
            searchTerm=""
            placeholder=""
            extraClass="w-9/12 shadow"
          />
        </div>
        <div className="flex justify-around p-2 items-center">
          <span className="text-black w-3/12">URL image</span>
          <Input
            id="name"
            searchTerm=""
            placeholder=""
            extraClass="w-9/12 shadow"
          />
        </div>
        <div className="flex justify-around p-2 items-center">
          <span className="text-black w-3/12">Publish year</span>
          <Input
            id="name"
            searchTerm=""
            placeholder=""
            extraClass="w-9/12 shadow"
          />
        </div>
        <div className="flex justify-around p-2 items-center">
          <span className="text-black w-3/12">Description</span>
          <textarea
            rows={4}
            id="description"
            name="description"
            className="w-full shadow rounded-xl"
          ></textarea>
        </div>
      </div>
      <div className="flex pr-2 w-full justify-end pt-8">
        <Button extraClass="text-black" onChange={() => console.log("")}>Add / Edit Book</Button>
      </div>
    </div>
  </DetailLayout>
);

export default BookForm;
