import { useDispatch } from 'react-redux';
import { Button } from '../../../../../../../components/Button/Button';
import styles from './styles.module.scss';
import { AppDispatch } from '../../../../../../../store/store';
import { deleteCar } from '../../../../../../../store/garage/operations';
import { Item } from '../../../../../../../store/garage/types';

export function CarButtons({
  carData,
  handleSelectedCar,
}: {
  carData: Item;
  handleSelectedCar: (car: Item) => void;
}) {
  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteCar = () => {
    dispatch(deleteCar(carData.id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Button onClick={() => handleSelectedCar(carData)}>
          <span className={styles.full}>Select</span>
          <span className={styles.short}>S</span>
        </Button>
        <Button onClick={() => handleDeleteCar()}>
          <span className={styles.full}>Remove</span>
          <span className={styles.short}>R</span>
        </Button>
      </div>
    </div>
  );
}
