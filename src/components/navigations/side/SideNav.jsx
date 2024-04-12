
import Links from '../../links/Links'
import { AiFillHome, AiFillSetting, AiOutlineLogin, AiOutlineUser } from "react-icons/ai"
import { MdAdminPanelSettings } from "react-icons/md";
import style from "./SideNav.module.css"

const SideNav = () => {
    const paths = [
        {
            path: "/",
            label: "Home",
            icon: <AiFillHome />
        },
        {
            path: "/users",
            label: "Users",
            icon: <AiOutlineUser />
        },
        {
            path: "/settings",
            label: "Settings",
            icon: <AiFillSetting />
        },
        {
            path: "/login",
            label: "Login",
            icon: <AiOutlineLogin />
        },
        {
            path: "/admin",
            label: "Admin",
            icon: <MdAdminPanelSettings />
        }
    ]
    return (
        <div className={`${style["layout"]}`}>
            <div className={`${style["layout__links"]}`}>

                {
                    paths.map((path, index) => {
                        return <Links key={index} to={path.path} label={path.label} icon={path.icon} />
                    })
                }
            </div>

        </div>

    )
}

export default SideNav