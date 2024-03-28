import { BookCardProps } from "@/types/home.type";
import Link from "next/link";
import { useRouter } from "next/navigation";

const BookCard = ({id, image}: BookCardProps) => {
  const router = useRouter()
  const handleClick = () => {
     router.push(`detail/}`)
  };

  return (
    <Link href="/book-detail" className="rounded-md text-black w-32 h-44 border border-black m-4" onClick={handleClick}>
      <img src={image} alt="cover" />
    </Link>
  );
};

export default BookCard;
