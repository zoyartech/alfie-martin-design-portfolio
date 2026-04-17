import React, { useState, useEffect, useRef } from 'react';
import { base44 } from '@/api/base44Client';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ReactMarkdown from 'react-markdown';

export default function ChatWidget({ agentName }) {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [conversation, setConversation] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (isOpen && !conversation) {
            initConversation();
        }
    }, [isOpen]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const initConversation = async () => {
        try {
            setIsLoading(true);
            const conv = await base44.agents.createConversation({
                agent_name: agentName,
                metadata: { name: "Visitor Chat" }
            });
            setConversation(conv);
            
            base44.agents.subscribeToConversation(conv.id, (data) => {
                setMessages(data.messages || []);
                setIsLoading(false);
            });
        } catch (error) {
            console.error("Failed to init conversation", error);
            setIsLoading(false);
        }
    };

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim() || !conversation) return;

        const userMsg = input.trim();
        setInput('');
        
        const maxRetries = 3;
        let attempt = 0;
        let success = false;

        while (attempt < maxRetries && !success) {
            try {
                await base44.agents.addMessage(conversation, {
                    role: 'user',
                    content: userMsg
                });
                success = true;
            } catch (error) {
                attempt++;
                console.error(`Attempt ${attempt} failed to send message:`, error);
                if (attempt < maxRetries) {
                    await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
                }
            }
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="bg-white border border-slate-200 shadow-xl rounded-2xl w-80 sm:w-96 h-[500px] flex flex-col mb-4 overflow-hidden"
                    >
                        <div className="bg-slate-900 text-white p-4 flex justify-between items-center">
                            <div className="font-medium flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                Chat with Chad
                            </div>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-300 hover:text-white hover:bg-slate-800" onClick={() => setIsOpen(false)}>
                                <X className="h-4 w-4" />
                            </Button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                            {messages.length === 0 && !isLoading && (
                                <div className="text-center text-slate-500 text-sm mt-4">
                                    Send a message to start chatting!
                                </div>
                            )}
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${msg.role === 'user' ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-800'}`}>
                                        <ReactMarkdown className="text-sm prose prose-sm prose-slate max-w-none">
                                            {msg.content}
                                        </ReactMarkdown>
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white border border-slate-200 rounded-2xl px-4 py-2">
                                        <Loader2 className="h-4 w-4 animate-spin text-slate-400" />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        <div className="p-3 bg-white border-t border-slate-100">
                            <form onSubmit={handleSend} className="flex gap-2">
                                <Input
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Type a message..."
                                    className="flex-1"
                                />
                                <Button type="submit" size="icon" disabled={!input.trim() || !conversation} className="bg-slate-900 hover:bg-slate-800 text-white">
                                    <Send className="h-4 w-4" />
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="bg-slate-900 text-white rounded-full p-4 shadow-lg hover:bg-slate-800 transition-colors flex items-center justify-center ml-auto"
            >
                {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
            </motion.button>
        </div>
    );
}