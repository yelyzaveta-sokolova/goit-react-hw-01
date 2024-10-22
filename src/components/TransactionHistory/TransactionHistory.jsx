import styles from "./TransactionHistory.module.css";
export default function TransactionHistory({ items }) {
  return (
    <table>
      <thead>
        <tr>
          <th className={styles.tableTitle}>Type</th>
          <th className={styles.tableTitle}>Amount</th>
          <th className={styles.tableTitle}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr key={item.id} className={styles.itemTransaction}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}