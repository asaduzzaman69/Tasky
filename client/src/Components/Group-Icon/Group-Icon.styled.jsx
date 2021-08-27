import styled from "styled-components";

export const IconContainer = styled.div`
display: flex;
align-items: center;
padding: 1rem;
border-radius: 10px;
background: ${({theme}) => theme.colorPrimaryThicker};
color:  ${({theme}) => theme.colorPrimaryDark};
font-size: 1.8rem;


& > svg{
    margin: 0px 8px;
}
`