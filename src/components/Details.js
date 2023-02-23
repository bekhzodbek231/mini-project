import React from 'react'
import styled from "styled-components";

const  Details = () => {
  return (
    <Container>
      <h1>details for movies</h1>
    </Container>
  )
};


const Container = styled.div`
     position: relative;
     min-height: calc(100vh - 250px);
     overflow: hidden;
     display: block;
     top: 0; 
`;

export default Details
