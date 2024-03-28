"use client";
import { DetailLayoutProps } from "@/types/detail.types";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import Button from "../primitive/Button";

const DetailLayout = ({ children, isDetail, isBook }: DetailLayoutProps) => {
  const router = useRouter();
  return (
    <div className="bg-sky-50 h-screen w-screen flex items-center flex-col p-24 text-black">
      <Link className="text-black w-full p-2" href="/">My Library</Link>
      <div className="border shadow-lg rounded-3xl bg-slate-50 w-full h-full">
        <div className="flex py-4 px-6 relative flex-col">
          <div className="flex justify-between">
            <Button onChange={() => router.back()} extraClass="pl-8" isSubmit >
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="text-black absolute w-3 left-8 top-7"
              />
              Back
            </Button>
            {isDetail && (
              <div>
                <Link href="book-form">{`Edit ${
                  isBook ? "Book" : "Author"
                }`}</Link>
                <Button onChange={() => alert("Are you sure?")} extraClass="pl-8">{`Delete ${
                  isBook ? "Book" : "Author"
                }`}</Button>
              </div>
            )}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DetailLayout;
