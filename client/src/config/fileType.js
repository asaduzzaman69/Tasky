import { AiOutlineClockCircle, AiFillInfoCircle} from 'react-icons/ai';
import { GoAlert } from 'react-icons/go';
import { BsLink } from 'react-icons/bs';

export const fileType = [
    {
        id: 0,
        label: '12 DEC 2020',
        text: '980 fasley studio',
        icon: <AiOutlineClockCircle />,
        color: '81, 156, 156'
    },
    {
        id: 1,
        label: 'priority',
        text: 'high',
        icon: <GoAlert />,
        color: '255, 76, 62'

    },
    {
        id: 2,
        label: 'description',
        text: 'loem ipsum delight ',
        icon: <AiFillInfoCircle />,
        color: '201, 63, 141'
    },
    {
        id: 3,
        label: 'Attachments',
        text: 'Updated on 10:30PM ',
        icon: <BsLink />,
        color: '200, 195, 221'
    }
]