import styled from 'styled-components'

const ServicesStyle = styled.div`
        margin-top: 14rem;
        background-color: #1E1E1E;
        border-radius: 10px;
        
       
        padding: 3rem;
        .container{
            /* margin-top: 12rem; */
            
        }
        .ServiceContainer{
            margin-top: -10rem;
            padding: 0 3rem 3rem 3rem;
           
        }
        h1{
            margin-bottom: 6rem;
        }
        .LineOne{
            margin-top: 3.5rem;
            display: flex;
            /* justify-content: space-between; */
            gap: 14rem;
            /* margin-right: 4rem; */
            
            
        }
        
            
        @media only screen and (max-width:950px){
            .LineOne{
                gap: 6rem;
            }
            .LineTwo{
                gap: 6rem;
            }
        }
        @media only screen and (max-width: 768px){
            .LineOne{
                flex-direction: column;
                margin: 0 auto;
                gap: 2rem;
            }
            
            /* .items{
                text-align: center;
            } */
        }

`
export default ServicesStyle;