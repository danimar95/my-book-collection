import { DetailLayoutProps } from "@/types/detail.types";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "../primitive/Link";

const DetailLayout = ({ children, isDetail}: DetailLayoutProps) => (
  <div className="bg-white h-screen w-screen flex items-center flex-col p-24">
    <span className="text-black w-full">My Library</span>
    <div className="border-2 border-black rounded w-full h-full">
      <div className="flex py-4 px-6 relative flex-col">
        <div className="flex justify-between">
          <Link href="www.google.com" extraClass="pl-4">
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="text-black absolute w-3 left-5 top-5"
            />
            Back
          </Link>
          {isDetail && (
            <div>
              <Link href="www.google.com">Edit Book</Link>
              <Link href="www.google.com" extraClass="pl-8">Delete Book</Link>
            </div>
          )}
        </div>
        {children}
      </div>
    </div>
  </div>
);

export default DetailLayout;
