import React, { useState, useEffect, useRef } from 'react';
import { interviewData } from '../data/interviewData';

interface Message {
    id: number;
    sender: 'Interviewer' | 'Pedro';
    text: string;
}

const InterviewChat: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout>;

        const runInterview = async () => {
            // 1. Interviewer asks question
            setIsTyping(true);
            timeoutId = setTimeout(() => {
                setIsTyping(false);
                const topic = interviewData[currentTopicIndex];

                const questionMsg: Message = {
                    id: Date.now(),
                    sender: 'Interviewer',
                    text: topic.question
                };
                setMessages(prev => [...prev, questionMsg]);

                // 2. Wait for Pedro to "read" and "type"
                timeoutId = setTimeout(() => {
                    setIsTyping(true);

                    // 3. Pedro answers
                    timeoutId = setTimeout(() => {
                        setIsTyping(false);
                        const answerMsg: Message = {
                            id: Date.now() + 1,
                            sender: 'Pedro',
                            text: topic.answer
                        };
                        setMessages(prev => [...prev, answerMsg]);

                        // 4. Prepare next topic
                        setCurrentTopicIndex(prev => (prev + 1) % interviewData.length);

                    }, 2000); // Pedro typing time

                }, 1500); // Reading time

            }, 1500); // Interviewer typing time
        };

        // Start the loop (or continue it)
        // We need a delay before starting the next cycle to allow reading the answer
        // Start the loop (or continue it)
        // We need a delay before starting the next cycle to allow reading the answer
        const cycleDelay = currentTopicIndex === 0 ? 1000 : 4000;

        timeoutId = setTimeout(runInterview, cycleDelay);

        return () => clearTimeout(timeoutId);
    }, [currentTopicIndex]);

    return (
        <div className="interview-chat" ref={scrollRef}>
            {messages.map((msg) => (
                <div key={msg.id} className={`chat-message ${msg.sender.toLowerCase()}`}>
                    <span className="chat-sender">{msg.sender}:</span>
                    <p className="chat-text">{msg.text}</p>
                </div>
            ))}
            {isTyping && (
                <div className="chat-message typing">
                    <span className="dot">.</span><span className="dot">.</span><span className="dot">.</span>
                </div>
            )}
        </div>
    );
};

export default InterviewChat;
