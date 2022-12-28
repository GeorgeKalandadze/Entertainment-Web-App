import React from 'react'
import Search from '../components/Search'
import Trendings from '../components/Trendings'
import styled from 'styled-components';
import { useGlobalContext } from '../Context';
import Movie from '../components/Movie';

const Home = () => {
  const {filmData} = useGlobalContext();
  return (
      <HomeContainer>
        <Search
          placeholder={"Search for movies or TV series"}
        />
        <Trendings/>
        <RecomendedText>Recomended for you</RecomendedText>
        <MoviesCont>
          {
            filmData.map((film,index) => {
              return <Movie key={index} {...film} index={index}/>
            })
          }
        </MoviesCont>
      </HomeContainer>
  )
}



export default Home

const HomeContainer = styled.div`
  width:100%;
  padding:25px;
  overflow:hidden;
`

const RecomendedText = styled.h1`
margin-top:30px;
margin-bottom:30px;
font-family: 'Outfit';
font-style: normal;
font-weight: 300;
font-size: 32px;
line-height: 40px;
letter-spacing: -0.5px;
color: #FFFFFF;
`

const MoviesCont = styled.div`
width:100%;
display:grid;
grid-template-columns:auto auto auto auto;
justify-content:space-between;
grid-row-gap:90px;

@media screen and (max-width:1350px){
  grid-template-columns:auto auto auto ;
}
`

