import Link from "next/link";
import Image from "next/image";
import linkIcon from "../../../public/assets/icon/free-icon-link.png";

const Header = () => {
  return (
    <h2 className="flex items-center h-full text-xl justify-between w-full lg:p-5 p-5">
      <Link href="/" className="hover:underline">
        Console.log
      </Link>

      <nav className="flex items-center gap-x-6">
        <Link href="/posts" className="underline text-base">
          Posts
        </Link>

        <Link
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-x-2 bg-white text-base text-black px-3 py-1.5 rounded-full"
        >
          <span>Github</span>
          <Image src={linkIcon} alt="Github Icon" width={16} height={16} />
        </Link>
      </nav>
    </h2>
  );
};

export default Header;
