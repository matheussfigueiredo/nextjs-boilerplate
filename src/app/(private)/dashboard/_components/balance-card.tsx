"use client";

import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";

export function BalanceCard() {
  const [show, setShow] = useState(false);

  const onToggle = () => setShow(!show);

  const DISPLAY_BALANCE = show ? "$ 5.000,00" : "***";

  return (
    <Card className="flex flex-col gap-2 rounded-md p-4 shadow-none">
      <CardTitle className="text-muted-foreground text-lg font-normal">
        Hello, <strong className="text-emerald-500">Username!</strong>
      </CardTitle>
      <div className="bg-accent border-border relative flex justify-between rounded-lg border px-4 py-1.5">
        <p className="text-muted-foreground text-base font-medium">
          Your current balance is <strong>{DISPLAY_BALANCE}</strong>
        </p>
        <Button
          size="icon"
          onClick={onToggle}
          variant="ghost"
          className="absolute top-0.5 right-1"
        >
          {show ? <EyeOffIcon /> : <EyeIcon />}
        </Button>
      </div>
      <span className="mt-4 text-right text-sm font-semibold">
        Show Extract
      </span>
    </Card>
  );
}
