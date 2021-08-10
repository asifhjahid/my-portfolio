import styled from 'styled-components'

export const ContactStyle = styled.div`

        padding: 1rem 0;
        
        .contactSectionWrap{
            display: flex;
            margin-top: 5rem;
            justify-content: space-between;
            gap: 40rem;
            position: relative;
        }
        .left{
            width: 100%;
        }
        .right{
            border-radius: 12px;
            width: 100%;
            margin-top: -2rem;
        }
        
         @media only screen and (max-width:768px){
            
            .contactSectionWrap{
                display: flex;
                flex-direction: column;
                gap: 8rem;
            }
            
            .letf,.right{
                width: 100%;
            }
            .right{
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
            background-color: #000000;
            padding: 1.3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            }
            .icon{
                svg{
                    fill: #ffffff;
                    font-size: 1.8rem;
                    
                }
        }
        .para{
            color:#000000;
            font-size: 1.6rem;
            font-family: sans-serif;
        }
`