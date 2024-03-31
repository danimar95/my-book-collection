import Input from "../_components/primitive/Input";
import DetailLayout from "../_components/layout/DetailLayout";
import Link from "next/link";
import axios from "axios";

const AuthorForm = () => {
  const fetchResponse = async () => {
    const response = await axios.get('/api/authors/create');
    if (response.status !== 200) throw new Error(response.statusText);
    return response;
  };
  
  fetchResponse();
  return (
    <DetailLayout>
      <div className="flex h-full items-center justify-start flex-col px-16 py-4">
        <div className="flex flex-col item-center justify-center w-9/12">
          <div className="flex justify-around p-2 items-center">
            <span className="text-black w-3/12">Authors's name</span>
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
          <Link href="/">Add / Edit Author</Link>
        </div>
      </div>
    </DetailLayout>
  );
};

export default AuthorForm;
