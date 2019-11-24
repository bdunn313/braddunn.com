import React from "react";
import { Link } from "gatsby";

function Header({ siteTitle = "" }: HeaderProps) {
  return (
    <header>
      <div className="container mx-auto p-6">
        <h1 style={{ margin: 0 }}>
          <Link to="/">{siteTitle}</Link>
        </h1>
      </div>
    </header>
  );
}

interface HeaderProps {
  siteTitle?: string;
}

export default Header;
