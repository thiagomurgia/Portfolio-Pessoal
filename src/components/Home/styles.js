import styled from "styled-components";

export const Container = styled.div`
  transition: 0.2s;
  width: 100vw;
  height: 96.55vh;
  background: #333;
  position: absolute;
  display: flex;
  background-color: rgba(51, 51, 51, 0.8);


  div{
    width: 100%;
    height:100%;
    position: relative;
    
  }
  .left{
    display: flex;
    align-items: center;
    justify-content: center;
      .lottie{
        position: relative;
        padding: 8%;
      }
    }

    .right{
      display: flex;
      align-items: center;
      justify-content: center;

      .content{
        width: 90%;
        height: 65%;
        border-radius: 0.5rem;
        background-color: rgba(188, 188, 188, 0.8);
        position: relative;
        .header{
          position: absolute;
          width: 100%;
          height: 2rem;
          background-color: #121212;
          border-radius: 0.5rem 0.5rem 0 0;
          display: flex;
          align-items: center;
          

          div{
            width: 1rem;
            height: 1rem;
            border-radius: 2rem;
            background: red;
            &:first-child{
              margin-left: 1rem;
            }
            &:nth-child(2){
              margin-left: 0.5rem;
              background: yellow;
            }
            &:nth-child(3){
              margin-left: 0.5rem;
              background: green;
            }
            &:nth-child(4){
              margin-left: 0.5rem;
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              background: transparent;
              p{
                color: #777;
                margin-left: -10%;
              }
            }
          }
        }
        .content-body{
          margin: 2.5rem 0;
          font-family: "VT323", monospace;

          .wrapper-server{
            width: 7rem;
            height: 1.5rem;
            background: rgb(51, 51, 51);
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
            div{
              width: 0.6rem;
              height:100%;
              opacity: 0.3;
              &:first-child{
                background: rgba(0,0,0, 0.4);
              }
              &:nth-child(2){
                background: rgba(0,0,0, 0.7);
              }
              &:nth-child(3){
                background: rgba(0,0,0, 0.9);
              }
              &:nth-child(4){
                background: rgba(0,0,0, 1);
                width: 3rem;
                display: flex;
                align-items: center;
                justify-content: center;
                
                img{
                  width: 1.2rem;
                  opacity: 1;
                }
              }
              
            }
            .anglex{
                  height: 1px;
                  width:15%;
                  background: #fff;
                  border:solid 1px #fff;
                  transform: rotate(45deg);
                  margin-top: -8%;
                  opacity:1;
                }
                .angley{
                  height: 1px;
                  width:14%;
                  background: #fff;
                  border:solid 1px #fff;
                  transform: rotate(-45deg);
                  margin-top: 12.8%;
                  margin-left: -14.3%;
                  opacity:1;
                }
          }
        }
      }
    }


  @media (max-width: 720px){
    height: 100vh;
    flex-direction: column;
    
    .left{
      align-items: flex-start;
      margin-top: 0;
      height: 50%;

      .lottie{
        position: relative;
        padding: 5%;
      }
    }
    .right{
      align-items: flex-start;
      margin-top: 0;
    }
    
    
      
    }
`;