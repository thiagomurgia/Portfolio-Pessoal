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

  .card-profile{
    width: 40%;
    height: 60%;
    background: #dbd9f0;
    display: flex;
    justify-content: center;
    border-radius: 8px;
    box-shadow: 1px 1px 6px 0px #000;
    .pic-profile{
      display: flex;
      align-items: center;
      flex-direction: column;
      margin: -5rem 0;
    }
    .content{
      display: flex;
      align-items: center;
      flex-direction: column;
      h1{
        text-align: center;
      }
      h3{
        margin: 8px 5px;
        padding: 12px;
        background:#acacb0;
        width: 60%;
        border-radius: 50px;
      }
    }
    .pic-profile img{
      width: 8rem;
      border:solid 3px #000;
      border-radius: 50%;
    }

    .social-media{
      border:solid 1px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      a{
        filter: grayscale(100);
        transition: .2s;

        :hover{
          filter: grayscale(0);
        }

        
      }
      img{
        width:20%; 
        border:0;
        border-radius: 0;
    }
    }
  }
`;