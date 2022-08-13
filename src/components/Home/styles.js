import styled, { keyframes } from "styled-components";

const blink = keyframes`
  from{
    opacity:0;
  }
  to{
    opacity:1;
  }
`;

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
        padding: 10%;
      }
    }

    .right{
      display: flex;
      align-items: center;
      justify-content: center;

      .content{
        width: 80%;
        height:60%;
        display: flex;
        flex-direction: column;

        .header{
          background: #cfcfcf;
          border-radius: 8px 8px 0 0;
          height: 30px;
          h5{
            text-align: center;
            padding: 8px;
          }
        }
        .body-card{
          border-radius: 0 0 8px 8px;
          background: #000;
          color: green;
          padding: 8px;
          overflow-y: scroll;
          scrollbar-color: red;
        }
        .line{
          display: flex;
          flex-direction: column;

          div{
            span{
              color: #cfcfcf;
              margin-left: 8px;
            }
            ul li{
              list-style: none;
            }
            li{
              display: flex;
              margin: 4px 12px;
              padding: 4px;
              font-weight: 700;
              background: #48b098;
              display: inline-block;
              color:#333;
            }
            :first-child{
              height: 30px;
            }
            :last-child{
              span{
                animation: ${blink} 1s linear infinite;
              }
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