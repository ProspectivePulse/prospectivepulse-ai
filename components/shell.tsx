import { ReactNode } from "react";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <main className="container py-10 sm:py-16">{children}</main>
    </div>
  );
}
