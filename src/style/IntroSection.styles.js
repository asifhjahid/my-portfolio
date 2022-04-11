import styled from 'styled-components';

const SectionStyled = styled.div`
        margin-top: 12rem;
       

        .introSection{
            display: flex;;
        }
        .leftSection{
            flex: 50%;
            overflow:hidden;
       
        .SectionImg{
            width: 80%;
            height: 100%; 
            
            img{
                height: 100%;
                
            }
            
        }
    }
        .rightSection{
            flex: 50%;
            margin-top:6rem;
            .info{
            margin: 5rem 6rem ;
            border-radius: 10px;
            display: flex;
            flex-direction:column;
            justify-content:center;

            }
        }
        
       
        h1{
            font-size:4rem;
            font-family: sans-serif;
        }
        h2{
            font-size:2rem;
            font-family: sans-serif;
        }
        h3{
            font-size:3rem;
            font-family: sans-serif;
            span{
                font-size:3rem;
                color:crimson;
                font-family: sans-serif;
            }

        }
        
        @media only screen and (max-width: 768px){
            .introSection{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                
            }
            .leftSection{
            flex: 100%;
            overflow:hidden;
       
            .SectionImg{
            width: 100%;
            height: 100%; 
            
            img{
                height: 100%;
                
             }
            
            }
         }
         .rightSection{
            flex: 50%;
            margin-top:1rem;
            .info{
            margin: 2rem 2rem ;
            border-radius: 10px;
            display: flex;
            flex-direction:column;
            justify-content:center;

            }
        }
        
       
        h1{
            font-size:2.6rem;
            
        }
        h2{
            font-size:1.4rem;
            
        }
        h3{
            font-size:1.8rem;
            
            span{
                font-size:1.8rem;
              
            }

        }
           
            
            /* .btn{
                margin-right: 2rem;
            } */
           
           
        }

`
export default SectionStyled;