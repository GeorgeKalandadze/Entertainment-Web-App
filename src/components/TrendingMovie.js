import React from 'react'
import styled from 'styled-components';
import MovieIcon from '../assets/icon-category-movie.svg'
import TvSeriesIcon from '../assets/icon-category-tv.svg'
import BookmarkIconEmpty from '../assets/icon-bookmark-empty.svg'
import BookmarkIconFull from '../assets/icon-bookmark-full.svg'
import { useGlobalContext } from '../Context';

const TrendingMovie = ({title,year,category,thumbnail,rating,isBookmarked}) => {
  const {bookmarkHandler} = useGlobalContext();
  return (
    
    <TrandingMovieContainer>
        <Img src={thumbnail.trending.small}/>
        <About>
        <span className='item--span'>{year} • <img src={category === "Movie" ? MovieIcon : TvSeriesIcon} alt='movie' /> {category} • {rating}</span>
        </About>
        <Title>{title}</Title>
        <Bookmark onClick={() => bookmarkHandler(title)}>
          <img src={isBookmarked?BookmarkIconFull:BookmarkIconEmpty}/>
        </Bookmark>
    </TrandingMovieContainer>
    

  )
}

export default TrendingMovie

const TrandingMovieContainer = styled.div`
  height:300px;
  min-width:470px;
  position:relative;
  border-radius: 8px;
  
`

const Img = styled.img`
  width:100%;
  height:100%;
  border-radius: 8px;
  
`

const Title = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  color: #FFFFFF;
  bottom:25px;
  left:25px;
  position:absolute;
`

const About = styled.div`
  color:#FFFFFF;
  display:flex;
  align-items:center;
  position:absolute;
  bottom:65px;
  left:25px;
  opacity: 70%;
`
const Bookmark = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  position:absolute;
  margin-top:-270px;
  margin-left:400px;
  cursor: pointer;
  width:32px;
  height:32px;
  background: #10141E;
  border-radius:50%;
  opacity:50%;
`
