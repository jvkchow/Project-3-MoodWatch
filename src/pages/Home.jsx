import { useContext, useEffect, useState } from 'react';
import { DailyTip } from '../components/DailyTip';
import { NavBar } from '../components/NavBar';
import { PhoneScreen } from '../components/PhoneScreen';
import { WeeklyFrequencyChart, WeeklyMoodChart } from '../components/MoodChart';
import { UserContext } from '../contexts/UserContext';
import { generateEmotionValues, generateMultiDayEmotionValues, getAverages, getFrequencies } from '../util/emotion';
import { MoodContext } from '../contexts/MoodContext';

export const Home = () => {
  const { userInfo } = useContext(UserContext);
  const [weeklyData, setWeeklyData] = useState([]);

  useEffect(() => {
    const storedWeeklyData = JSON.parse(localStorage.getItem('weeklyMood'));
    if (storedWeeklyData) {
      setWeeklyData(storedWeeklyData);
    } else {
      const newData = generateMultiDayEmotionValues(7, 3);
      localStorage.setItem('weeklyMood', JSON.stringify(newData));
      setWeeklyData(newData);
    }
  }, [setWeeklyData]);

  const frequencies = getFrequencies(weeklyData);

  const frequencyData = {
    labels: ['😭', '😡', '😖', '🥱', '😄'],
    datasets: [
      {
        data: [
          frequencies['SAD'],
          frequencies['ANGRY'],
          frequencies['STRESSED'],
          frequencies['BORED'],
          frequencies['HAPPY'],
        ],
        fill: true,
        borderColor: '#FFA071',
        backgroundColor: 'rgba(255, 222, 142, 0.75)',
      },
    ],
  };

  const weekAvgData = {
    labels: ['M', 'T', 'W', 'Th', 'F', 'S', 'Sn'],
    datasets: [
      {
        label: 'Mood',
        data: getAverages(weeklyData),
        fill: true,
        borderColor: '#FFA071',
        backgroundColor: 'rgba(255, 222, 142, 0.75)',
      },
    ],
  };

  return (
    <PhoneScreen>
      <h1>{`Welcome Back user!`}</h1>
      <h3>Your week so far...</h3>
      <WeeklyMoodChart data={weekAvgData} />
      <DailyTip />
      <WeeklyFrequencyChart data={frequencyData} />
      <NavBar isHome={true} />
    </PhoneScreen>
  );
};
