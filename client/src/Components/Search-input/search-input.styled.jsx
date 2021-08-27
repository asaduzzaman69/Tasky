import styled from "styled-components";


export const SearchInputWrapper = styled.div`
width: min-content;
position: relative;
& > input {
    border: none;
    padding: 1rem 3.5rem;
    background: #f0eef8;
    border-radius: 6px;
    &::placeholder {
        color: ${({theme}) => theme.colorPrimaryDark};
    }
    &:focus {
        outline: none;
    }

}


& > svg {
    position: absolute;
    font-size: 2.0rem;
    color: #b8b3d2;
    top: 20%;
    left: 10px;
    }

`