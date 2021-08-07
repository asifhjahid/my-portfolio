import styled from 'styled-components'

const ContactFormStyle = styled.div`
            
            width: 100%;
            .formGroup{
            width: 100%;
            margin-bottom: 2rem;
            align-items: right;
            }
            label{
            font-size: 2rem;
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
            }
            textarea{
            min-height: 250px;
            resize: vertical;
        }
        button[type='submit']{
        background-color: seagreen;
        color: seashell;
        font-size: 2rem;
        display: inline-block;
        outline: none;
        border: none;
        border-radius: 9px;
        padding: 1rem 4rem;
        cursor: pointer;
        }
        
        
          

`
export default ContactFormStyle;