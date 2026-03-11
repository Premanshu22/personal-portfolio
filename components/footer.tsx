import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <div className="mb-4 flex flex-col sm:flex-row justify-center items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
        <a href="mailto:daspremanshu02@gmail.com" className="hover:underline">
          daspremanshu02@gmail.com
        </a>
        <span className="hidden sm:inline">•</span>
        <a href="tel:+917439450489" className="hover:underline">
          +91 7439450489
        </a>
      </div>
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()}{" "}
        <a href="https://github.com/Premanshu22" className="hover:underline">Premanshu</a>. All rights reserved.
      </small>
    </footer>
  );
}
