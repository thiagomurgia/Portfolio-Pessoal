import styled from "styled-components";


export const Section = styled.section`
  position:absolute;
`;


export const Dock = styled.div`
  max-width: 20rem;
  height: 3rem;
  background-color: rgba(101, 101, 101 ,0.2);
  border-radius: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position:absolute;
  bottom: 0;
  left:0;
  right:0;
  margin: 0 auto;
  margin-bottom: 1.75rem;
  padding: 0 1.5rem;

  img{
    width: 10%;
    transition: 0.2s;
    cursor: pointer;

    &:hover{
      width: 16%;
    }
  }
  


  @media (max-width: 720px){
    margin-bottom: 1rem;
    }
  
  
`;