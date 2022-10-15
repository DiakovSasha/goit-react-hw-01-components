import PropTypes from 'prop-types';
import css from '../Statistic/statistic.module.css';

function Statistic({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>Upload stats</h2>}

      <ul className={css.statList}>
        {stats.map(stat => (
          <li key={stat.id} className={css.item}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Statistic;

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
