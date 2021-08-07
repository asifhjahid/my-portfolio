import styled from 'styled-components'

const NavStyle = styled.div`
        position:fixed;
      
        top:0;
        left:0;
        width:100%;
        padding: .8rem 0;
        /* background: var(--dark-bg); */
       /* background-color:var(--deep-dark); */
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
            /* padding: 4px 2px 4px 12px;
            &:hover{
            background-color: #7CFC00; */
        }
        
        
        ul{
            /* max-width:1200px; */
            text-align:right;
            margin: auto;
            width: 100%;
            margin-right: 11px;
            
            li{ 
                position: relative;
                display: inline-block;
                border-radius:10px;
                top: -11px;
                &:hover{
                    background-color:#215E21;
                    
                }
            }
            a{
                display: inline-block;
                font-family: 'RobotoMono Regular';
                padding: 1rem 2rem;
                font-size: 2.1rem;
                color: #ffffff;
                outline: none;
                
            
                
                
            }
            .active{
                color: #1DA237;
            }
        }
        .NavMobileOpen{
            width: 100px;
            height: 50px;
            align-items: right;
            /* position: absolute; */
            right: 1rem;
            top:3rem;
            
            padding: 1rem 2rem;
            /* font-style: 2.7rem; */
            /* color: var(--gray-1); */
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
               
            }
            
            .NavList{
                padding: 2rem;
                width: 80%;
                max-width: 250px;
                
                background-color: blue;
                /* background-color:#0A0A0A; */
                /* background: var(--dark-bg); */
                border-radius: 14px;
                position: absolute;
                top: 55px;
                
               

                .NavMobileClose{
                display: block;
                width: 2.6rem;
                margin:0 0 0 auto;
                cursor: pointer;
                
                /* *{
                    pointer-events: none;
                } */
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