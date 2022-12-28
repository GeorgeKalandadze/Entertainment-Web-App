import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '../assets/icon-search.svg'
import { useGlobalContext } from '../Context';
const Search = ({placeholder}) => {

  const [query, setQuery] = useState('')

  const search = (data) => {
    return data.filter((item) => item.title.toLowercase().includes(query))
  }

  return (
    <InputContainer>
      <div style={{display:"flex",alignItems:"center"}}>
        <SearchIconImg src={SearchIcon} />
        <SearchInput type="text" onChange={(e) => setQuery(e.target.value)} placeholder={placeholder}/>
      </div>
    </InputContainer>
  )
}

const InputContainer = styled.div`
display:flex;
width:100%;
align-items:flex-start;
box-sizing:border-box;
margin-bottom:30px;

`

const SearchIconImg = styled.img`
align-self:flex-start;

`

const SearchInput = styled.input`
width:100%;
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