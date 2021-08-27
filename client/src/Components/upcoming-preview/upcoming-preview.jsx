import { task } from "../../config/task";
import { H2 } from "../../shared-styles/typography";
import TaskItem from "../Task-item/Task-Item";
import { TaskOverviewGrid } from "../Task-preview/Task-preview.styled";

const UpcommingPreview = () => {
    return ( 
        <div>
            <H2>Upcoming</H2>

            <TaskOverviewGrid>
                {
                   task.splice(0,2).map((el, idx) =>   <TaskItem key={`task-overview-${idx}`} {...el} /> )
                }

            </TaskOverviewGrid>
            
        </div>
     );
}
 
export default UpcommingPreview;