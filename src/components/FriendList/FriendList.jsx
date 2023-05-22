import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { FriendItems, FriendCard } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <FriendCard>
      <FriendItems>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </FriendItems>
    </FriendCard>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
