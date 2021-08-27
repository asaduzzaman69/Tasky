import styled from "styled-components";

export const LayoutContainer = styled.div`
width: 100%;
max-width: 1400px;
height: 91vh;
border-radius: 25px;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
background-color: ${({theme}) => theme.bgWhite};


`