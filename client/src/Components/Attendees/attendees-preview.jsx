import { fakeAttendees } from "../../config/fakeAttendees";
import { AlignVertical } from "../../shared-styles/alignment";
import { H2, H6 } from "../../shared-styles/typography";
import { NumberPlate } from "../../shared-styles/utils";
import AttendeesItem from "../Attendees-item/attendees-item";

const AttendeesPreview = () => {
    return (
        <div style={{
            marginTop: '4rem'
        }}>
            <AlignVertical style={{
                    marginBottom: '3rem',
                    justifyContent: 'flex-start'

            }}>
                <H2 style={{
                    marginRight: '2.5rem'
                }}>
                    Attendes
                </H2>
                <NumberPlate>
                    3
                </NumberPlate>
            </AlignVertical>
            {
                fakeAttendees.map(({id,...otherProps}) =>            
                     <AttendeesItem
                     key={id}
                   {...otherProps}
                   />)
            }



        </div>
    );
}

export default AttendeesPreview;