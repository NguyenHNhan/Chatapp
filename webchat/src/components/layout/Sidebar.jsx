import MessageBlock from "./MessageBlock"

import { FaSearch, FaBars} from "react-icons/fa";


const Sidebar = () => {
    return (
        <div className="sidebar-left">
            <div className="search">
                <div ><FaBars size={20}/></div>
                <div >
                <FaSearch size={20}/>Search
                </div>
            </div>
            <div className="chatlist">
                <MessageBlock/>
            </div>
        </div>
    );
}

export default Sidebar;