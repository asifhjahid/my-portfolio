import styled from 'styled-components'

const AboutStyle = styled.div`

        padding-top: 11rem;
        margin-bottom: 11rem;
        
        .container{
            display: flex;
            align-items: center;
            
            text-align: left;
        }
        p{
            color: #BCB4B4;
            font-size: 1.8rem;
            margin-top: 1.8rem;
            margin-right: 2rem;
        }
        .leftSection{
            width: 50%;
            margin-bottom: 4rem;
            
        }
        h1{
            margin-top: -1.8rem;
        }
        .rightSection{
            width: 50%;
            margin-top: 2rem;
        }
        .title{
            text-align: left;
        }
        .btn{
            background-color: coral;
        }
        .aboutBtn{
            display: flex;
            gap: 2rem;
        }

        @media only screen and (max-width: 768px){
            .container{
                flex-direction: column;
                text-align: center;
            }
            .title{
                text-align: center;
            }
            p{
                margin: auto;
                margin-top: 1rem;
                font-size: 1.3rem;
               
            }
            h1{
                margin-top: 2rem;
            }
            .btn{
                font-size: 1.4rem;
            }
            .rightSection{
                margin-top: -.5rem;
            }
        }



`
export default AboutStyle;