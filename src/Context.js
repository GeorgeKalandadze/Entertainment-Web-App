import React, { createContext, useContext, useState } from 'react'
import FilmDataJson from './data.json'

const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [filmData, setFilmData] = useState(FilmDataJson);
  
  const bookmarkHandler = (title) => {
    const isFavorite =  filmData.map(item => (
      item.title === title?{ ...item, isBookmarked:!item.isBookmarked}:item
      ))
      console.log(isFavorite)
    setFilmData(isFavorite);
  }

  
  return <AppContext.Provider value={{filmData,setFilmData,bookmarkHandler}}>
    {children}
  </AppContext.Provider>
  
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}