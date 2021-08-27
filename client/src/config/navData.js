import { MdDashboard } from "react-icons/md";
import { AiFillCalculator } from "react-icons/ai";
import { ImDatabase } from "react-icons/im";
import { GrSecure } from "react-icons/gr";
import { IoSettingsSharp } from "react-icons/io5";


export const navData = [

    {
        id: 0,
        label: 'dashboard',
        icon: <MdDashboard />,
        isActive: true
    },
    {
        id: 1,
        label: 'Calculator',
        icon: <AiFillCalculator />
    },
    {
        id: 2,
        label: 'database',
        icon: <ImDatabase />
    },
    {
        id: 3,
        label: 'Sequrity',
        icon: <GrSecure />
    },
    {
        id:4,
        label: 'settings',
        icon: <IoSettingsSharp />
    }
]