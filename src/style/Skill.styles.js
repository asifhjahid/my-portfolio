import styled from "styled-components";


const SkillStyled = styled.div`

                .skills{
                    display:grid;
                    grid-template-columns: repeat(2,1fr);
                    grid-row-gap:2rem ;
                    grid-column-gap:2rem ;

                    @media only screen and (max-width:768px){
                    grid-template-columns: repeat(1,1fr);
                    }
                }
                


`

export default SkillStyled;