import Link from "next/link";
import { inter, jacques_francois } from "@/app/fonts";
import { Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <p className={`${inter.className} text-sm`}>
            © 2025 BetterSiswa
          </p>
          
          <p className={`${inter.className} text-sm`}>
            Developed by Asjad
          </p>

          <Link
            href="https://github.com/akulaahhhh/BetterSiswa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity"
          >
            <Github className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}