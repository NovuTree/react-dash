import React from 'react';
import styled from 'styled-components';

const Info=styled.div`
  position: fixed;
  left: 70px;
  bottom: 24px;
  > span{
    text-shadow: 0 1px 5px ${({ theme}) => theme.black };;
    white-space: nowrap;
    >a{
      opacity:0.7;
      color:${({ theme}) => theme.white };;
      &:hover{
        opacity:1;
      }
    }
  }
`;
const BgInfo=({background})=>{
  const current=background.list.filter(
    (i)=>{return i.src===background.bg}
  )[0];
  const credit="?utm_source=ReactDash&utm_medium=referral&utm_campaign=api-credit";
  const author=current?(
    <span>
     Photo by <a href={current.user.link}>{current.user.name} </a>
    </span>
  ):null;
  const source=current&&background.option==='unsplash'?(
    <span>/ via <a href={'https://unsplash.com'+credit}>Unsplash</a></span>
  ):null;
  return(
    <Info>
      {author}
      {source}
    </Info>
  )
}
export default BgInfo;
