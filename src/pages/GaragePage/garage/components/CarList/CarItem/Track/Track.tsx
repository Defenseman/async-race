import styles from './styles.module.scss';

interface TrackProps {
  name: string;
}

export function Track({ name }: TrackProps) {
  const [brand] = name.split(' ');
  return (
    <div className={styles.container}>
      <h1 className={styles.carName}>
        <span className={styles.full}>{name}</span>
        <span className={styles.short}>{brand}</span>
      </h1>
      <div className={styles.botomLine} />
    </div>
  );
}
