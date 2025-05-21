import * as lucide from "lucide-react";
import transactions from "../../assets/transactions.json" with { type: "json" };
import React, { useEffect } from "react";
import style from "./transactions-table.module.css";
import { Pagination } from "../pagination";

type Transaction = typeof transactions[0];

export function TransactionTable() {

  useEffect(() => {
    import("lucide-react").then((mod) => console.log(mod));
  })

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "100%",
        height: "100%",
      }}
    >
      <h3>Transactions</h3>
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "100%",
        height: "100vh",
        overflow: "auto",
      }}>
        <table className={style.transactionTable}>
          <thead>
            <tr>
              <th></th>
              <th style={{ textAlign: "start", color: "#666", fontWeight: "normal" }}>Descrição</th>
              <th style={{ textAlign: "start", color: "#666", fontWeight: "normal" }}>Tipo</th>
              <th style={{ textAlign: "start", color: "#666", fontWeight: "normal" }}>Valor</th>
              <th style={{ textAlign: "start", color: "#666", fontWeight: "normal" }}>Banco</th>
              <th style={{ textAlign: "start", color: "#666", fontWeight: "normal" }}>Data</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction: Transaction) => (
              (
                <tr key={transaction.id}>
                  <td>
                    <div>
                      {transaction.category.icon in lucide
                        ? React.createElement(lucide[transaction.category.icon as keyof typeof lucide] as React.ElementType)
                        : null}
                    </div>
                  </td>
                  <td>
                    {transaction.description}
                  </td>
                  <td>
                    {transaction.type === "income" ? "Entrada" : "Saída"}
                  </td>
                  <td>
                    {transaction.amount.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </td>
                  <td>
                    {transaction.bank}
                  </td>
                  <td>
                    {new Date(transaction.date).toLocaleString("pt-BR")}
                  </td>
                </tr>
              )
            ))}

          </tbody>
        </table>
      </div>
      
      <Pagination />
    </div>
  )
}
