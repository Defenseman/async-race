import { useState } from 'react';
import {
  createWinner,
  getWinnerById,
  updateWinner,
} from '../../../../../../services/winnersApi';

type Winner = {
  id: number;
  time: number;
  name: string;
};

export function useRaceWinner() {
  const [winner, setWinner] = useState<{
    id: number;
    time: number;
    name: string;
  } | null>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const saveWinner = async (winnerData: Winner) => {
    setWinner(winnerData);

    try {
      const existingWinner = await getWinnerById(winnerData.id);
      if (existingWinner) {
        setIsOpenModal(true);
        await updateWinner(winnerData.id, {
          wins: existingWinner.wins + 1,
          time: Math.min(winnerData.time, existingWinner.time),
        });
      } else {
        await createWinner({
          id: winnerData.id,
          wins: 1,
          time: winnerData.time,
        });
      }
    } catch (error) {
      console.error('Ошибка при обработке победителя:', error);
    }
  };
  return {
    winner,
    setWinner,
    saveWinner,
    isOpenModal,
    setIsOpenModal,
  };
}
