import React from "react";
import { Link } from "gatsby";

function Header({ siteTitle = "" }: HeaderProps) {
  return (
    <header className="max-w-xl mx-auto my-2 flex flex-row justify-between items-baseline">
      <h1 className="text-lg py-3">
        <Link to="/">{siteTitle}</Link>
      </h1>
      <ul className="flex">
        <li className="mr-6">
          <Link
            to="/blog"
            className="text-base text-blue-500 hover:text-blue-800"
          >
            Blog
          </Link>
        </li>
      </ul>
    </header>
  );
}

interface HeaderProps {
  siteTitle?: string;
}

export default Header;
