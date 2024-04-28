import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
const MessageBlock = () => {
    const [selectedId, setSelectedId] = useState(null)
    const handleClick = (id) => {
        setSelectedId(id)
    }
    const [list_cvs, setList_cvs] =  useState([])
    useEffect(() => {
        fetch("http://localhost:3001/api/conversation/viewconversation" ,{
            method: 'POST',
            headers: {'Content-Type' : 'application/json',
        },
        body: JSON.stringify({"cvs_user": "662c94664af07d8c63472305"}),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch messages');
            }
            return response.json();
        })
        .then(data => {
            setList_cvs(data);
            console.log('Messages retrieved successfully');
        })
        .catch(error => {
            console.error('Error fetching messages:', error);
        });
    }, []);
    return (
        <div>
            {
                list_cvs.map((conversation, index) => (
                    <Link key={index} to={`/#${conversation._id}`}>
                        <div className={`messageblock ${selectedId === conversation._id ? 'select' : ''}`} id={conversation._id} onClick={() => handleClick(conversation._id)} >
                            <div className="massageblock-left">
                                <div className="avt"></div>
                            </div>
                            <div className="massageblock-right">
                                <div className="infor">
                                    <div>
                                        <div className="infor-name">Telegram</div>
                                        <div className="infor-icon"> <FaCheck /></div>
                                    </div>
                                    <div className="infor-date">14/03</div>
                                </div>
                                <div className="subtitle">Ten user</div>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    );
}

export default MessageBlock;