import { H6 } from "../../shared-styles/typography";
import AttendeesPreview from "../Attendees/attendees-preview";
import DesignStandUpPreview from "../Design-standup-preview/design-standup-preview";
import { TaskOverviewContainer } from "./task-overview.styled";

const TaskOverview = () => {
    return (
        <TaskOverviewContainer>
            <H6>
                Task overview
            </H6>

            <AttendeesPreview />
            <DesignStandUpPreview />

            
               

        </TaskOverviewContainer>
    );
}

export default TaskOverview;