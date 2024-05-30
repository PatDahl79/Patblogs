import React, { useState } from 'react';
import MyContext from './myContext';

function ThemeProvider(props) {
    const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        } else {
            setMode('light');
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
        }
    }

    return (
        <MyContext.Provider value={{ mode, toggleMode }}>
            {props.children}
        </MyContext.Provider>
    );
}

export default ThemeProvider;
