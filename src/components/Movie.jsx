import React from 'react'
import styled from 'styled-components';
import MovieIcon from '../assets/icon-category-movie.svg'
import TvSeriesIcon from '../assets/icon-category-tv.svg'
import BookmarkIconEmpty from '../assets/icon-bookmark-empty.svg'
import BookmarkIconFull from '../assets/icon-bookmark-full.svg'
import { useGlobalContext } from '../Context';

const Movie = ({title,year,category,thumbnail,rating,isBookmarked}) => {
 const {bookmarkHandler} = useGlobalContext()
  
  return (
    <MovieContiner>
        <Img  src={thumbnail.regular.medium}/>
        <About>
        <span className='item--span'>{year} • <img src={category === "Movie" ? MovieIcon : TvSeriesIcon} alt='movie' /> {category} • {rating}</span>
        </About>
        <Title>{title}</Title>
        <Bookmark onClick={() => bookmarkHandler(title)}>
          <img src={isBookmarked?BookmarkIconFull:BookmarkIconEmpty}/>
        </Bookmark>
    </MovieContiner>
  )
}

export default Movie

const MovieContiner = styled.div`
min-width: 280px;
height: 174px;
border-radius: 8px;
position:relative;

@media screen and (max-width:998px){
  min-width: 220px;
  height: 144px;
}

@media screen and (max-width:768px){
  height: 100px;
}

@media screen and (max-width:458px){
  min-width:100%;
  height: 130px;
}

`

const Img = styled.img`
width:100%;
height:100%; 
border-radius:8px;
`

const Title = styled.h3`
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 30px;
color: #FFFFFF;
margin-top:8px;

`

const About = styled.div`
color:#FFFFFF;
display:flex;
align-items:center;
margin-top:5px;
opacity: 70%;
`
const Bookmark = styled.div`
display:flex;
position:absolute;
top:20px;
right:20px;
cursor: pointer;
width:32px;
height:32px;
background: #10141E;
border-radius:50%;
align-items: center;
justify-content: center;
opacity:50%;


`