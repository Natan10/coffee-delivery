import React from "react";
import { Header } from "@/components/Header";

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      {children}
    </main>
  );
}
