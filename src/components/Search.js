import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '../assets/icon-search.svg'
import { useGlobalContext } from '../Context';
const Search = ({placeholder}) => {
  const {handleSearchFilterChange,searchFilter} = useGlobalContext();

  return (
    <InputContainer>
      <div style={{display:"flex",alignItems:"center"}}>
        <SearchIconImg src={SearchIcon}/>
        <SearchInput 
          type="text" 
          onChange={handleSearchFilterChange} 
          placeholder={placeholder}
          value={searchFilter}
        />
      </div>
    </InputContainer>
  )
}

const InputContainer = styled.div`
display:flex;
min-width:100%;

box-sizing:border-box;
margin-bottom:30px;
@media screen and (max-width: 1350px){
  
  margin-top:80px;
}
`

const SearchIconImg = styled.img`
align-self:flex-start;

`

const SearchInput = styled.input`
min-width:100%;
outline:none;
background-color:transparent;
border:none;
color:white;
font-family: 'Outfit';
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 30px;
margin-left:15px;
`
export default Search