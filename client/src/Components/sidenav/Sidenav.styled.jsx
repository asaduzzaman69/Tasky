import styled, { css } from "styled-components";

const isActiveCss = css`
color: #3D3270;
box-shadow: rgb(0 0 0 / 11%) 0px 14px 20px 0px;
background: white;
padding:  1.5rem;
border-radius: 12px;

`


export const SidenavContainer = styled.nav`
border-right: ${({theme}) =>`2px solid ${theme.colorPrimaryLight}`};
padding: 2.5rem 4.5rem;
`

export const ListContainer = styled.ul`
margin-top: 5rem;
`

export const Navlist = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 3rem;;
    margin-bottom: 5rem;
    color: ${({theme,isActive}) => isActive ? theme.colorPrimary  : '#B8B3D2'};
    ${({isActive}) => isActive && isActiveCss};

    & > a {
    font-size: 12px;
    text-transform: capitalize;
    font-weight: 500;
    margin-top: 10px;
    color: currentColor;

    }
`

export const UserImage = styled.img`
border: 7px solid #F6F5FB;
width: 60px;
border-radius: 12px;
`
