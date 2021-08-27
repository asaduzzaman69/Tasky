import styled from "styled-components";

export const DashboardPage = styled.div`
display: grid;
grid-template-columns: 1fr 420px;
`


export const DashboardContent = styled.div`
    position: relative;
    padding: 3rem 4.5rem;

    &::after {
        content: '';
    position: absolute;
    height: 100%;
    width: 150px;
    background: url(https://res.cloudinary.com/dltd4gs4a/image/upload/v1629568715/paper-plane-svgrepo-com_o5q9gp.svg);
    background-repeat: no-repeat;
    right: 30px;
    transform: rotateY(
180deg
);
    top: -50px;
    }
`