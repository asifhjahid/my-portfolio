import styled from 'styled-components';

const FooterItemstyle = styled.div`

        .titleName{
            margin: 1.5rem 0;
            font-size: 2rem;
            color:#ffffff;
            font-family: sans-serif;
            position: relative;
        
          &:after{
            content: '';
            position: absolute;
            background-color: #f70757;
            left: 0;
            bottom: -3px;
            height: 2px;
            width: 60px;
            box-sizing: border-box;
           
           
            }
        }
        @media only screen and (max-width:768px){
            .titleName{
            position: relative;
        
          &:after{
           
            left: 41%;
          
           
            }
        }
    }
        li{
            margin-bottom: 1rem;
        }
        a{
            font-size: 1.8rem;
            color: #BCB4B4;
            font-family: sans-serif;
        }

`
export default FooterItemstyle;