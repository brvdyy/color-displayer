import React from 'react'
import styles from './HandleSearch.module.css'

const HandleSaarch = ({ search, setSearch , setColor }) => {

  function isValidColor(strColor) {
    var s = new Option().style;
    s.color = strColor;

    return s.color === strColor.toLowerCase();
  }

  const handleColorSearch = (target) => {
    setSearch(target);

    if(isValidColor(target)) {
      setColor(target);
    }
    else {
      setColor('');
    }
  }

  return (
    <form className={styles.searchForm} onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='search'>Search</label>
        <input
          id='search'
          type='text'
          role='searchbox'
          placeholder='Input a color...'
          autoComplete='off'
          value={search}
          onChange={(e) => handleColorSearch(e.target.value)}
          />
    </form>
  )
}

export default HandleSaarch