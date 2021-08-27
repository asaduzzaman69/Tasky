import styled from "styled-components";

export const AttendeesContainer = styled.div`
    display: grid;
    grid-template-columns: min-content 1fr max-content;
    align-items: center;
    margin-top: 2rem;
    
`

export const IconContainer = styled.div`
display: flex;
align-items: center;
padding: 1rem;
border-radius: 10px;
background: ${({theme}) => '#F0EEF8'};
color:  ${({theme}) => theme.colorPrimaryDark};
font-size: 1.8rem;


& > svg{
    margin: 0px 8px;
}
`