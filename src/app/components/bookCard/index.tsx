import { BookCardProps } from "@/types/home.type";
import { useRouter } from "next/navigation";

const BookCard = ({id, image}: BookCardProps) => {
  const router = useRouter()
  const handleClick = () => {
     router.push(`detail/}`)
  };

  return (
    <div className="rounded-md text-black w-32 h-44 rounded-md border border-black m-4 cursor-pointer" onClick={handleClick}>
      <img src={image} alt="cover" />
    </div>
  );
};

export default BookCard;
