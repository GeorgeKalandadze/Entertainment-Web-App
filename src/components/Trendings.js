import React from 'react'
import styled from 'styled-components';
import { useGlobalContext } from '../Context'
import {useState,useEffect} from 'react';
import TrendingMovie from './TrendingMovie';

const Trendings = () => {
  const {filmData} = useGlobalContext();
  const trendingFilms = ( filmData.filter((film) => film.isTrending !== false))
  
  return (
    <TrendingsCont>
      {
        trendingFilms.map((film,index) => {
          return <TrendingMovie key={index} {...film}/>
        })
      }
    </TrendingsCont>
        
  )
}

export default Trendings

const TrendingsCont = styled.div`
display:flex;
gap:30px
`