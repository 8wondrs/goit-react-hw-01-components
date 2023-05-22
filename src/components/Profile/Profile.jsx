import PropTypes from 'prop-types';

import {
  ProfileCard,
  Description,
  Avatar,
  Name,
  Text,
  Stats,
  StatsList,
  Label,
  Quantity,
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  const bigNumbers = number => {
    return number.toLocaleString('en-US');
  };

  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </Description>

      <Stats>
        <StatsList>
          <Label>Followers</Label>
          <Quantity>{bigNumbers(stats.followers)}</Quantity>
        </StatsList>
        <StatsList>
          <Label>Views</Label>
          <Quantity>{bigNumbers(stats.views)}</Quantity>
        </StatsList>
        <StatsList>
          <Label>Likes</Label>
          <Quantity>{bigNumbers(stats.likes)}</Quantity>
        </StatsList>
      </Stats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
