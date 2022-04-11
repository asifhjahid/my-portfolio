import styled from 'styled-components';

export const FooterStyle= styled.div`

        margin-top: 10rem;
        background-color: #1E1E1E;
        .container{
            display: flex;
            gap: 4rem;
        }
        .col_1,.col_2,.col_3,.col_4{
            flex: 1;
        }

        .title{
            margin: 1rem 0;
            color: #ffffff;
            font-family: sans-serif;
            font-size: 3rem;
            position: relative;
            &:after{
                content: '';
                position: absolute;
                background-color: #f70757;
                left: 0;
                bottom: -3px;
                height: 2px;
                width: 60px;
                box-sizing: border-box;
            }
        }
        p{
            color: #BCB4B4;
            font-size: 1.4rem;
            font-family: sans-serif;
            line-height: 2rem;
        }
        
        .followtitle{
            margin: 1.5rem 0 1.5rem .4rem;
            color: #ffffff;
            font-family: sans-serif;
            position: relative;
            &:after{
                content: '';
                position: absolute;
                background-color: #f70757;
                left: 0;
                bottom: -3px;
                height: 2px;
                width: 60px;
                box-sizing: border-box;
            }
        }

        
        // .items{
        //     display: flex;
        //     justify-content: flex-start;
        //     margin-left: -20px;
        // }
        // .fbItem{
        //     // color:#3b5998;
        //     background-color: #fff;
        //     border-radius: 50%;
            
        //     // padding: 1px 0px 1px 2px;
        //     // transition: all .3s ease-in-out;
        // }
        .facebook{
            
            svg{
                    fill: #4267B2;
                }
            
        }
        .twitter{
            
            // color:#1DA1F2;
                svg{
                // width:"100%";
                // height:"100%";
                // fill:"green"
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
            .title{
            position: relative;
            &:after{
            

                left: 36%;
                
            }
        }
        .followtitle{
            position: relative;
            &:after{
               
                left: 42.6%;
              
            }
        }

        }

`;
export const LastPart = styled.div`

            background-color: black;
            padding: 2rem;
            margin-top: 1rem;

            .para{
                color:#BCB4B4;
                font-size: 2rem;
                text-align:center;
                font-family:sans-serif;
                .copyright{
                    color: #BCB4B4;
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