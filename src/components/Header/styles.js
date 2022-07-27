import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 2rem;
  background: #212121;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  color: white;

  div{
    display: flex;

    p{
      margin: 0 0.5rem;
    }
  } 

  @media (max-width: 720px){
    display: none;
    }

`;