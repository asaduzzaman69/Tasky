import { IconContainer } from "./Group-Icon.styled";


export const GroupIcons = ({children,theme}) => {
    return ( 
        <IconContainer theme={theme}>
            {children}
        </IconContainer>

     );
}

export const GroupIcon = ({icon}) => {
    return (
        <>
            {icon}
        </>
    )
}
 
