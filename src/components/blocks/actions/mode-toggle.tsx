"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as UI from "@/components/core";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <UI.DropdownMenu>
      <UI.DropdownMenuTrigger asChild>
        <UI.Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </UI.Button>
      </UI.DropdownMenuTrigger>
      <UI.DropdownMenuContent align="end">
        <UI.DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </UI.DropdownMenuItem>
        <UI.DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </UI.DropdownMenuItem>
        <UI.DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </UI.DropdownMenuItem>
      </UI.DropdownMenuContent>
    </UI.DropdownMenu>
  );
}
