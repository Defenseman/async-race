import { Button } from '../../../../../components/Button/Button';
import styles from './styles.module.scss';
import { Modal } from '../../../../../components/Modal/Modal';
import { useRace } from './hooks/useRace';

type Car = {
  name: string;
  color: string;
  id: number;
};

type RaceControlsProps = {
  cars: Car[];
};

export function RaceControls({ cars }: RaceControlsProps) {
  const {
    isRunning,
    resetRace,
    startRace,
    winner,
    isOpenModal,
    setIsOpenModal,
  } = useRace(cars);

  return (
    <div className={styles.container}>
      <Button disabled={isRunning} onClick={startRace} width="90px">
        Race
      </Button>
      <Button onClick={resetRace} width="90px">
        Reset
      </Button>
      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <h2>Winner: {winner?.name}</h2>
        <h3>Time: {winner?.time.toFixed(2)}s</h3>
      </Modal>
    </div>
  );
}
