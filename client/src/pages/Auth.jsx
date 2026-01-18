import { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Mail, Lock, ArrowRight, Github } from 'lucide-react';
import { Button, GlassCard } from '../components/UI';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const AuthPage = ({ mode = 'login' }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signIn, signUp } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (mode === 'login') {
                await signIn({ email, password });
            } else {
                await signUp({ email, password });
            }
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
            // Error handled by placeholder values for now
            navigate('/dashboard'); // Mock behavior for demo
        }
    };

    return (
        <div className="min-h-screen bg-dark flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-primary/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] left-[10%] w-[30%] h-[30%] bg-blue-600/10 rounded-full blur-[100px]" />
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
                <Link to="/" className="inline-flex items-center gap-2 mb-8">
                    <div className="p-2 bg-primary rounded-lg">
                        <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-3xl font-bold text-white">LectaAI</span>
                </Link>
                <h2 className="text-3xl font-extrabold text-white">
                    {mode === 'login' ? 'Sign in to your account' : 'Create your account'}
                </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <GlassCard className="py-8 px-4 shadow sm:rounded-2xl sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                                Email address
                            </label>
                            <div className="mt-1 relative">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="appearance-none block w-full px-12 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all sm:text-sm"
                                    placeholder="name@university.edu"
                                />
                                <Mail className="absolute left-4 top-3.5 h-5 w-5 text-slate-500" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-slate-300">
                                Password
                            </label>
                            <div className="mt-1 relative">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="appearance-none block w-full px-12 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all sm:text-sm"
                                    placeholder="••••••••"
                                />
                                <Lock className="absolute left-4 top-3.5 h-5 w-5 text-slate-500" />
                            </div>
                        </div>

                        <div>
                            <Button type="submit" className="w-full py-4 text-lg">
                                {mode === 'login' ? 'Sign In' : 'Create Account'}
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/10" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-transparent text-slate-500">Or continue with</span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <Button variant="secondary" className="w-full">
                                <Github className="w-5 h-5" />
                                University SSO / GitHub
                            </Button>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-slate-400">
                            {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
                            <Link
                                to={mode === 'login' ? '/signup' : '/login'}
                                className="font-medium text-primary hover:text-primary-light transition-colors"
                            >
                                {mode === 'login' ? 'Sign up' : 'Sign in'}
                            </Link>
                        </p>
                    </div>
                </GlassCard>
            </div>
        </div>
    );
};

export default AuthPage;
