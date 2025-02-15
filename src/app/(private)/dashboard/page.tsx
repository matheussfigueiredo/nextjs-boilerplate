import { BalanceCard } from "./_components/balance-card";
import { Shortcuts } from "./_components/shorcuts";
import { TransactionsTable } from "./_components/transactions-table";

export default function Dashboard() {
  return (
    <main className="flex h-full flex-col justify-start px-4 py-8 lg:py-24">
      <h1 className="text-lg font-bold lg:text-2xl">
        Welcome to the Dashboard
      </h1>

      <div className="mt-6 flex flex-col gap-4">
        <BalanceCard />
      </div>

      <div className="mt-6 flex flex-col gap-4">
        <Shortcuts />
      </div>

      <div className="mt-6 flex flex-col gap-4">
        <h1 className="text-muted-foreground text-base font-normal">
          Your last transactions
        </h1>
        <TransactionsTable />
      </div>
    </main>
  );
}
