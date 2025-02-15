"use client";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  BarChart,
  Bell,
  ChevronsUpDownIcon,
  DollarSign,
  Download,
  FileText,
  List,
  PieChart,
} from "lucide-react";
import { useState } from "react";

export function Shortcuts() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full space-y-4"
    >
      <div className="grid w-full grid-cols-3 gap-4">
        <Button
          variant="outline"
          size="lg"
          className="items-left flex flex-col gap-2 py-12"
        >
          <DollarSign className="h-6 w-6" />
          <span>View Balance</span>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="items-left flex flex-col gap-2 py-12"
        >
          <DollarSign className="h-6 w-6" />
          <span>Add Income</span>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="items-left flex flex-col gap-2 py-12"
        >
          <DollarSign className="h-6 w-6" />
          <span>Add Expense</span>
        </Button>
      </div>

      <CollapsibleContent className="text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 grid w-full grid-cols-3 gap-4 outline-none">
        <Button
          variant="outline"
          size="lg"
          className="items-left flex flex-col gap-2 py-12"
        >
          <FileText className="h-6 w-6" />
          <span>Generate Reports</span>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="items-left flex flex-col gap-2 py-12"
        >
          <Bell className="h-6 w-6" />
          <span>Configure Alerts</span>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="items-left flex flex-col gap-2 py-12"
        >
          <PieChart className="h-6 w-6" />
          <span>Manage Budgets</span>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="items-left flex flex-col gap-2 py-12"
        >
          <List className="h-6 w-6" />
          <span>Transaction History</span>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="items-left flex flex-col gap-2 py-12"
        >
          <Download className="h-6 w-6" />
          <span>Export Data</span>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="items-left flex flex-col gap-2 py-12"
        >
          <BarChart className="h-6 w-6" />
          <span>Financial Insights</span>
        </Button>
      </CollapsibleContent>

      <CollapsibleTrigger asChild className="w-full">
        <Button variant="ghost" size="sm" className="w-full p-0">
          <ChevronsUpDownIcon className="h-4 w-4" />
        </Button>
      </CollapsibleTrigger>
    </Collapsible>
  );
}
