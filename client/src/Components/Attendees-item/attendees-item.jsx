import { AttendeesTextWrapper, SemiBoldText, ThinnerText } from "../../shared-styles/typography";
import { IoMdCall } from "react-icons/io";
import { BiVideoRecording } from "react-icons/bi";
import { HiChatAlt2 } from "react-icons/hi";
import { AttendeesContainer, IconContainer } from "./attendees.styled";


const AttendeesItem = ({ name, role }) => {
    return (
        <AttendeesContainer>
            <img
                style={{
                    borderRadius: '4rem'
                }}
                width="40px"
                src="https://res.cloudinary.com/dltd4gs4a/image/upload/v1629555158/julian-wan-WNoLnJo7tS8-unsplash_cjywb9.jpg"
                alt="attendees-user"
            />
            <AttendeesTextWrapper>
                <SemiBoldText style={{ fontSize: '1.4rem' }}>
                    {name}
                </SemiBoldText>
                <ThinnerText>{role}</ThinnerText>
            </AttendeesTextWrapper>
            <IconContainer>
                <IoMdCall />
                <BiVideoRecording />
                <HiChatAlt2 />
            </IconContainer>
        </AttendeesContainer>
    );
}

export default AttendeesItem;