import { useState } from 'react';
import ThemeContext from '../context/themeContext';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

const themes = {
  dark: {
    background: 'black',
    color: 'white'
  },
  light: {
    background: 'white',
    color: 'black'
  }
}

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{
        width: '100%',
        minHeight: '100vh',
        ...themes[theme]
      }}>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </ThemeContext.Provider>
  )
}

export default MyApp;
