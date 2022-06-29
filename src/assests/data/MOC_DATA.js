import { MdOutlineDashboard } from 'react-icons/md'
import { GoBook } from 'react-icons/go'
import { HiUserGroup } from 'react-icons/hi'
import { IoMdSchool } from 'react-icons/io'
import { CgNotes } from 'react-icons/cg'
import { BiChalkboard } from 'react-icons/bi'
import { IoIosRadio } from 'react-icons/io'
import { TbBellRinging2 } from 'react-icons/tb'
import { FaRegUser } from 'react-icons/fa'

export const side_bar = [
    {
        id:1,
        title:"Dashboard",
        icon:<MdOutlineDashboard/>,
        link:"/home"
    },
    {
        id:2,
        title:"Courses",
        icon:<GoBook/>,
        link:"/courses"
    },
    {
        id:3,
        title:"Students",
        icon:<HiUserGroup/>,
        link:"/students"
    },
    {
        id:4,
        title:"Exams",
        icon:<IoMdSchool/>,
        link:"/exams"
    },
    {
        id:5,
        title:"Results",
        icon:<CgNotes/>,
        link:"/results"
    },
    {
        id:6,
        title:"Notice Board",
        icon:<BiChalkboard/>,
        link:"/notice-board"
    },
    {
        id:7,
        title:"Live Classes",
        icon:<IoIosRadio/>,
        link:"/live-classes"
    },
    {
        id:8,
        title:"Notifications",
        icon:<TbBellRinging2/>,
        link:"/notifications"
    }
]