import styled from 'styled-components'


const Itemstyle= styled.div`
   display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.4rem;
    @media screen and (max-width:900px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width:768px){
        grid-template-columns: repeat(1, 1fr);
    }
    .itemlist{
        .content{
            position: relative;
            display: block;
            overflow: hidden;
            h2{
                margin-top: 1rem;
                color: #ffffff;
                font-family: sans-serif;
                font-size: 1.8rem;
            }
            p{
                color: #BCB4B4;
                text-align: left;
                font-size: 1.4rem;
                margin-top: 1rem;
                font-family: sans-serif;
            }
            img{
                width: 100%;
                height: 30vh;
                object-fit: cover;
            }
            ul{
                transform: translateY(-500px);
                transition: all .4s ease-in-out;
                position: absolute;
                left: 55%;
                top: 40%;
                li{
                        
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background-color: #000000;
                        padding: 1.2rem;
                        border-radius: 50%;
                        width: 5rem;
                        height: 5rem;
                        margin: 0 .5rem;
                        transition: all .4s ease-in-out;
                    
                        a{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transition: all .4s ease-in-out;
                        }
                    }
            }
            .projectImg{
                &::before{
                    content: "";
                    position: absolute;
                    left: 2%;
                    top: 3%;
                    transition: all .4s ease-in-out;
                }
            }
            .projectImg:hover{
                ul{
                    transform: translateY(0);
                    transform: translate(-50%, -50%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all .4s ease-in-out;
                    opacity: 1;
                    li{
                        transition: all .4s ease-in-out;
                        &:hover{
                            background-color:#1974D2;
                        }
                        a{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transition: all .4s ease-in-out;
                        }
                    }
                    li:hover{
                        svg{
                            color: #ffffff;
                        }
                    }
                    svg{
                        fill: #ffffff;
                        font-size: 3.2rem;
                        
                    }
                }
                &::before{
                    height: calc(95% - 32%) ;
                    width: calc(95% - 4%);
                    background-color: #f8f8ff;
                    opacity: 0.5;
                    transform-origin: left;
                    
                    transition: all .4s ease-in-out;
                }
            }
        }
    }
`;
export default Itemstyle;