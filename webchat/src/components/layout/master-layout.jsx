import { useEffect } from "react";
import Sidebar from "./Sidebar";
import Viewchat from "./Viewchat";
import io from 'socket.io-client';
const Master_layout = () => {
    // useEffect(() => {
    //     const socket = io('http://localhost:3001');
        
    //     socket.on('connect', () => {
    //       console.log('Connected to server');
    //     });
    
    //     socket.on('disconnect', () => {
    //       console.log('Disconnected from server');
    //     });
    //     socket.on('chat message', (msg) => {
    //       console.log("day la ws" + msg)
    //   });
  
    //     socket.on('welcome', (message) => {
    //       console.log('Server says:', message);
    //     });
    
    //     return () => {
    //       socket.disconnect();
    //     };
    //   }, []);
    
    return (
        <div className="master-layout">
            <Sidebar />
            <Viewchat />
        </div>
    );
}

export default Master_layout;