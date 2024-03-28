"use client";
import Link from "next/link";
import DetailLayout from "../components/layout/DetailLayout";
import Button from "../components/primitive/Button";

const AuthorDetail = () => {
  return (
    <DetailLayout isDetail>
      <div className="p-12 text-black">
        <span className="w-full flex justify-center">
          Gabriel Garcia Marquez
        </span>
        <div className="flex py-14">
          <div className="w-3/4 p-4 text-justify">
            The novel tells the story of the rise and fall of the mythical town
            of Macondo through the history of the Buendía family. Rich and
            brilliant, it is a chronicle of life, death, and the tragicomedy of
            humankind. In the beautiful, ridiculous, and tawdry story of the
            Buendía family, one sees all of humanity, just as in the history,
            myths, growth, and decay of Macondo, one sees all of Latin America.
          </div>
          <div className="w-1/4 flex justify-center">
            <img
              src="https://m.media-amazon.com/images/I/51Zr6Pd32ML._SY445_SX342_.jpg"
              alt="book-cover"
              width={150}
            />
          </div>
        </div>
        <div className="flex justify-between">
          <span className="flex w-2/12">Books:</span>
          <div className="flex w-10/12 justify-between">
            <div className="flex justify-evenly w-3/4">
              <Link href="book-detail">Love in the Time of Cholera</Link>
              <Link href="book-detail">The Autumn of the Patriarch</Link>
            </div>
            <Link href="book-form" className="w-1/4">Add Book +</Link>
          </div>
        </div>
      </div>
    </DetailLayout>
  );
};

export default AuthorDetail;
