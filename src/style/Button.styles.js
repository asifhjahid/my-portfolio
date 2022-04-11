import styled from 'styled-components';

 export const ButtonStyled =styled.div`
    margin-top: 2rem;
    .btn{
        font-size: 2.2rem;
        font-family: sans-serif;
        color: #ffffff;
        border: 2px solid crimson;
        padding: 1rem 2rem;
        border-radius: 8px;
        display: inline-block;
        background-color: inherit;
        transition: all .6s ease-in-out;
        :hover{
            border: 2px solid crimson;
            background-color: crimson;
            color:#000;
        }
    }
    @media only screen and (max-width:768px){
        .btn{
            font-size: 1.8rem;
        }
    }

`;

export const ProjectBtnStyle = styled.button`

outline: none;
    border: 1px solid crimson;
    background-color: crimson;
    padding: 1.5rem 3rem;
    font-size: 1.5rem;
    font-family: sans-serif;
    color: #ffffff;
    cursor: pointer;
    transition: all .2s ease-in-out;
    margin-bottom: .6rem;
    &:active ,&:focus{
        background-color: darkgreen;
        border: none;
    }
    &:hover{
        background-color: inherit;
    }
    &:not(:last-child){
        margin-right: .6rem;
    }

`;

export const ProjectsBtnStyle = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 70%;
    margin: 2.4rem auto;

`;

