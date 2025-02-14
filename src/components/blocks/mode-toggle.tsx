"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as DM from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DM.DropdownMenu>
      <DM.DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DM.DropdownMenuTrigger>
      <DM.DropdownMenuContent align="end">
        <DM.DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DM.DropdownMenuItem>
        <DM.DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DM.DropdownMenuItem>
        <DM.DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DM.DropdownMenuItem>
      </DM.DropdownMenuContent>
    </DM.DropdownMenu>
  );
}
