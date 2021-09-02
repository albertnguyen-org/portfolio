import React from 'react'
import styled from 'styled-components'


const SCNoti = styled.p`
  text-align: center;
  font-size : 30px;
  color: white;
  font-weight: bold;

`
const FeatureComingSoon = () => {
    let txt = "Feature is comming";
    return <SCNoti>{txt.toUpperCase()}</SCNoti>
}

export default FeatureComingSoon;