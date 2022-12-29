import React from 'react'
import Movie from '../components/Movie';
import { useGlobalContext } from '../Context'
import styled from 'styled-components';
import Search from '../components/Search';

const Bookmarked = () => {
  const {filmData} = useGlobalContext();
  const BookmarkedMovies = filmData.filter((movie) => movie.isBookmarked)
  
  

  return (
  <MainContainer>
    <Search
      placeholder={"Search for bookmarks"}
    />
    <Text>Movies</Text>
    <MoviesCont>
      {
        BookmarkedMovies.map((movie,index) => {
          return <Movie key={index} {...movie}/>
        })
      }
    </MoviesCont>
  </MainContainer>
  )
}

export default Bookmarked 

const MoviesCont = styled.div`
width:100%;
display:grid;
grid-template-columns:auto auto auto auto;
justify-content:space-between;
gap:80px 60px;
`

const MainContainer = styled.div`
width:100%;
padding:25px;
overflow:hidden;
@media screen and (max-width:1350px){
  grid-template-columns:auto auto auto ;
}

@media screen and (max-width:648px){
  grid-template-columns:auto auto ;
}

@media screen and (max-width:458px){
  grid-template-columns:auto  ;
}
`

const Text = styled.h2`
font-family: 'Outfit';
font-style: normal;
font-weight: 300;
font-size: 32px;
line-height: 40px;
letter-spacing: -0.5px;
color: #FFFFFF;
margin-bottom:20px;
`