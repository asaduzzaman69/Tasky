import { task } from "../../config/task";
import { H2 } from "../../shared-styles/typography"
import TaskItem from "../Task-item/Task-Item";
import { TaskOverviewGrid, TaskPreviewContainer } from "./Task-preview.styled";

const TaskPreview = () => {
    return ( 
        <TaskPreviewContainer>
            <H2>Today's Task</H2>

            <TaskOverviewGrid >
                {
                    task.map((el, idx) =>   <TaskItem key={`task-overview-${idx}`} {...el} /> )
                }

            </TaskOverviewGrid>

        </TaskPreviewContainer>
     );
}
 
export default TaskPreview;