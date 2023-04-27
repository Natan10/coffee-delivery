import React from "react";
import { Header } from "@/components/Header";

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <main className="h-screen">
      <Header />
      {children}
    </main>
  );
}
