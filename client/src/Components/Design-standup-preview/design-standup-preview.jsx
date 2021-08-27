import { fileType } from "../../config/fileType";
import { H2, SemiBoldText } from "../../shared-styles/typography"
import DesignDevelopItem from "../design-develop-item/design-develop-item";

const DesignStandUpPreview = () => {
    return ( 
        <div style={{
            marginTop: '4rem',
        }}>
            <H2 style={{
                            marginBottom: '2.5rem'

            }}>Design Standup</H2>
            {
                fileType.map(({id,...otherProps}) => <DesignDevelopItem  key={id} {...otherProps}/> )
            }
        </div>
     );
}
 
export default DesignStandUpPreview;