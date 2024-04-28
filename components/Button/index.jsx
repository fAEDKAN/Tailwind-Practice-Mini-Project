"use client";
import { useState } from "react";
export default function Button({}) {
  const [darkMode, setDarkMode] = useState(false);
  const handleClick = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  const text = darkMode ? "Activar modo oscuro" : "Activar modo claro";

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 text-white transition-all rounded shadow-md bg-gradient-to-r from-azure-radiance-500 to-azure-radiance-800 active:translate-y-1 focus:ring-2 hover:bg-azure-radiance-300 active:transform dark:from-azure-radiance-50 dark:to-azure-radiance-300 dark:text-black"
    >
      {text}
    </button>
  );
}
