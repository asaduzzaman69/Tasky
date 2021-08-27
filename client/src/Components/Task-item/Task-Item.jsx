import { AlignVertical } from "../../shared-styles/alignment";
import { SemiBoldText, ThinnerText } from "../../shared-styles/typography";
import { BottomContainer, ImageWrapper, TaskItemWrapper } from "./Task-Item.styled";
import { BsThreeDotsVertical } from 'react-icons/bs'
import { GroupIcons, GroupIcon } from "../Group-Icon/Group-icon";
import { IoMdCall } from "react-icons/io";
import { BiVideoRecording } from "react-icons/bi";
import { HiChatAlt2 } from "react-icons/hi";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

const TaskItem = ({ taskLabel, color }) => {
    const { colorPrimary} = useContext(ThemeContext);
    const themeColor = `rgb(${color})`;
    return (
        <TaskItemWrapper color={color}>
            <div>
                <AlignVertical style={{ justifyContent: 'space-between', fontSize: '1.7rem' }}>
                    <SemiBoldText theme={{ colorPrimary: color ?  themeColor: colorPrimary }}>
                        {taskLabel}
                    </SemiBoldText>
                    <BsThreeDotsVertical />
                </AlignVertical>


                <ThinnerText theme={{colorPrimaryDark:  color && themeColor}}>12:30 on time</ThinnerText>
            </div>

            <BottomContainer>
                <ImageWrapper>
                    <img width="40px" src="https://res.cloudinary.com/dltd4gs4a/image/upload/v1629555158/julian-wan-WNoLnJo7tS8-unsplash_cjywb9.jpg" alt="user-1" />
                    <img width="40px" src="https://res.cloudinary.com/dltd4gs4a/image/upload/v1629555158/julian-wan-WNoLnJo7tS8-unsplash_cjywb9.jpg" alt="user-2" />
                    <img width="40px" src="https://res.cloudinary.com/dltd4gs4a/image/upload/v1629555158/julian-wan-WNoLnJo7tS8-unsplash_cjywb9.jpg" alt="user-3" />
                </ImageWrapper>

                <GroupIcons theme={ color !== '' && { colorPrimaryThicker: `rgba(${color} , 10%)`, colorPrimaryDark: themeColor }} >
                    <GroupIcon  icon={<IoMdCall />} />
                    <GroupIcon  icon={<BiVideoRecording />} />
                    <GroupIcon  icon={<HiChatAlt2 />} />
                </GroupIcons>


            </BottomContainer>


        </TaskItemWrapper>
    );
}

export default TaskItem;