import React from 'react';
import styled from 'styled-components';

import SlidePage from "../../components/date.components/SlidePage";

const SCContainer = styled.div`
    background-color: yellow;
    width : 100%;
    height : 100vh;
    position : absolute
`


export default class DatePage extends React.Component{
    render(){
        return(
            <SCContainer>
                <SlidePage/>
            </SCContainer>
        )
    }
}
