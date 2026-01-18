import { motion } from 'framer-motion';
import { Mic, Upload, ArrowRight, Play, Sparkles, BookOpen, MessageSquare, ListChecks } from 'lucide-react';
import { Button, GlassCard } from '../components/UI';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
                        <Sparkles className="w-4 h-4" />
                        AI-Powered Learning Revolution
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent leading-tight">
                        Turn Any Lecture Into <br />
                        <span className="text-primary">Smart Study Notes</span> Instantly
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Record live lectures or upload audio to generate accurate transcripts,
                        structured notes, quizzes, and flashcards in seconds.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="px-8 py-4 text-lg">
                            Get Started for Free
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                        <Button variant="secondary" size="lg" className="px-8 py-4 text-lg">
                            <Play className="w-5 h-5 fill-current" />
                            Watch Demo
                        </Button>
                    </div>

                    {/* Stats / Trust indicators */}
                    <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-12">
                        {[
                            { label: 'Accuracy', value: '99%' },
                            { label: 'Students', value: '50k+' },
                            { label: 'Time Saved', value: '80%' },
                            { label: 'Quizzes Gen', value: '1M+' },
                        ].map((stat, i) => (
                            <div key={i}>
                                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-slate-500 text-sm uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const Features = () => {
    const features = [
        {
            title: 'Real-time Transcription',
            desc: 'Record lectures directly in your browser with high-accuracy voice-to-text.',
            icon: Mic,
            color: 'bg-blue-500'
        },
        {
            title: 'Smart Summaries',
            desc: 'Get concise, AI-generated summaries capturing the most important concepts.',
            icon: BookOpen,
            color: 'bg-purple-500'
        },
        {
            title: 'Interactive Q&A',
            desc: 'Chat with your lecture to clarify doubts or delve deeper into topics.',
            icon: MessageSquare,
            color: 'bg-emerald-500'
        },
        {
            title: 'Quizzes & Flashcards',
            desc: 'Automatically generate study materials based on the lecture content.',
            icon: ListChecks,
            color: 'bg-orange-500'
        }
    ];

    return (
        <section id="features" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Master Your Studies with AI</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">Everything you need to transform passive listening into active learning.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((f, i) => (
                        <GlassCard key={i} className="hover:border-primary/50 transition-colors group">
                            <div className={`w-12 h-12 rounded-lg ${f.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-black/20`}>
                                <f.icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">{f.title}</h3>
                            <p className="text-slate-400 group-hover:text-slate-300 transition-colors">{f.desc}</p>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

const HowItWorks = () => {
    const steps = [
        {
            title: 'Record or Upload',
            desc: 'Start a live recording or upload your lecture audio/video file.',
            icon: Mic
        },
        {
            title: 'AI Processing',
            desc: 'Our advanced AI transcribes and analyzes the content in seconds.',
            icon: Sparkles
        },
        {
            title: 'Get Study Assets',
            desc: 'Receive structured notes, summaries, quizzes, and flashcards.',
            icon: ListChecks
        }
    ];

    return (
        <section id="how-it-works" className="py-24 bg-dark-lighter/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-20">Simple 3-Step Process</h2>
                <div className="relative">
                    {/* Connecting Line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 -translate-y-1/2" />

                    <div className="grid lg:grid-cols-3 gap-12 relative">
                        {steps.map((s, i) => (
                            <div key={i} className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6 relative z-10 shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                                    <s.icon className="w-8 h-8 text-white" />
                                    <span className="absolute -top-2 -right-2 w-7 h-7 bg-dark rounded-full flex items-center justify-center text-sm font-bold border border-primary text-primary">
                                        {i + 1}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{s.title}</h3>
                                <p className="text-slate-400 max-w-sm">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const FAQ = () => {
    const faqs = [
        { q: "What audio formats do you support?", a: "We support MP3, WAV, M4A, and most common video formats like MP4 and MOV." },
        { q: "How accurate is the transcription?", a: "Our AI (Whisper) achieve up to 99% accuracy in clear audio conditions, even with specialized academic terminology." },
        { q: "Can I download my notes?", a: "Yes, you can export all study materials as PDF or Markdown files." },
        { q: "Is there a limit on lecture length?", a: "Free users can upload up to 60-minute lectures. Pro users enjoy unlimited length." }
    ];

    return (
        <section className="py-24">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <GlassCard key={i} className="hover:border-white/20 transition-all cursor-pointer">
                            <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                            <p className="text-slate-400">{faq.a}</p>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="bg-dark border-t border-white/5 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <GraduationCap className="w-8 h-8 text-primary" />
                            <span className="text-2xl font-bold text-white">LectaAI</span>
                        </div>
                        <p className="text-slate-500 max-w-sm">
                            The ultimate AI study companion for students and educators.
                            Transform your learning experience with intelligent lecture processing.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-6">Product</h4>
                        <ul className="space-y-4 text-slate-500">
                            <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Chrome Extension</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-6">Company</h4>
                        <ul className="space-y-4 text-slate-500">
                            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/5 pt-8 text-center text-slate-600 text-sm">
                    © 2026 LectaAI. All rights reserved. Built for the future of education.
                </div>
            </div>
        </footer>
    );
};

const GraduationCap = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
);

export { Hero, Features, HowItWorks, FAQ, Footer };
