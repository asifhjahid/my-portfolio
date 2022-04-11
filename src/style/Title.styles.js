import styled from 'styled-components';

const TitleStyle = styled.div`

        text-align: center;
        h1{
            font-size: 4rem;
            color: white;
            text-transform: uppercase;
            font-family: sans-serif;
            margin-top: 12rem;
            position: relative;
            &::before{
            content: "";
            position: absolute;
            bottom: -3px;
            width: 10rem;
            height: .33rem;
            background-color: crimson;
            border-radius: 15px;
            /* left: 50%; */
        } 
        
        }
        @media only screen and (max-width: 768px){
                h2{
                    font-size: 3rem;
                }
        }
`

export default TitleStyle;