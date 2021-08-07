import styled from 'styled-components'

const ReviewStyle = styled.div`

        padding-top:1rem ;
        text-align: center;
        .arrow{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 1.8rem;
            svg{
                width: 35px;
                pointer-events: none;
            }
            .prevSlide,.nextSlide{
            background-color: #1E1E1E;
            width: fit-content;
            border-radius: 6px;
            padding: .7rem 2.1rem;
            cursor: pointer;
            margin: 0 .8rem;
            }
        }
        .wrap{
            /* position: relative; */
            margin: 0 auto;
            max-width: 600px;
           
        }
         .reviewInfo{
            background-color: #1E1E1E;
            border-radius: 10px;
            width: 100%;
            margin-top: 4rem;
            padding-top: 3.4rem;
            height: 30vh;

        } 
       .para{   
                font-size:1.4rem ;
                padding: 0 1.6rem;
                text-align: center;
                color: #BCB4B4;
                margin-bottom: 2rem;
        }
        .reviewName{
             font-size: 1.8rem;
             color: #BCB4B4;
             font-family: sans-serif;
        }
        .reviewTitle{
            margin-top: 1rem;
            color: #BCB4B4;
        }
        .fade-enter{
            z-index: 1;
            opacity: 0;
            transform: scale(.90);
        }
        .fade-enter-active{
            transform: scale(1);
            opacity: 1;
            transition: 250ms ease-in;
            transition-property: transform,opacity;
            z-index: 1;
        }
        .fade-exit{
            opacity: 1;
            transform: scale(1);
        }
        .fade-exit-active{
            opacity: 0;
            transform: scale(.90);
            transition: 190ms ease-in;
            transition-property: transform,opacity;
        }
        


`
export default ReviewStyle;