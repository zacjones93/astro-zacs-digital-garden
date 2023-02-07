import {useState, useEffect } from "react"

export default function ThemeToggle({classNames }: {classNames: string}){
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="transform transition-all block duration-150 ease-out scale-0">""</div>; // or null;
  }

  return (
    <button
      className={`transform transition-all block duration-150 ease-out scale-100 ${classNames}`}
      onClick={handleClick}>
        {theme === "light" ? "🌙" : "🌞"}
    </button>
  );
}
