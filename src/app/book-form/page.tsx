import Select from "../components/primitive/select";
import Input from "../components/primitive/input";
import Button from "../components/primitive/button";
import DetailLayout from "../components/layout/DetailLayout";

const genresDummy = [
  { id: 1, value: "Comedy" },
  { id: 2, value: "Romance" },
];

const BookForm = () => (
  <DetailLayout>
    <div className="flex h-full items-center justify-start flex-col px-16 py-4">
      <div className="w-full flex flex-col item-center justify-center w-9/12">
        <div className="flex justify-around p-2 items-start">
          <span className="text-black w-3/12">Genre</span>
          <div className="w-9/12">
            <Select
              htmlFor="search-bar"
              label=""
              name="author"
              placeholder="Genre"
              options={genresDummy}
              extraClass="w-full"
            />
          </div>
        </div>
        <div className="flex justify-around p-2 items-center">
          <span className="text-black w-3/12">Book's name</span>
          <Input id="name" searchTerm="" placeholder="" extraClass="w-9/12" />
        </div>
        <div className="flex justify-around p-2 items-center">
          <span className="text-black w-3/12">URL image</span>
          <Input id="name" searchTerm="" placeholder="" extraClass="w-9/12" />
        </div>
        <div className="flex justify-around p-2 items-center">
          <span className="text-black w-3/12">Publish year</span>
          <Input id="name" searchTerm="" placeholder="" extraClass="w-9/12" />
        </div>
        <div className="flex justify-around p-2 items-center">
          <span className="text-black w-3/12">Description</span>
          <textarea
            rows={4}
            id="description"
            name="description"
            className="w-9/12 border border-black rounded"
          ></textarea>
        </div>
      </div>
      <div className="flex pr-2 w-full justify-end pt-8">
        <Button text="Add / Edit Book" />
      </div>
    </div>
  </DetailLayout>
);

export default BookForm;
