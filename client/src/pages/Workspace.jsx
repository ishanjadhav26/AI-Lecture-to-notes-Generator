import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FileText,
    BookOpen,
    HelpCircle,
    MessageSquare,
    ArrowLeft,
    Download,
    Share2,
    MoreHorizontal,
    Send,
    Sparkles,
    Zap,
    Mic
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Button, GlassCard } from '../components/UI';

const Workspace = () => {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('notes');
    const [message, setMessage] = useState('');

    const tabs = [
        { id: 'transcript', name: 'Transcript', icon: Mic },
        { id: 'notes', name: 'Smart Notes', icon: FileText },
        { id: 'summary', name: 'Summary', icon: BookOpen },
        { id: 'quizzes', name: 'Quizzes', icon: HelpCircle },
        { id: 'chat', name: 'AI Assistant', icon: MessageSquare },
    ];

    const content = {
        transcript: "Professor: 'Good morning everyone. Today we are delving into the fascinating world of Quantum Entanglement. This phenomenon occurs when a pair or group of particles is generated, interact, or share spatial proximity such that the quantum state of each particle cannot be described independently of the state of the others...' ",
        notes: "# Quantum Entanglement\n\n## Key Concepts\n- **Non-locality**: Particles remain connected regardless of distance.\n- **Quantum State**: Describes the collective state of entangled particles.\n- **Einstein's Critique**: Referred to it as \"spooky action at a distance.\"\n\n## Key Experiments\n- **Bell's Theorem**: Proved that quantum mechanics is incompatible with local hidden variables.\n- **Aspect Experiment**: First definitive practical proof of entanglement.",
        summary: "Quantum entanglement is a fundamental principle of quantum mechanics. It involves particles becoming linked so that the state of one instantly influences the other, even over vast distances. This session covered Bell's Theorem and the historical debate between Einstein and Bohr.",
    };

    return (
        <div className="min-h-screen bg-dark flex flex-col">
            {/* Header */}
            <header className="h-16 border-b border-white/5 bg-dark-lighter/50 backdrop-blur-md sticky top-0 z-40 px-4 md:px-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link to="/dashboard" className="p-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div className="h-6 w-px bg-white/10 hidden md:block" />
                    <div>
                        <h1 className="text-lg font-bold text-white truncate max-w-[200px] md:max-w-md">Introduction to Quantum Physics</h1>
                        <p className="text-[10px] text-primary font-medium uppercase tracking-widest">Physics 101 • Jan 12, 2026</p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <Button variant="secondary" size="sm" className="hidden sm:flex">
                        <Download className="w-4 h-4" />
                        Export PDF
                    </Button>
                    <Button size="sm">
                        <Share2 className="w-4 h-4" />
                        Share
                    </Button>
                    <button className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5">
                        <MoreHorizontal className="w-5 h-5" />
                    </button>
                </div>
            </header>

            <div className="flex-1 flex overflow-hidden">
                {/* Main Content Area */}
                <div className="flex-1 flex flex-col min-w-0">
                    {/* Tab Navigation */}
                    <div className="px-4 md:px-8 pt-6 border-b border-white/5 overflow-x-auto">
                        <div className="flex items-center gap-2">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-t-xl transition-all relative min-w-max ${activeTab === tab.id
                                            ? 'text-primary'
                                            : 'text-slate-400 hover:text-slate-200'
                                        }`}
                                >
                                    <tab.icon className="w-4 h-4" />
                                    <span className="font-semibold text-sm">{tab.name}</span>
                                    {activeTab === tab.id && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Dynamic Content */}
                    <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="max-w-4xl mx-auto"
                            >
                                {activeTab === 'chat' ? (
                                    <ChatInterface id={id} />
                                ) : (
                                    <GlassCard className="prose prose-invert prose-slate max-w-none">
                                        <pre className="whitespace-pre-wrap font-sans text-slate-300 leading-relaxed">
                                            {content[activeTab] || `Dynamic ${activeTab} content being generated...`}
                                        </pre>
                                    </GlassCard>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ChatInterface = ({ id }) => {
    const [messages, setMessages] = useState([
        { role: 'assistant', text: "Hello! I've processed your lecture on Quantum Physics. Is there anything specific you'd like me to explain or clarify?" }
    ]);
    const [input, setInput] = useState('');

    const send = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        setMessages([...messages, { role: 'user', text: input }]);
        setInput('');
        // Mock response
        setTimeout(() => {
            setMessages(prev => [...prev, { role: 'assistant', text: "That's a great question! Based on the lecture at 12:45, the professor explains that Bell's inequality is a mathematical limit..." }]);
        }, 1000);
    };

    return (
        <div className="flex flex-col h-[70vh]">
            <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-4 custom-scrollbar">
                {messages.map((m, i) => (
                    <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-4 rounded-2xl ${m.role === 'user'
                                ? 'bg-primary text-white'
                                : 'bg-white/5 border border-white/10 text-slate-300'
                            }`}>
                            <p className="text-sm leading-relaxed">{m.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <form onSubmit={send} className="relative">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask anything about the lecture..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-6 pr-14 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
                <button type="submit" className="absolute right-2 top-2 p-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors">
                    <Send className="w-5 h-5" />
                </button>
            </form>
        </div>
    );
};

export default Workspace;
