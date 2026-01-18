import { motion } from 'framer-motion';
import {
    LayoutDashboard,
    Mic,
    Upload,
    History,
    Settings,
    LogOut,
    GraduationCap,
    ChevronRight,
    Search,
    Plus
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Sidebar = () => {
    const { signOut } = useAuth();
    const location = useLocation();

    const menuItems = [
        { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
        { name: 'Record Lecture', icon: Mic, path: '/record' },
        { name: 'Upload File', icon: Upload, path: '/upload' },
        { name: 'Recent Lectures', icon: History, path: '/history' },
        { name: 'Settings', icon: Settings, path: '/settings' },
    ];

    return (
        <div className="w-64 bg-dark-lighter border-r border-white/5 h-screen sticky top-0 flex flex-col pt-8 pb-4">
            <div className="px-6 mb-10 flex items-center gap-2">
                <div className="p-1.5 bg-primary rounded-lg">
                    <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">LectaAI</span>
            </div>

            <nav className="flex-1 px-4 space-y-2">
                {menuItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${isActive
                                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                                }`}
                        >
                            <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-500 group-hover:text-white'}`} />
                            <span className="font-medium">{item.name}</span>
                            {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
                        </Link>
                    );
                })}
            </nav>

            <div className="px-4 mt-auto">
                <button
                    onClick={signOut}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-red-500/10 hover:text-red-500 transition-all font-medium"
                >
                    <LogOut className="w-5 h-5" />
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
