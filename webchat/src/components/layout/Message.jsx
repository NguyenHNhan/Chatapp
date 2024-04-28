

const Message = ({content, time, isUser}) => {
    return (
        <div className="message-line">
            <div className={`message ${isUser ? 'left' : ''}`}>
                <span>{content}</span>
                <span className="message-time">{time}</span>
            </div>
        </div>
    );
}

export default Message;