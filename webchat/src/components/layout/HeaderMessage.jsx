import { FaSearch, FaEllipsisV } from "react-icons/fa";
const HeaderMessage = () => {
    return (
        <div className="headermessage">
            <div className="headermessage-left">
                <div className="avt"></div>
            </div>
            <div className="headermessage-right">
                <div className="headermessage-infor">
                    <div>
                        <div className="infor-name">Telegram</div>
                        <div className="subtitle">Ten user</div>
                    </div>
                    <div className="infor-icon">
                        <div>
                            <FaSearch size={20} />
                        </div>
                        <div>
                            <FaEllipsisV size={20} />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default HeaderMessage;