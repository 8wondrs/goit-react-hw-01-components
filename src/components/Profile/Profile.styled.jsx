import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

export const Description = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  border-radius: 4px 4px 0px 0px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Avatar = styled.img`
  display: block;
  width: 175px;
  margin: 20px 0 20px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid slategray;
  transition: background-color 0.3s;
  &:hover {
    background-color: lightgreen;
    border-color: green;
  }
`;

export const Name = styled.p`
  font-size: 22px;
  line-height: 1.62;
  color: #333333;
  font-weight: bold;
`;

export const Text = styled.p`
  line-height: 1.62;
  color: #666666;
  margin: 0;
  :last-child {
    margin-bottom: 15px;
  }
`;

export const Stats = styled.ul`
  background-color: #ffffff;
  width: 350px;
  display: flex;
  margin: 0 auto;
  padding: 0;
  align-items: center;
  justify-content: center;
  border-radius: 0px 0px 4px 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const StatsList = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  border-top: 1px solid #e0e0e0;
  :not(:last-child) {
    border-right: 1px solid #e0e0e0;
  }
  :not(:last-child) p {
    border-right: none;
  }
  transition: background-color 0.3s;
  &:hover {
    background-color: lightgreen;
  }
`;

export const Label = styled.p`
  display: flex;
  line-height: 1.62;
  font-weight: 500;
  text-align: center;
  justify-content: center;
  color: #666666;
  margin-top: 10px;
`;

export const Quantity = styled.p`
  text-align: center;
  line-height: 1.58;
  font-weight: bold;
  margin: 10px auto;
  color: #333333;
`;
