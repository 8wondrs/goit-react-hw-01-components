import styled from 'styled-components';

export const FriendCard = styled.div`
  padding: 40px;
`;

export const FriendList = styled.li`
  display: flex;
  margin: 10px;
  padding: 10px;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid lightgrey;
  border-radius: 4px;
  border-color: ${props => (props.statusType ? 'lightseagreen' : 'lightcoral')};
  transition: background-color 0.3s;
  cursor: pointer;
  &:hover {
    background-color: ${props =>
      props.statusType ? 'lightseagreen' : 'lightcoral'};
  }
`;

export const FriendAvatar = styled.img`
  width: 75px;
`;

export const FriendName = styled.p`
  font-size: 18px;
  line-height: 1.62;
  margin-left: 20px;
`;

export const FriendStatus = styled.p`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${props => (props.statusType ? 'green' : 'red')};
`;

export const FriendItems = styled.ul`
  display: flex;
  width: 350px;
  flex-direction: column;
  margin: 0 auto;
  list-style-type: none;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;
