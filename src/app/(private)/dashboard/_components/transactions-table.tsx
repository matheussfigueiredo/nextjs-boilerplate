"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

export function TransactionsTable() {
  const transactions = [
    {
      value: 200,
      recipient: "John Doe",
      date: new Date(2025, 5, 18, 20, 35),
      type: "income",
    },
    {
      value: 350,
      recipient: "Jane Smith",
      date: new Date(2025, 5, 17, 14, 15),
      type: "expense",
    },
    {
      value: 120,
      recipient: "Mike Johnson",
      date: new Date(2025, 5, 16, 12, 5),
      type: "income",
    },
    {
      value: 500,
      recipient: "Alice Brown",
      date: new Date(2025, 5, 15, 18, 20),
      type: "expense",
    },
    {
      value: 250,
      recipient: "Chris Green",
      date: new Date(2025, 5, 14, 9, 45),
      type: "income",
    },
    {
      value: 100,
      recipient: "Patricia Blue",
      date: new Date(2025, 5, 13, 10, 25),
      type: "expense",
    },
    {
      value: 300,
      recipient: "Sam White",
      date: new Date(2025, 5, 12, 22, 0),
      type: "income",
    },
    {
      value: 450,
      recipient: "Emma Black",
      date: new Date(2025, 5, 11, 15, 30),
      type: "expense",
    },
    {
      value: 275,
      recipient: "Olivia Grey",
      date: new Date(2025, 5, 10, 8, 15),
      type: "income",
    },
    {
      value: 125,
      recipient: "Liam Gold",
      date: new Date(2025, 5, 9, 19, 50),
      type: "expense",
    },
  ];

  return (
    <div className="rounded-md border p-2">
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Amount</TableHead>
            <TableHead>Recipient</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction, index) => {
            const isIncome = transaction.type.includes("income");

            return (
              <TableRow key={index}>
                <TableCell
                  className={cn(
                    "w-36 font-medium text-red-500",
                    isIncome && "text-emerald-500",
                  )}
                >
                  <span className="whitespace-nowrap">
                    {isIncome ? "+" : "-"}${transaction.value}
                  </span>
                </TableCell>
                <TableCell className="w-33">
                  <span className="whitespace-nowrap">
                    {transaction.recipient}
                  </span>
                </TableCell>
                <TableCell className="w-33">
                  <span className="whitespace-nowrap">
                    {format(transaction.date, "MMMM d, yyyy 'at' h:mm a")}
                  </span>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
