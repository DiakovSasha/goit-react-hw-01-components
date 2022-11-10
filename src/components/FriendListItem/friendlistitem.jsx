import PropTypes from 'prop-types';
import css from './friendlistitem.module.css';

export default function FrienListItem({ friend }) {
  return (
    <li className={css.item}>
      <span className={friend.isOnline ? css.friendOnline : css.friendOffline}>
        {friend.isOnline}
      </span>
      <img
        className={css.avatar}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{friend.name}</p>
    </li>
  );
}
FrienListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
