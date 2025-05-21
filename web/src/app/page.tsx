"use client"

import { CardSummary } from "@/components/card-summary";
import { Category } from "@/components/categories";
import { ChartAnalyze } from "@/components/chart-analyze";
import { Header } from "@/components/header";
import { TransactionTable } from "@/components/transactions";
import { Car, CircleEllipsis, Hamburger, Pill, TreePalm } from "lucide-react";


const categories = [
  {
    id: "1",
    icon: Hamburger,
    name: "Alimentação",
    quantity: 10,
    amount: 100,
  },
  {
    id: "2",
    icon: Car,
    name: "Transporte",
    quantity: 5,
    amount: 50,
  },
  {
    id: "3",
    icon: TreePalm,
    name: "Lazer",
    quantity: 3,
    amount: 30,
  },
  {
    id: "4",
    icon: Pill,
    name: "Saúde",
    quantity: 2,
    amount: 20,
  },
  {
    id: "5",
    icon: CircleEllipsis,
    name: "Educação",
    quantity: 1,
    amount: 10,
  },
]



export default function Home() {


  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      justifyContent: "start",
      alignItems: "start",
      // height: "100vh",
      maxWidth: "1000px",
      width: "100%",
      margin: "0 auto",
      padding: "1rem"
    }}>
      <Header />

      <section style={{
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        width: "100%",
        height: "100%",
        maxHeight: "300px",
      }}>
        <CardSummary />
      </section>

      <section style={{
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        width: "100%",
        height: "100%",
        maxHeight: "350px",
      }}>
        <ChartAnalyze />
        <Category categories={categories} />
      </section>

      <section style={{
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        width: "100%",
      }}>
        <TransactionTable />
      </section>
    </main >
  );
}
