import { useEffect, useState } from "react";
import BodyMessage from "./BodyMessage";
import HeaderMessage from "./HeaderMessage";
import MessageTextBox from "./MessageTextBox";
import { useLocation } from "react-router-dom";

const Viewchat = () => {

    const [messages, setMessages] = useState([]);
    const cvs_id = window.location.hash.substring(1);
    const location = useLocation();
    useEffect(() => {
        fetch('http://localhost:3001/api/message/viewmessages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cvs_id }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch messages');
                }
                return response.json();
            })
            .then(data => {
                setMessages(data);
                console.log('Messages retrieved successfully');
            })
            .catch(error => {
                console.error('Error fetching messages:', error);
            });
    }, [cvs_id, location]);


    const handleSendMessage = (newMessage) => {
        setMessages([...messages, newMessage]);
    };
    return (
        <div className="sidebar-right">
            <div className="header-message">
                <HeaderMessage />
            </div>
            <div className="body-message">
                <BodyMessage messages={messages} />
            </div>
            <div className="footer-message">
                <MessageTextBox onMessageSent={handleSendMessage} />
            </div>

        </div>
    );
}

export default Viewchat;