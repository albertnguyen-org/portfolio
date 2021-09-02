import React from 'react';
import styled from 'styled-components'

import userData from '../../data/personal.json'
const ImgAvt = require("../../assets/imgs/avt.jpg")

const SCContainerShortResume = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction : column;
`

const StyledContainerAvatar = styled.div`
    height : 200px;
    width : 200px;
    background-color :transparent;
    border-radius : 100px;
`
const StyledImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    border-radius : 100px;
`

const SCNickName = styled.p`
    font-size : 4rem;
    margin: 0px;
    white-space: nowrap;
    color: black;
    font-weight : bold;
`
const SCDesc = styled.p`
    font-size : 1rem;
    margin: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 60%;
    overflow-wrap: break-word;
    text-align:center;
`


export default class ShortResume extends React.Component{
    render(){
        return(
            <SCContainerShortResume>
                <StyledContainerAvatar>
                <StyledImage src={ImgAvt}/>
                </StyledContainerAvatar>
                <SCNickName>{userData.name}</SCNickName>
                <SCDesc>{userData.desc}</SCDesc>
            </SCContainerShortResume>

        )
    }
}