import styled from 'styled-components';
import React from 'react'
import { Link } from 'react-router-dom';
import {ReactComponent as MainLogo} from '../assets/logo.svg'
import {ReactComponent as HomeIcon} from '../assets/icon-nav-home.svg'
import {ReactComponent as NavMovieIcon} from '../assets/icon-nav-movies.svg'
import {ReactComponent as NavTvSeriesIcon} from '../assets/icon-nav-tv-series.svg'
import {ReactComponent as BookmarkieIcon} from '../assets/icon-nav-bookmark.svg'
import AvatarImage from '../assets/image-avatar.png'


const Navbar = () => {
  return (

<Container>
<MainLogo/>
  <Links>
    <Link to="/"><HomeIcon/></Link>
    <Link to={"/movies"}><NavMovieIcon/></Link>
    <Link to={"/tv-series"}><NavTvSeriesIcon/></Link>
    <Link to={"/bookmarks"}><BookmarkieIcon/></Link>
  </Links>
    <AvatarImg src={AvatarImage}></AvatarImg>
    
</Container>
    
  )
}

export default Navbar

const Container = styled.div`
padding:25px;
box-sizing:border-box;
width:7%;
height:100vh;
background:#161D2F;
border-radius:20px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;

@media screen and (max-width: 1350px){
  position: fixed;
  top: 0;
  left:0;
  right:20px;
  z-index: 10;
  width: 100%;
  height: 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction:row;
  
}

  
`

const Links = styled.nav`
gap:24px;
display:flex;
flex-direction:column;
align-items:center;
justify-self:flex-start;

@media screen and (max-width: 1350px){
flex-direction:row;
display:flex;
align-items:center;
justify-self:flex-start;
gap:54px;
}
`

const AvatarImg = styled.img`
width:40px;
height:40px;

@media screen and (max-width:768px){
  width:34px;
  height:34px;
}
`

const StyledLink = styled(Link)`
 
`;





