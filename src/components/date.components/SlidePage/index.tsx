import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 100%;
    width : 100%;
    background : pink;
    position: absolute;
    display: flex;
    flex-direction: row;
`

const CenterCol = styled.div`
    background : green;
    width : 80%
`

const RestCol = styled.div`
    background : yellow;
    width : 10%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BtnCon = styled.button`
    height : 100px;
    width : 20px;
    background-color : red
`


const onClickedButton = (side: string) => {
    console.log(`Pressed`)
}
const BtnNextPrev = (side : any) => {
    return(
        <BtnCon
            onClick={()=>{onClickedButton(side)}}
        />    
        )
}

class SlidePage extends Component {
    render(){   
        return(
            <Container>
                <RestCol><BtnNextPrev side="left"/></RestCol>
                <CenterCol>center</CenterCol>
                <RestCol><BtnNextPrev side="left"/></RestCol>
            </Container>
        );
    }
}

export default SlidePage;