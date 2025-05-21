import { Banknote, BanknoteArrowDown, BanknoteArrowUp } from "lucide-react";
import style from "./card-summary.module.css";

// interface CardSummaryProps {
//   amount: number;

// }


// const cards = [
//   {
//     icon: BanknoteArrowDown,
//     type: "income",
//     amount: 7840.56,
//     description: "Soma de todas as entradas do período",
//   },
//   {
//     icon: BanknoteArrowUp,
//     type: "expense",
//     amount: 1580.45,
//     description: "Soma de todas as saídas do período",
//   },
//   {
//     icon: Banknote,
//     type: "balance",
//     amount: 6260.11,
//     description: "Soma de todas as entradas e saídas do período",
//   }
// ]

export function CardSummary() {


  return (
    <div
      className={style.container}
    >
      <div className={`${style.card} ${style.income}`}>
        <div className={style.header}>
          <span>Entradas</span>
          <BanknoteArrowDown strokeWidth={1} />

        </div>
        <div
          className={`${style.content} ${style.income}`}
        >
          <span>{(7840.56).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}</span>
        </div>

        <div className={style.footer}>
          <p>Soma de todas as entradas do período</p>
        </div>
      </div>

      <div className={`${style.card} ${style.expense}`}>
        <div className={style.header}>
          <span>Saídas</span>
          <BanknoteArrowUp strokeWidth={1} />

        </div>
        <div className={`${style.content} ${style.expense}`}>
          <span>{(1580.45).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}</span>
        </div>

        <div className={style.footer}>
          <p>Soma de todas as entradas do período</p>
        </div>
      </div>

      <div className={`${style.card} ${style.balance}`}>
        <div
          className={style.header}
        >
          <span>Balanço</span>
          <Banknote strokeWidth={1} />

        </div>
        <div
          className={style.content}
        >
          <span>{(6260.11).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}</span>
        </div>

        <div className={style.footer}>
          <p>Soma de todas as entradas do período</p>
        </div>
      </div>
    </div>
  );
}
