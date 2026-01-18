import { motion } from 'framer-motion';
import {
    Plus,
    Search,
    Clock,
    FileText,
    MoreVertical,
    Calendar,
    Zap
} from 'lucide-react';
import { Button, GlassCard } from '../components/UI';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
    const lectures = [
        { id: 1, title: 'Introduction to Quantum Physics', date: 'Jan 12, 2026', duration: '45 mins', status: 'Completed' },
        { id: 2, title: 'Modern European History - Lecture 4', date: 'Jan 10, 2026', duration: '58 mins', status: 'Completed' },
        { id: 3, title: 'Advanced Organic Chemistry', date: 'Jan 08, 2026', duration: '1h 20m', status: 'Completed' },
        { id: 4, title: 'Principles of Economics', date: 'Jan 05, 2026', duration: '52 mins', status: 'Completed' },
    ];

    return (
        <div className="flex min-h-screen bg-dark">
            <Sidebar />

            <main className="flex-1 p-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-2">Welcome back, Ishan!</h1>
                        <p className="text-slate-400 text-sm">You have transformed 12 lectures this month.</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="relative group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-primary transition-colors" />
                            <input
                                type="text"
                                placeholder="Search lectures..."
                                className="bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary w-64 lg:w-80"
                            />
                        </div>
                        <Button size="sm">
                            <Plus className="w-4 h-4" />
                            New Lecture
                        </Button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {[
                        { label: 'Total Lectures', value: '42', icon: FileText, color: 'text-blue-500' },
                        { label: 'Study Hours Saved', value: '128h', icon: Zap, color: 'text-orange-500' },
                        { label: 'Quiz Mastery', value: '85%', icon: Calendar, color: 'text-emerald-500' },
                    ].map((stat, i) => (
                        <GlassCard key={i} className="flex items-center justify-between">
                            <div>
                                <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">{stat.label}</p>
                                <p className="text-2xl font-bold text-white">{stat.value}</p>
                            </div>
                            <div className={`p-3 rounded-lg bg-white/5 ${stat.color}`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                        </GlassCard>
                    ))}
                </div>

                {/* Lecture List */}
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-white">Recent Lectures</h2>
                    <button className="text-primary text-sm font-medium hover:underline">View All</button>
                </div>

                <div className="grid gap-4">
                    {lectures.map((lec) => (
                        <motion.div
                            key={lec.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            whileHover={{ scale: 1.005 }}
                            className="group glass-card p-4 flex items-center justify-between hover:border-white/20 transition-all cursor-pointer"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                                    <FileText className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white group-hover:text-primary transition-colors">{lec.title}</h3>
                                    <div className="flex items-center gap-4 mt-1">
                                        <span className="flex items-center gap-1.5 text-xs text-slate-500">
                                            <Calendar className="w-3 h-3" />
                                            {lec.date}
                                        </span>
                                        <span className="flex items-center gap-1.5 text-xs text-slate-500">
                                            <Clock className="w-3 h-3" />
                                            {lec.duration}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-bold uppercase tracking-wider">
                                    {lec.status}
                                </span>
                                <button className="p-2 text-slate-500 hover:text-white rounded-lg hover:bg-white/5">
                                    <MoreVertical className="w-5 h-5" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
