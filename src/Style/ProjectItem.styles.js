import styled from 'styled-components'


const Itemstyle= styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    @media screen and (max-width:920px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width:670px){
        grid-template-columns: repeat(1, 1fr);
    }
    .container{
    .itemlist{
        
        .content{
            display: inline-block;
            /* position:absolute; */
            overflow:auto;
            z-index: 1;
            h2{
                font-size: 1.5rem;
                color: #ffffff;
                margin-top: 1rem;
                text-align: center;
            }
            p{
                color: #BCB4B4;
                text-align: center;
                font-size: 1.3rem;
                margin-top: 1rem;
            }
            img{
                width: 100%;
                height: 40vh;
                object-fit: cover;
            }
            ul{
                transform: translateY(-600px);
                transition: all .4s ease-in-out;
                position: absolute;
                z-index: 2;
                left: 50%;
                top: 40%;
                opacity: 0;
                li{
                        background-color: var(--border-color);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 1rem;
                        border-radius: 50%;
                        width: 3rem;
                        height: 3rem;
                        margin: 0 .5rem;
                        transition: all .4s ease-in-out;
                        &:hover{
                            background-color: var(--primary-color);
                        }
                        a{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transition: all .4s ease-in-out;
                        }
                    
                    }
                }
            }
        }
    }
`
export default Itemstyle;