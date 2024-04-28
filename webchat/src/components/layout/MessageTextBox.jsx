import { useState } from "react";
import { FaSmile, FaArrowUp } from "react-icons/fa";

import io from 'socket.io-client';

const MessageTextBox = ({ onMessageSent }) => {
    const [content, setContent] = useState('')

    const socket = io('http://localhost:3001');

    const handleClickSentData = () => {
        const requestData = {
            sender: '662b33e40c5e76297f9206b7',
            content: content,
            cvs_id: window.location.hash.substring(1),
            receiver: '662b33e40c5e76297f9206b7'
        };
        socket.emit('message', content);
        fetch('http://localhost:3001/api/message/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to send message');
            }
            setContent('');
            console.log('Message sent successfully');
        })
        .catch(error => {
            console.error('Error sending message:', error);
        });
        onMessageSent(requestData);
    }
    return (
        <div className="messagetextbox">
            <FaSmile size={30} color="grey" />
            <input className="inputcontent" placeholder="Nhập văn bản" value={content} onChange={(e) => setContent(e.target.value)}></input>
            <button className="btnsent" onClick={handleClickSentData}><FaArrowUp size={15} /></button>
        </div>
    );
}

export default MessageTextBox;


// import { useState } from "react";
// import { FaSmile, FaArrowUp } from "react-icons/fa";

// const MessageTextBox = ({ onMessageSent }) => {
//     const [content, setContent] = useState('')
//     const handleClickSentData = () => {
//         const requestData = {
//             id: '662b33e40c5e76297f9206b7',
//             content: content,
//             conversations_id: '123'
//         };
//         onMessageSent(requestData);
//         fetch('http://localhost:3001/api/v1/messages', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(requestData),
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Failed to send message');
//             }
//             setContent('');
//             console.log('Message sent successfully');
//         })
//         .catch(error => {
//             console.error('Error sending message:', error);
//         });
//     }
//     return (
//         <div className="messagetextbox">
//             <FaSmile size={30} color="grey" />
//             <input className="inputcontent" placeholder="Nhập văn bản" value={content} onChange={(e) => setContent(e.target.value)}></input>
//             <button className="btnsent" onClick={handleClickSentData}><FaArrowUp size={15} /></button>
//         </div>
//     );
// }

// export default MessageTextBox;