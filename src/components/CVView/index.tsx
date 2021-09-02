import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  width : 100%;
  height: 100%;
  background-color: pink
`

class CVView extends React.Component{
      render() {
        return (
          <Container>
            cv
          </Container>
        );
      }
      
}

export default CVView;