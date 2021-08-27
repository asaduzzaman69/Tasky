import { SemiBoldText, ThinnerText } from "../../shared-styles/typography"
import { TransparentIconWrapper } from "../../shared-styles/utils";
import { DesignItemContainer } from "./design-develop-item.styled";

const DesignDevelopItem = ({icon, color, label, text}) => {
    return ( 
        <DesignItemContainer>
           <TransparentIconWrapper color={color}>
            {icon}
           </TransparentIconWrapper>
            <div style={{
                marginLeft: '15px'
            }}>
             <SemiBoldText style={{
                 fontSize: '1.4rem'
             }}>{label}</SemiBoldText>
             <ThinnerText>{text}</ThinnerText>
            </div>

        </DesignItemContainer>
     );
}
 
export default DesignDevelopItem;