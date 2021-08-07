import styled from 'styled-components'

export const ContactStyle = styled.div`

        padding: 1rem 0;
        
        .contactSectionWrap{
            display: flex;
            margin-top: 5rem;
            justify-content: space-between;
        }
        .left{
            margin-left: 8rem;
        }
        .right{
            border-radius: 12px;
            margin-left: 46rem;
            margin-top: -3rem;
        }
        
         @media only screen and (max-width:768px){
            
            .contactSectionWrap{
                display: flex;
                flex-direction: column;
            }
            
            .letf,.right{
                width: 100%;
            }
            .right{
                
                margin-left: -.01rem;
                padding: 2rem 0 2rem 2rem;
            }
        }

`

export const ContactItemStyle = styled.div`

            padding: 1.4rem 4rem;
            background-color: #F5F5F5;
            display: flex;
            align-items: center;
            gap: 2rem;
            border-radius: 8px;
            margin-bottom: 2rem;

            .icon{
            color: #3B2F2F;
            background-color: black;
            padding: 1.3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            }
            .icon{
                svg{
                    fill: white;
                    font-size: 1.3rem;
                    
                }
        }
        .para{
            color:#000000;
            font-size: 1.6rem;
        }
`