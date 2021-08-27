import styled from "styled-components";

export const NumberPlate = styled.span`
    background-color: white;
    border-radius: 6px;
    font-size: 1.6rem;
    box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
    width: 35px;
    height: 35px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
`


export const TransparentIconWrapper = styled.div`
    background:  ${(props) => `rgb(${props.color} , 20%)`}; 
    color: ${(props) => `rgb(${props.color})` };
    font-size: 2rem;
    padding: 10px 10px;
    border-radius: 1rem;
    display: flex;
    align-items: center;
`