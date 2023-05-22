import styled from 'styled-components';

export const StatCard = styled.div`
  width: 350px;
  margin: 0 auto;
  padding: 40px;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
  color: #192431;
  margin: 0 auto;
  padding: 20px 0;
  background-color: white;
  border-radius: 4px 4px 0 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
  color: #f3f3f3;
  width: 70px;
  transition: transform 0.3s, z-index 0s;
  :first-child {
    border-radius: 0 0 0 4px;
  }
  :last-child {
    border-radius: 0 0 4px 0;
  }
  &:hover {
    transform: scale(1.2);
    transform-origin: center;
    z-index: 2;
  }
`;

export const StatLabel = styled.p`
  padding-top: 5px;
`;

export const StatPercentage = styled.p`
  font-size: 20px;
  padding-bottom: 5px;
`;
