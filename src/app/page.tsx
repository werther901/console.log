import { getAllPosts } from "@/lib/api";
import Link from "next/link";
import TypingAnimation from "@/components/TypingAnimation/page";

export default function Home() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <div className="flex flex-col lg:flex-row h-full w-full lg:p-10 p-5">
      <div className="flex w-full lg:w-1/2 lg:h-full flex-col lg:gap-y-24">
        <div className="lg:h-[15rem] h-[5rem]"></div>
        <h1 className="flex text-white lg:text-[9rem] text-[6rem] leading-[1.2] tracking-tighter min-h-[5rem] lg:min-h-[9rem] mb-8">
          <TypingAnimation text="Console.log" />
        </h1>
      </div>

      <div className="flex w-full lg:w-1/2 h-full flex-col gap-y-24">
        <section className="w-full flex flex-col font-mono text-white lg:text-[2.5rem] leading-[1.2] tracking-tighter">
          <Link href="/posts" className="underline">
            Posts
          </Link>
        </section>
      </div>
    </div>
  );
}
