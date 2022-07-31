import styled from "styled-components";

export const Container = styled.div`
  transition: 0.2s;
  width: 100vw;
  height: 96.55vh;
  background: #333;
  position: absolute;
  display: flex;
  background-color: rgba(51, 51, 51, 0.8);
  align-items: center;
  justify-content: center;

  .api-loading{
    width: 50%
  }

  .carousel-wrapper{
    position: relative;
    width: 80%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;

    .card-wrapper{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .card{
        background: #f6f6f6;
        border-radius: 5px 5px 0 0;
        .header{
        background: #5141FA;
        padding: 1rem;
        min-width: 50%;
        border-radius: 5px 5px 0 0 ;
        color: #fff;
        display: flex;
        justify-content: center;
      }
      .content{
        padding: 1rem;
      }
    }

      
    }
  }
`;