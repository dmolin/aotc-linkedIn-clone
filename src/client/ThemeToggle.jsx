import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ThemeToggle = _props => {
  const { setTheme, resolvedTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // this is for making theming works preventing hydration warnings with SSR
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={`border-gray-400 dark:border-0 border bg-gray-200 dark:bg-gray-600 flex flex-row items-center px-0.5 rounded-full h-6 w-12 cursor-pointer flex-shrink-0 relative ${resolvedTheme === "dark" ? "justify-end" : "justify-start"}`}
    >
      <span className="absolute left-0.5">🌜</span>
      <span className="absolute right-0.5">🌝</span>
      { /* animated toggle */}
      <motion.div
        className={`w-5 h-5 bg-gray-500 dark:bg-white rounded-full z-40`}
        layout
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30
        }}
      />
    </div>
  );
}

export default ThemeToggle;
