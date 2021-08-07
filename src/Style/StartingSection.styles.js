import styled from 'styled-components'

const SectionStyled = styled.div`
        margin-top: 15rem;
       

        .container{
            display: flex;;
        }
        
        .SectionImg{
            width: 30%;
            height: 400px;
            margin-left: 4rem;
            
            
        }
        .rightSection{
            background-color:#1A374A ;
            width: 60%;
            height: 250px;
            margin: 3rem 5rem ;
            padding: 3rem 0 0 4rem;
            border-radius: 10px;

        }
        .Info{
            color: white;
            font-size: 2rem;
            margin-bottom: 15px;
        }
        
        .btn{
            margin-top: 22px;
            
        }
        h1{
            margin-bottom: .4rem;
        }
        .span_1{
            color:#008000;
            font-size: 2.4rem;
            
        }
        .span_2{
            color:#FFFF00 ;
            margin-left: .2rem;
        }
        @media only screen and (max-width: 860px){
            .rightSection{
                width: 50%;
                height: 300px;
            }
            
        }
        @media only screen and (max-width: 768px){
            .container{
                flex-direction: column;
                text-align: center;
                
            }
            .rightSection{
                width: 80%;
                margin: 5px 5px 0 55px;
               
                
               
            }
            .SectionImg{
                img{
                    
                    margin-left: 10rem;
                    width: max-content;
                    
                }
            }
            
            
            .btn{
                margin-right: 2rem;
            }
            .span_1{
                font-size: 2rem;
                margin-bottom: .4rem;
            }
            .span_2{
                font-size: 1.8rem;
            }
            .span_1,.span_2{
                display: block;
            }
            .btn{
               margin-top: -.2rem;
            }
        }

`
export default SectionStyled;