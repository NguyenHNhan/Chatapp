import moment from "moment";
import Message from "./Message";
import { io } from "socket.io-client";
import { useEffect } from "react";

const BodyMessage = ({messages}) => {
    useEffect(() => {
        const socket = io('http://localhost:3001');
        
        socket.on('connect', () => {
          console.log('Connected to server');
        });
    
        socket.on('disconnect', () => {
          console.log('Disconnected from server');
        });
        socket.on('chat message', (msg) => {
          console.log("day la ws" + msg)
      });
  
        socket.on('welcome', (message) => {
          console.log('Server says:', message);
        });
    
        return () => {
          socket.disconnect();
        };
      }, []);

      const customeMessages = messages.map((message) => ({
        content: message.content, 
        sender: message.sender,
        receiver: message.receiver,
        cvs_id: message.cvs_id
    }));

    
    return (
        <div className="bodymessage">
            {messages.map((message, index) => (
                // <Message key={index} content={message.content} time={moment(message.timestamp).format("HH:mm")} isUser={message.users_id != "662b33e40c5e76297f9206b7"} />
                <Message key={index} content={message.content} time={moment(message.timestamp).format("HH:mm")}/>
            ))}
        </div>
    );
}

export default BodyMessage;

// import { useEffect, useState } from "react";
// import Message from "./Message";

// const BodyMessage = () => {
//     const [messages, setMessages] = useState([]);
//     const conversations_id = "123";
//     useEffect(() => {
//         fetch('http://localhost:3001/api/v1/viewmessages', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ conversations_id }),
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Failed to fetch messages');
//             }
//             return response.json();
//         })
//         .then(data => {
//             setMessages(data);
//             console.log('Messages retrieved successfully');
//         })
//         .catch(error => {
//             console.error('Error fetching messages:', error);
//         });
//     }, [conversations_id]); 
//     return (
//         <div className="bodymessage">
//             {messages.map((message, index) => (
//                 <Message key={index} content={message.content} time={message.timestamp} isUser={message.users_id === "662b33e40c5e76297f9206b7"} />
//             ))}
//         </div>
//     );
// }

// export default BodyMessage;