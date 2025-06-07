import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRaceWinner } from './useRaceWinner';
import { useStartRace } from './useStartRace';
import { resetRace } from './resetRace';
import { AppDispatch } from '../../../../../../store/store';

type Car = {
  id: number;
  name: string;
  color: string;
};

export function useRace(cars: Car[]) {
  const dispatch = useDispatch<AppDispatch>();
  const { winner, saveWinner, setWinner, isOpenModal, setIsOpenModal } =
    useRaceWinner();
  const { startRace } = useStartRace();

  const [isRunning, setIsRunning] = useState(false);

  const handleStart = async () => {
    setIsRunning(true);
    const results = await startRace(cars);
    setIsRunning(false);

    if (results.length) {
      const firstWinner = results.reduce((a, b) => (a.time < b.time ? a : b));
      await saveWinner(firstWinner);
    }
  };

  const handleReset = () => {
    resetRace(cars, dispatch);
    setWinner(null);
    setIsRunning(false);
  };

  return {
    startRace: handleStart,
    resetRace: handleReset,
    winner,
    isRunning,
    isOpenModal,
    setIsOpenModal,
  };
}
