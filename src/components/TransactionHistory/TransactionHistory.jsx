import PropTypes from 'prop-types';
import {
  TransactionCard,
  TransactionHistoryTable,
  TableHeader,
  TableData,
  TableRow,
} from './TransactionHistory.styled.jsx';

const TransactionHistory = ({ items }) => {
  return (
    <TransactionCard>
      <TransactionHistoryTable>
        <thead>
          <tr>
            <TableHeader>Type</TableHeader>
            <TableHeader>Amount</TableHeader>
            <TableHeader>Currency</TableHeader>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <TableRow key={id}>
              <TableData>{type}</TableData>
              <TableData>{amount}</TableData>
              <TableData>{currency}</TableData>
            </TableRow>
          ))}
        </tbody>
      </TransactionHistoryTable>
    </TransactionCard>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
