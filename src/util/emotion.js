export const getEmotionEmoji = (value) => {
  if (value < 0 || value > 1) {
    return null;
  } else if (value < 0.2) {
    return '😔';
  } else if (value < 0.4) {
    return '😕';
  } else if (value < 0.6) {
    return '😐';
  } else if (value < 0.8) {
    return '🙂';
  } else {
    return '😃';
  }
};

/*
Emotions
Sad: 😭
Angry: 😡
Stressed: 😖
Bored: 🥱
*/

export const generateEmotionValues = (count) => {
  const data = [];
  for (let i = 0; i < count; i++) {
    let value = Math.random();
    data.push(value);
  }
  return data;
};

export const generateDayEmotionValues = (count) => {
  // count: number of times the person reported that day,
  // returns mapping of emotions to list of reports
  return {
    SAD: generateEmotionValues(count),
    ANGRY: generateEmotionValues(count),
    STRESSED: generateEmotionValues(count),
    BORED: generateEmotionValues(count),
  };
};

export const generateMultiDayEmotionValues = (days, dailyCount) => {
  return Array(days)
    .fill()
    .map(() => generateDayEmotionValues(dailyCount));
};

export const getAverages = (multiDaydata) => {
  const averages = [];
  multiDaydata.forEach((dayData) => {
    averages.push(
      Object.values(dayData)
        .flat()
        .reduce((a, b) => a + b, 0) / Object.values(dayData).flat().length
    );
  });

  return averages;
};

export const getFrequencies = (multiDayData) => {
  const frequencies = {
    SAD: 0,
    ANGRY: 0,
    STRESSED: 0,
    BORED: 0,
    HAPPY: 0,
  };

  const HAPPY_THRESHOLD = 0.5;

  multiDayData.forEach((dayData) => {
    frequencies['SAD'] += dayData['SAD'].reduce((a, b) => (b < HAPPY_THRESHOLD ? a + b : a), 0);
    frequencies['ANGRY'] += dayData['ANGRY'].reduce((a, b) => (b < HAPPY_THRESHOLD ? a + b : a), 0);
    frequencies['STRESSED'] += dayData['STRESSED'].reduce((a, b) => (b < HAPPY_THRESHOLD ? a + b : a), 0);
    frequencies['BORED'] += dayData['BORED'].reduce((a, b) => (b < HAPPY_THRESHOLD ? a + b : a), 0);
    frequencies['HAPPY'] += Object.values(dayData)
      .flat()
      .reduce((a, b) => (b >= HAPPY_THRESHOLD ? a + b : a), 0);
    frequencies['HAPPY'] /= 1.75;
  });

  return frequencies;
};
