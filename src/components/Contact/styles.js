import styled from "styled-components";
import Modal from "styled-react-modal";

export const Container = styled.div`
  transition: 0.2s;
  width: 100vw;
  height: 96.55vh;
  background: #333;
  position: absolute;
  display: flex;
  background-color: rgba(51, 51, 51, 0.8);
  justify-content: center;

  .wrapper{
    width: 80%;
    height:87%;
    border-radius: 0.25rem;
    position: absolute;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .form-space{
      position: relative;
      box-shadow: 2px 2px 4px #000;
      background-color: rgba(102, 0, 51, 0.8);
      width: 80%;
      height: 85%;
      border-radius: 0.5rem;
      display: flex;

      .left{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40%;
        flex-direction: column;
        border-radius: 0.5rem 0 0 0.5rem;
        
        background-image: linear-gradient(
        -45deg, 
        rgba(59,173,227,1) 0%, 
        rgba(87,111,230,1) 25%, 
        rgba(152,68,183,1) 51%, 
        rgba(255,53,127,1) 100%
  );



        h1{
          margin: 2rem 0;
          width: 16rem;
          font-size: 2.5rem;
          font-family: 'Ubuntu';
          color: #212121;
        }
        h2{
          width: 16rem;
          font-family: 'Ubuntu';
          color: #212121;
        }
      }

      .right{
        width: 60%;
        height: 100%;
        background: rgba(0,0,0, 0.8);
        border-radius: 0 0.5rem 0.5rem 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        h1{
          color: #fff;
        }

        form{
          display: flex;
          width: 50%;
          flex-direction: column;

          label{
            color: #cacaca;
            font-family: 'Cairo', Arial, Helvetica, sans-serif;
            font-weight: 700;
            margin-left: 0.25rem;
            margin-top: 1rem;
            display: flex;
            justify-content: space-between;

            small{
              margin-right: 1rem;
            }
          }

          input{
            height: 2.73rem;
            border-radius: 0.25rem;
            padding: 0.5rem;
            border:0;
            outline: none;
            transition: 0.2s;
            color: #000;
            font-size: 1rem;

            &:focus{
              background: #cacaca;
            }

            .error{
              border: solid 1px red;
            }
          }
          div{
            margin-top: 2rem;
            select{
              height: 2.75rem;
              border-radius: 0.25rem;
            }
          }

          textarea{
            height: 8rem;
            border-radius: 0.25rem;
            padding: 0.5rem;
            border:0;
            outline: none;
            transition: 0.2s;
            color: #000;
            font-size: 1rem;
            margin-bottom: 2rem;

            &:focus{
              background: #cacaca;
            }
          }
          button{
            height: 2.75rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 1.5rem;
            background: transparent;
            border:solid 2px #3ca8e3;
            border-radius: 0.25rem;
            color: #3ca8e3;
            cursor: pointer;
            transition: 0.2s;
            &:hover{
              color: #212121;
              background: #3ca8e3;
            }
            div{
              margin: 0;
            }
            .modal{
              width: 6rem;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
        }
      }
    }
  }


  @media (max-width: 1030px){
    height: 96.5vh;
    padding: 0;
    margin:0;
    width: 100vw;
    .wrapper{
      .form-space{
      flex-direction: column;
      width: 80%;
      background: transparent;
      box-shadow: none;
      

      .left{
        display: none;
        h1{
          display: none;
        }
        h2{
          display: none;
        }
      }
      .right{
        width: 100%;
        height: 100%;
        border-radius: 0%;
        background: transparent;
        display: flex;
        flex-direction: column;
        position:relative;

        h1{
          opacity:1;
          display: inline;
        }
        
        form{
          width:100%;
          align-items:center;
          justify-content: center;
          margin: -2.5rem;
          label{
            text-align: left;
            width: 90%;
          }
  
          input{
            width: 90%;
          }
          textarea{
            width: 90%;
          }
          button{
            width: 90%;
            margin-top: 2rem;
          }
        }
      }

    }
  }
  }

  @media (max-width: 720px){
    height: 100vh;
    .wrapper{
      width:100%;
      
      

      .form-space{
      flex-direction: column;
      width: 100%;
      background: transparent;
      box-shadow: none;
      margin:0;
      

      .left{
        display: none;
        h1{
          display: none;
        }
        h2{
          display: none;
        }
      }
      .right{
        width: 100%;
        height: 100%;
        border-radius: 0%;
        background: transparent;
        display: flex;
        flex-direction: column;
        margin: 0;

        h1{
          opacity:1;
          display: inline;
          margin: -2rem;
        }
        
        form{
          width:100%;
          height: 100vh;;

          align-items:center;
          justify-content: center;
          label{
            text-align: left;
            width: 90%;
          }
  
          input{
            width: 90%;
          }
          textarea{
            width: 90%;
          }
          button{
            width: 90%;
            margin-top: 2rem;
            display: flex;
          }
        }
      }

    }
  }
}
`;

export const StyledModal = Modal.styled`
  align-items: center;
  justify-content: center;
  position: absolute;
  border:solid 1px #000;
  
`;