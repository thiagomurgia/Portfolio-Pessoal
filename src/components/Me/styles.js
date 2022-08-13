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



`;

export const Content = styled.div`
  width: 80vw;
  max-width: 800px;
  display: flex;
  justify-content: center;
  background: #393E46;
  border-radius: 8px;
  box-shadow: 1px 1px 2px 0 #000;

  

  .card{
    width: 100%;

    @media(max-width: 670px){
    .card-body{
      .techs{
        .grid{
          grid-template-columns: 1fr 1fr;
        }
      }
    }
      }

  }

  .loading{
    width: 30%;
  }

  .header{
    display: flex;
    justify-content: center;
    margin-top: -5rem ;
    img{
      border-radius: 100%;
      max-width: 180px;
      border:solid 10px #393E46;
    }
  }
  .card-body{
      h1, h2, h3, h4{
        color: #A98B98;
      }
      span{
          color: #726A95;
        }
      h1{
        text-align: center;
      }

      h2, h3, h4{
        padding:8px;
      }

      .techs{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .grid{
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-gap: 4px;

        }
        
        p{
        background:#222831;
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        padding: 4px 16px;
        border-radius: 4px;
        cursor:default;
        margin: 4px 0;
        opacity: 0.8;
          transition: 0.2s;
          &:hover{
            opacity:1;
          }
        img{
          width:30px;
        }
        span{
          margin-left: 8px;
          color:#EEEEEE;
          font-weight: 900;
        }
      }
    }

    .curriculo{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 8px;
      flex-direction: column;
      button{
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        border:solid 2px #a98b98;
        border-radius:4px;
        padding: 8px 36px;
        color:#a98b98;
        justify-content: space-around;
        cursor:pointer;
        font-weight: 700;
        transition: .2s;
        font-size: 1rem;

        &:hover{
          background:#a98b98;
          color:#393E46;
        }
      }
    }

      
  }
  .card-footer{
    display: flex;
    justify-content: space-around;
    margin:18px 0;
    img{
      width: 30px;
    }
  }



  
`;