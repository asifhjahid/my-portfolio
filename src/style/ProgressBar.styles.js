import styled from "styled-components";

const ProgressBarStyle = styled.div`

        h4{
            font-size: 1.2rem;
        }

        .progressBar{
            display: flex;
            align-items: center;
            p{
                padding-right: 1rem;
                font-size: 1.2rem;
            }
            .progress{
                position: relative;
                width: 100%;
                height: 1rem;
                background-color: #007bff;
                span{
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    height: 100%;
                    background-color:  crimson;
                }
            }
        }

`

export default ProgressBarStyle;