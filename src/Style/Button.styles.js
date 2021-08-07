import styled from 'styled-components'

 export const ButtonStyled =styled.div`
    margin-top: 2rem;
    .btn{
        font-size: 2.2rem;
        color: black;
        border: 2px solid gray;
        padding: 1rem 2rem;
        border-radius: 8px;
        display: inline-block;
        background-color: white;
    }
    @media only screen and (max-width:768px){
        .button{
            font-size: 1.8rem;
        }
    }

`;

export const ProjectBtnStyle = styled.button`

outline: none;
    border: none;
    background-color: #29465B;
    padding: 1.5rem 3rem;
    font-size: 1.5rem;
    color: white;
    cursor: pointer;
    transition: all .4s ease-in-out;
    margin-bottom: .6rem;
    &:active ,&:focus{
        background-color: darkgreen;
    }
    &:hover{
        background-color: gray;
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

`

