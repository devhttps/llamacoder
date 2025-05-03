import Image from "next/image";

import GithubIcon from "@/components/icons/github-icon";
import logo from "@/public/logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <header 
      className="relative mx-auto flex w-full shrink-0 items-center justify-center py-6"
      role="banner"
      aria-label="Main header"
    >
      <Link href="/" aria-label="Go to home page">
        <Image
          src={logo}
          alt="Llama Coder Logo"
          quality={100}
          className="mx-auto h-9 object-contain"
          priority
        />
      </Link>

      <div className="absolute right-3">
        <a
          href="https://github.com/nutlope/llamacoder"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto hidden items-center gap-3 rounded-full bg-white/95 px-5 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-100 transition-all hover:bg-white hover:shadow-md hover:ring-gray-200 sm:flex"
          aria-label="View project on GitHub"
        >
          <GithubIcon className="h-[18px] w-[18px]" aria-hidden="true" />
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-gray-900">5k+</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-amber-400"
              aria-hidden="true"
              role="img"
            >
              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
            </svg>
            <span className="font-medium">on GitHub</span>
          </div>
        </a>
      </div>
    </header>
  );
}
