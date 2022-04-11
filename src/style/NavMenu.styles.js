import styled from 'styled-components';

const NavStyle = styled.div`
        position:fixed;
        z-index: 1;
        top:0;
        left:0;
        width:100%;
        padding: .8rem 0;
        background-color:#0A0A0A;

        h1{
            text-align: left;
            margin-left: 35px;
            position: relative;
            font-size:2.6rem;
            top: 27px;
            cursor: pointer;
            width: 200px;
            color: #ffffff;
        }
   
        
        ul{
            text-align:right;
            margin: auto;
            width: 100%;
            margin-right: 11px;
            
            li{ 
                position: relative;
                display: inline-block;
                border-radius:10px;
                top: -11px;
                transition: all .2s ease-in-out;
                &:hover{
                    transform: scale(1.1);
                    
                }
            }
            a{
                display: inline-block;
                font-family: 'RobotoMono Regular';
                padding: 1rem 2rem;
                font-size: 2.1rem;
                font-family: sans-serif;
                color: #ffffff;
                outline: none;
                transition: all .2s ease-in-out;
                &:hover{
                    transform: scale(1.2);
                    
                   }
            }
            .active{
                color: #1DA237;
            }
        }
        .NavMobileOpen{
            width: 100px;
            height: 50px;
            align-items: right;
            padding: 1rem 2rem;
            color: #ffffff;
            display: none;
            outline: none;
        }
        .NavMobileClose{
            display: none;
        }
        @media only screen and (max-width: 768px){
            
            h1{
                position: relative;
                top: 15px;
            }
            .NavMobileOpen{
                display: block;
                margin-top: 10px;
                cursor: pointer;
               
            }
            
            .NavList{
                padding: 2rem;
                width: 80%;
                max-width: 250px;
                background-color: #1E1E1E;
                border-radius: 14px;
                position: absolute;
                top: 55px;
        
                
                .NavMobileClose{
                display: block;
                width: 2.6rem;
                margin:0 0 0 auto;
                cursor: pointer;
                padding-bottom: 1rem;
    
                }
            li{
                display: block;
                text-align: left;
                
            }
            }
            .hideItem{
                display: none;
            }
        }

`

export default NavStyle;