import Image from "next/image";
import { jacques_francois_shadow, jacques_francois } from "./fonts";
import Link from "next/link";
import TypewriterText from "@/components/component/TypewriterText";
export default function Home() {
  return (
    <main className="w-full min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 md:px-8 -mt-12 md:-mt-16">
      <div className="text-center space-y-4 px-2">
        <h1
          className={`${jacques_francois_shadow.className} text-5xl sm:text-6xl md:text-8xl leading-tight`}
        >
          BETTER x SISWA
        </h1>

        <h2
          className={`${jacques_francois.className} text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed`}
        >
          EMPOWERING MALAYSIAN STUDENTS TO REACH THEIR FULL POTENTIAL
          <br />
          <br />
          <span className="bg-stone-200 p-1 sm:p-2 rounded-md dark:bg-gray-700 inline-block text-xl sm:text-2xl md:text-3xl font-semibold">
            <TypewriterText />
          </span>
        </h2>

        <Link href="#">
          <button
            className={`${jacques_francois.className} rounded-sm text-base sm:text-lg md:text-xl mt-6 sm:mt-8 px-6 sm:px-8 py-2 sm:py-3 bg-black dark:bg-white dark:text-black text-white dark:hover:bg-gray-300 hover:bg-gray-800 transition-colors`}
          >
            COMING SOON
          </button>
        </Link>
      </div>
    </main>
  );
}
