import React, { createContext, useState } from 'react';

export const MoodContext = createContext();

export const MoodContextProvider = ({ children }) => {
  const [moodInfo, setMoodInfo] = useState([]);

  return <MoodContext.Provider value={{ moodInfo, setMoodInfo }}>{children}</MoodContext.Provider>;
};
