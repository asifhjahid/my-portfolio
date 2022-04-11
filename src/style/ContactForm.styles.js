import styled from 'styled-components';

const ContactFormStyle = styled.div`
            
            width: 100%;
            .formGroup{
            width: 100%;
            margin-bottom: 2rem;
            align-items: right;
            }
            label{
            color: #BCB4B4;
            font-size: 2rem;
            font-family: sans-serif;
            }
            input, textarea{
            width: 100%;
            font-size: 2rem;
            padding: 1.2rem;
            color: #000000;
            background-color: #F5F5F5;
            outline: none;
            border: none;
            border-radius: 8px;
            margin-top: 1rem;
            &:focus{
                border: 1px solid rgb(248, 85, 79);
                box-shadow: 5px 4px 6px rgb(250 99 99), 
                            0px -2px 7px rgb(250 99 99);
            }
            }
            textarea{
            min-height: 250px;
            resize: vertical;
        }
        button[type='submit']{
        background-color: seagreen;
        color: #ffffff;
        font-size: 2rem;
        font-family: sans-serif;
        display: inline-block;
        outline: none;
        border: 1px solid seagreen;
        border-radius: 9px;
        padding: 1rem 4rem;
        cursor: pointer;
        &:hover{
            background-color: inherit;
        }
        }
        
        
          

`
export default ContactFormStyle;