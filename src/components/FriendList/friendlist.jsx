import PropTypes from 'prop-types';
import css from '../FriendList/friendlist.module.css';

function FriendList({ friends }) {
  return (
    <ul className={css.friendlist}>
      {friends.map(el => (
        <li className={css.item} key={el.id}>
          <span className={el.isOnline ? css.friendOnline : css.friendOffline}>
            {el.isOnline}
          </span>
          <img
            className={css.avatar}
            src={el.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{el.name}</p>
        </li>
      ))}
    </ul>
  );
}
export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
