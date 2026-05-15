"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ModeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      type="button"
      variant="ghost"
      className={cn(
        "size-full p-0 rounded-3xl flex items-center justify-center",
        className
      )}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <SunIcon className="size-5 text-neutral-800 dark:hidden dark:text-neutral-200" />
      <MoonIcon className="hidden size-5 text-neutral-800 dark:block dark:text-neutral-200" />
    </Button>
  );
}
