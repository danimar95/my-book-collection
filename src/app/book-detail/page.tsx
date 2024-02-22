import DetailLayout from "../components/layout/DetailLayout";
import Link from "../components/primitive/Link";

const BookDetail = () => (
  <DetailLayout isDetail>
    <div className="text-black py-8">
      <div className="flex p-10 flex-col">
        <div className="flex">
          <div className="flex flex-col p-4 w-1/4 justify-center">
            <div className="w-full">100 Years of solitude</div>
            <img
              src="https://m.media-amazon.com/images/I/51Zr6Pd32ML._SY445_SX342_.jpg"
              alt="book-cover"
              width={170}
            />
          </div>
          <div className="p-4 w-3/4">
            <div className="flex justify-around">
              <div className="w-full">by Gabriel Garcia Marquez</div>
              <div className="w-full">Originally published: 1967 </div>
            </div>
            <div className="flex justify-around pt-8">
              <div>Fiction</div>
              <div>Magical realism</div>
              <div>Familiy life</div>
            </div>
            <div className="pt-8">
              The novel tells the story of the rise and fall of the mythical
              town of Macondo through the history of the Buendía family. Rich
              and brilliant, it is a chronicle of life, death, and the
              tragicomedy of humankind. In the beautiful, ridiculous, and tawdry
              story of the Buendía family, one sees all of humanity, just as in
              the history, myths, growth, and decay of Macondo, one sees all of
              Latin America.
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Link href="www.google.com" extraClass="pl-4">
            View Gabriel Garcia Marquez's detail
          </Link>
        </div>
      </div>
    </div>
  </DetailLayout>
);

export default BookDetail;
