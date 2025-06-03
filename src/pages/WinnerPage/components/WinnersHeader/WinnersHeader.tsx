import styles from './styles.module.scss';

export function WinnersHeader() {
  return (
    <div className={styles.header}>
      <h1>Winners</h1>
      <div className={styles.tabsHeader}>
        <div>№</div>
        <div>Car</div>
        <div>Name</div>
        <div>Wins</div>
        <div>Best Time (seconds)</div>
      </div>
    </div>
  );
}
