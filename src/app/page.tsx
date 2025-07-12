import { getAllPosts } from "@/lib/api";
import Link from "next/link";
import TypingAnimation from "@/components/TypingAnimation/page";
import Header from "@/components/Header/page";

export default function Home() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <div>
      <header>
        <Header />
      </header>
    </div>
  );
}
