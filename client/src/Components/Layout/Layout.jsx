import Sidenav from "../sidenav/Sidenav";
import { LayoutContainer } from "./Layout.styled";

const Layout = ({children}) => {

    let gridTemplateColumns = '';

    gridTemplateColumns = '180px 1fr'
    return ( 
        <LayoutContainer style={{
            display: 'grid',
            gridTemplateColumns
        }}>
            <Sidenav />
            {children}
        </LayoutContainer>
     );
}
 
export default Layout;