import React from 'react'
import styled from 'styled-components'

import ShopLogo from '../ShopLogo'
import ShopMenu from '../ShopMenu'
import ShopRightView from '../ShopRightView'

const SCShopHeaderContainer = styled.div`
    height : 150px;
    width : 100%;
    background-color : pink;
    padding : 0px 50px;
    display: flex;
    flex-direction :row;
    align-items: center;
`

export default class ShopHeader extends React.Component{
    render(){
        return(
            <SCShopHeaderContainer>
                <ShopLogo/>
                <ShopMenu/>
                <ShopRightView/>
            </SCShopHeaderContainer>
        )
    }
}