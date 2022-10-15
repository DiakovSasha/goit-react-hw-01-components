import PropTypes from 'prop-types';
import css from '../Transactions/transactions.module.css';

function Transactions({ items }) {
  return (
    <table className={css.transactionsTable}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(el => (
          <tr key={el.id}>
            <td>{el.type}</td>
            <td>{el.amount}</td>
            <td>{el.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Transactions;
