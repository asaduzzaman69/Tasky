import { Link } from "react-router-dom"
import { navData } from "../../config/navData";
import { ListContainer, Navlist, SidenavContainer, UserImage } from "./Sidenav.styled";

const Sidenav = () => {
    return ( 
        <SidenavContainer>
            <div>
                <img
                width="65px"
                 src="https://res.cloudinary.com/dltd4gs4a/image/upload/v1629546953/Screenshot_171_bdx4sg.png"
                  alt="brand-logo" 
                  />
            </div>

            <ListContainer>

                {
                    navData.map(({label,icon,isActive}) => 
                        <Navlist isActive={isActive}>
                        {icon}
                        <Link>
                            {label}
                        </Link>
                    </Navlist>
                )
                }

                <UserImage
                 src="https://res.cloudinary.com/dltd4gs4a/image/upload/v1629555158/julian-wan-WNoLnJo7tS8-unsplash_cjywb9.jpg"
                 width="50px"
                alt="user-image" 
                  />

            </ListContainer>
        </SidenavContainer>
     );
}
 
export default Sidenav;