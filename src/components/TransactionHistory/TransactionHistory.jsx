import React from "react";
import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <div className={s.table_box}>
      <table className={s.transaction_table}>
        <thead className={s.table_head}>
          <tr>
            <th className={s.table_cell}>Type</th>
            <th className={s.table_cell}>Amount</th>
            <th className={s.table_cell}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id} className={s.table_row}>
              <td className={s.table_cell}>{type}</td>
              <td className={s.table_cell}>{amount}</td>
              <td className={s.table_cell}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
