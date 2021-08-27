import styled from "styled-components";


export const TaskItemWrapper = styled.div`
padding: 3rem 2.5rem;
background: ${({color}) => color && `rgba(${color}, 10%)`  };
border-radius: 7px;
box-shadow: ${({color}) => !color &&  'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;'} 
`

export const ImageWrapper = styled.div`
& > img {
    border-radius: 4rem;
    margin-right: -5px;

}
`


export const BottomContainer = styled.div`
    margin-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`