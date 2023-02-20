import PropTypes from 'prop-types';
import {
  TransactionTable,
  Thead,
  TdTransaction,
  Tbody,
  CaptionTransaction,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <Thead>
        <tr>
          <CaptionTransaction>Type</CaptionTransaction>
          <CaptionTransaction>Amount</CaptionTransaction>
          <CaptionTransaction>Currency</CaptionTransaction>
        </tr>
      </Thead>

      <Tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <TdTransaction>{type}</TdTransaction>
            <TdTransaction>{amount}</TdTransaction>
            <TdTransaction>{currency}</TdTransaction>
          </tr>
        ))}
      </Tbody>
    </TransactionTable>
  );
};

TransactionHistory.protoType = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};