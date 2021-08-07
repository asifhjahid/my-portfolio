import styled from 'styled-components'

export const AboutStyle = styled.div`

        padding: 1rem 0  8rem 0;
        
        .topSide{
            display: flex;
            gap: 3rem;
            justify-content: center;
            
        }
        h1{
            margin-bottom: 6rem;
        }
        .leftSide{
            flex: 3;
        }
        
        .rightSide{
            flex: 2;
            width: 100%;
            img{
                width: 100%;
                height: 70vh;
            }
        }
        .subTitle{
            margin-bottom: 1.8rem;
            font-size: 2rem;
            span{
                padding: .8rem;
                background-color:  #1E1E1E;
                border-radius: 10px;
            }
        }
        .aboutTitle{
            margin-bottom: 2.8rem;
            font-size: 3.2rem;
        }
        
        .aboutItems{
            margin-top: 10rem;
        }
        .para{
            font-size: 1.3rem;
            color: white;
            margin-bottom: 5rem;
        }
        @media only screen and (max-width:768px){
            padding: 10rem 0;
            .topSide{
                flex-direction:column;
                gap: 4rem;
            }
            .subTitle{
                font-size: 1.4rem;
            }
            .aboutTitle{
                font-size: 2.4rem;
            }
        }

`