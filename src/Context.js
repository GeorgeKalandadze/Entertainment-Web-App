import React, { createContext, useContext, useState } from 'react'
import FilmDataJson from './data.json'

const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [filmData, setFilmData] = useState(FilmDataJson);
  const [searchFilter, setSearchFilter] = useState('');

  //add bookmark function
  const bookmarkHandler = (title) => {
    const isFavorite =  filmData.map(item => (
      item.title === title?{ ...item, isBookmarked:!item.isBookmarked}:item
      ))
      console.log(isFavorite)
    setFilmData(isFavorite);
  }

  //search filter functions
  const handleSearchFilterChange = (event) => {
    setSearchFilter(event.target.value);
  };

  const filteredData = filmData.filter((item) => item.title.toLowerCase().includes(searchFilter));

  
  return <AppContext.Provider value={{filteredData,filmData,setFilmData,bookmarkHandler,handleSearchFilterChange,searchFilter}}>
    {children}
  </AppContext.Provider>
  
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}