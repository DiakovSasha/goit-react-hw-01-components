import Profile from '../Components/Profile-user/profile';
import Statistic from '../Components/Statistic/statistic';
import FriendList from './FriendList/friendlist';
import Transactions from '../Components/Transactions/transactions';

import user from '../Data/user.json';
import statistic from '../Data/statistic.json';
import friendlist from '../Data/friendlist.json';
import transactions from '../Data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={statistic} />
      <Statistic stats={statistic} />
      <FriendList friends={friendlist} />
      <Transactions items={transactions} />
    </div>
  );
};
