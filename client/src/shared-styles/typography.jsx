import styled from "styled-components";

export const H1 = styled.h1`

`
export const H2 = styled.h2`
font-size: 2.4rem;
color: ${({theme}) => theme.colorPrimary};

`

export const H6 = styled.h6`
font-size: 1.9rem;
color: ${({theme}) => theme.colorPrimary};

`


export const SemiBoldText = styled.span`
font-size: 1.6rem;
font-weight: 600;
color: ${({theme}) => theme.colorPrimary};
text-transform: uppercase;
display: block;
`

export const ThinnerText = styled.span`
font-size: 1.3rem;
font-weight: 400;
color: ${({theme}) => theme.colorPrimaryDark};
text-transform: capitalize;
`
export const AttendeesTextWrapper = styled.div`
margin-left: 1.3rem;
display: flex;
flex-direction: column;
`