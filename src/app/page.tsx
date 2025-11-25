import Image from "next/image";
import { jacques_francois_shadow, jacques_francois } from "./fonts";
import Link from "next/link";
import TypewriterText from "@/components/component/TypewriterText";
export default function Home() {
  return (
    <main className="w-full min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center max-w-7xl mx-auto px-4 -mt-16">
      <div className="text-center space-y-4">
        <h1 className={`${jacques_francois_shadow.className} text-8xl md:text-8xl leading-tight`}>
          BETTER x SISWA
        </h1>
        
        <h2 className={`${jacques_francois.className} text-xl md:text-xl max-w-3xl mx-auto leading-relaxed`}>
          EMPOWERING MALAYSIAN STUDENTS TO REACH THEIR FULL POTENTIAL 
          <br />
          <br />
          <span className="bg-stone-200 p-2 rounded-md dark:bg-gray-700 inline-block text-2xl md:text-3xl font-semibold">
            <TypewriterText />
          </span>
          
        </h2>

        <Link href="#">

        <button className={`${jacques_francois.className} rounded-sm text-xl mt-8 px-8 py-3 bg-black dark:bg-white dark:text-black text-white dark:hover:bg-gray-300 hover:bg-gray-800 transition-colors`}>
          COMING SOON
        </button>
        </Link>

        {/* <div className="mt-16 text-center opacity-50">
          <p className={`${jacques_francois.className} text-sm`}>
            ISDFHSILKS ASDD ASDASDSSAD
          </p>
          <p className={`${jacques_francois.className} text-xs mt-2`}>
            ndslknflkSNDlsdsnfknstdkks. AxiasodifinklAAJkdmolkslKlasDlkmmdk
            <br />
            ndslknflkSNDlkdsnfknstdkks. AxiasodifinklAAJkdmolkslKlasDlkmmdk
          </p>
        </div> */}
      </div>
    </main>
  );
}
