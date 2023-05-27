import React, { useState } from "react";
import Header from "./Header";
import ColorBox from "./ColorBox";
import HandleSearch from "./HandleSearch";
import styles from './App.modules.css';

function App() {
  const [ search, setSearch ] = useState('');
  const [ color, setColor ] = useState('white');

  return (
    <div className={styles.container}>
      <Header />
      <ColorBox 
        search={search}
        color={color}
      />
      <HandleSearch 
        search={search}
        setSearch={setSearch}
        color={color}
        setColor={setColor}
      />
    </div>
  );
}

export default App;
