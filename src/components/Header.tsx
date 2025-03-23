import React from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="flex flex-col items-center py-8 border-b border-gray-800">
      <div className="mb-2">
        <Image
          src="/images/icon-white-250.png"
          alt="s4kr4 logo"
          width={60}
          height={60}
          priority
        />
      </div>
      <h1 className="text-4xl font-bold mb-4">s4kr4</h1>
      <nav className="flex space-x-2">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <span>|</span>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <span>|</span>
        <Link href="/skills" className="hover:underline">
          Skills
        </Link>
        <span>|</span>
        <Link href="/works" className="hover:underline">
          Works
        </Link>
      </nav>
    </header>
  );
}

export default Header;
