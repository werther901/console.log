import { getAllPosts } from "@/lib/api";
import Link from "next/link";
import TypingAnimation from "@/components/TypingAnimation/page";
import Header from "@/components/Header/page";
import Headset3D from "@/components/Headset3D/page";

export default function Home() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <div>
      <header>
        <Header />
      </header>

      <main className="flex flex-col items-center justify-center min-h-[90vh] relative">
        <div className="w-full max-w-6xl relative">
          <Headset3D />
          <div className="absolute inset-0 flex items-center justify-center z-[-1] pointer-events-none">
            <h1 className="text-8xl font-bold text-white opacity-30 -translate-y-32">
              Frontend Tech Blog
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
}
