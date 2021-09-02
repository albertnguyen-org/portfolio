import React from 'react';
import styled from 'styled-components';
import './style.css';
import HamburgerButton from '../../HamburgerButton';
import { PATH_ROOT } from '../../../utils/paths';

const SCMenuBlog = styled.div`
    height : 100px;
    width :100%;
    display : flex;
    align-items: center;
    flex-direction: row;
`

export default class BlogMenu extends React.Component{
    state = {
        toggle : false,
        widthNavMenu : '0px',
        colorOfButton: 'black',
        optionsMenu : [
            {
                "id" : "oMenu1",
                "name" : "Home",
                "path" : PATH_ROOT
            },
            {
                "id" : "oMenu2",
                "name" : "About",
                "path" : "#"
            },
            {
                "id" : "oMenu3",
                "name" : "Service",
                "path" : "#"
            }
        ]
    }
    render(){
        return(
            <SCMenuBlog>
                <div  id="mySidenav" className="sidenav" style={{
                    width : `${this.state.widthNavMenu}`,
                }}>
                {
                    this.state.optionsMenu.map((item)=>{
                        return <a key={item.id} href={item.path}>{item.name}</a>
                    })
                }
                </div>
                <HamburgerButton color={this.state.colorOfButton} toggle = {this.state.toggle} onClick={()=>{
                    this.setState({
                        toggle : !this.state.toggle,
                        widthNavMenu : !(this.state.toggle) ? '250px' : '0px',
                        colorOfButton : !(this.state.toggle) ? 'white' : 'black'
                    })

                }} />
            </SCMenuBlog>
        );
    }
}