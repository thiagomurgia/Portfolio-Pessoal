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
    width: 100%;
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
        min-width: 30%;
        max-width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .header{
        background: #5141FA;
        padding: 1rem;
        width: 100%;
        text-align: center;
        border-radius: 5px 5px 0 0 ;
        color: #fff;
        display: flex;
        justify-content: center;
        flex-direction: column;

        h1{
          color: #8781cf;
        }
        h3{
          color: #333;
        }
      }
      .content{
        padding: 1rem;
        display: flex;
        width: 100%;
        
        div{
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          width: 100%;

          p{
            margin: 12px;
          }


          .repo-url{
            display:flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            input{
              height: 2.75rem;
              width: 100%;
            }
            span{
              margin: 0 8px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              cursor: copy;
              img{
                width: 20px;
                opacity: 0.7;
              }
            }
          }
        }
      }
    }

      
    }
  }
`;