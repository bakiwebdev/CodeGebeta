import React, {useState} from 'react';
import {View, Text} from 'react-native';
import ThemeContext from './ThemeProvider';

const GlobalProvider = ({children}) => {
  const [value, setValue] = useState(false);
  return (
    <ThemeContext.Provider value={{value, setValue}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default GlobalProvider;
