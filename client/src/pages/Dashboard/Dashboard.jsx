import Layout from "../../Components/Layout/Layout";
import SearchInput from "../../Components/Search-input/search-input";
import TaskOverview from "../../Components/Task-overview/Task-overview";
import TaskPreview from "../../Components/Task-preview/Task-preview";
import UpcommingPreview from "../../Components/upcoming-preview/upcoming-preview";
import { AlignVertical } from "../../shared-styles/alignment";
import { NumberPlate } from "../../shared-styles/utils";
import { DashboardContent, DashboardPage } from "./Dashboard.styled";

const Dashboard = () => {
    return (
        <Layout>
            <DashboardPage>
                <DashboardContent>
                    <AlignVertical>
                        <SearchInput />
                        <NumberPlate style={{
                            marginLeft: '1rem'
                        }}> 5</NumberPlate>
                    </AlignVertical>
                    <TaskPreview />
                    <UpcommingPreview />
                </DashboardContent>
                <TaskOverview />
            </DashboardPage>
        </Layout>

    );
}

export default Dashboard;