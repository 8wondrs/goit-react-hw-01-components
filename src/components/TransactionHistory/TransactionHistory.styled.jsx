import styled from 'styled-components';

export const TransactionCard = styled.div`
  padding: 40px;
`;

export const TransactionHistoryTable = styled.table`
  border-collapse: collapse;
  table-layout: auto;
  width: 350px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

export const TableHeader = styled.th`
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
  background-color: #01cdf9ba;
`;

export const TableData = styled.td`
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
`;

export const TableRow = styled.tr`
  transition: background-color 0.3s;
  :nth-of-type(even) {
    background-color: #fafafa;
  }

  &:hover {
    background-color: lightgray;
  }
`;
