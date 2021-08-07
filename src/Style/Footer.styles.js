import styled from 'styled-components'

export const FooterStyle= styled.div`

        margin-top: 10rem;
        /* background-color: whitesmoke; */
        background-color: #1E1E1E;
        .container{
            display: flex;
            gap: 4rem;
        }
        .col_1,.col_2,.col_3,.col_4{
            flex: 1;
        }
        /* .col_2,.col_3,.col_4{
            margin-left: 2rem;
        } */
        .title{
            margin: 1rem 0;
            color: white;
            font-size: 3rem;
        }
        p{
            color: white;
            font-size: 1.4rem;
        }
        
        .titleMe{
            margin: 1.5rem 0 1.5rem .4rem;
            color: white;
        }
        .facebook{
            svg{
                    fill: #4267B2;
                }
            
        }
        .twitter{
            svg{
                fill: #1DA1F2;
            }
        }
        .linkedIn{
            svg{
                fill:#0e76a8;
            }
            
        }
        .github{
            svg{
                fill: white;
            }
        }
        
        a{
            
            
            svg{
                
                width: 4rem;
                height: 4rem;
                margin-right: 1rem;
               
                
              
               
            }
        }
        @media only screen and (max-width:768px){
            .container{
                flex-direction: column;
                text-align: center;
                gap: 0;
                & >div{
                    margin-top: 4rem;
                }
            }
        }

`;
export const LastPart = styled.div`

            background-color: black;
            padding: 2rem;
            margin-top: 1rem;

            .para{
                color: white;
                font-size: 2rem;
                text-align:center;
                .copyright{
                    color: white;
                    font-size: 2.4rem;
                }
            }
            @media only screen and (max-width:768px){
                .para{
                    font-size: 1.4rem;
                    .copyright{
                        font-size: 2rem;
                    }
                }
            }
            

`