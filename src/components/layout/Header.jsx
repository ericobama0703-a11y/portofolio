import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faTimes,
    faHome,
    faUser,
    faAward,
    faBriefcase,
    faFolder,
    faInfo,
    faSun,
    faMoon
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDark, setIsDark] = useState(true);

    const navigation = [
        { id: 'home', label: 'Accueil', icon: faHome },
        { id: 'about', label: 'Profil', icon: faUser },
        { id: 'skills', label: 'Compétences', icon: faAward },
        { id: 'experience', label: 'Expérience', icon: faBriefcase },
        { id: 'projects', label: 'Projets', icon: faFolder },
        { id: 'contact', label: 'Contact', icon: faInfo }
    ];

    useEffect(() => {
        if (isDark) {
            document.body.classList.add('dark');
            document.body.classList.remove('light');
        } else {
            document.body.classList.add('light');
            document.body.classList.remove('dark');
        }
        // Émettre l'événement pour synchroniser avec App.jsx
        window.dispatchEvent(new CustomEvent('themeChange', { detail: isDark }));
    }, [isDark]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            const sections = navigation.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 100;

            sections.forEach(section => {
                if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
            setIsMenuOpen(false);
        }
    };

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <>
            {/* Header Principal Épuré */}
            <header className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 rounded-header glass ${
                isScrolled ? 'gentle-glow' : ''
            } ${isDark ? 'bg-gray-900/80' : 'bg-white/80'}`}>
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between h-16">

                        {/* Logo Simplifié */}
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-civil-blue to-civil-teal rounded-xl flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-sm">EO</span>
                            </div>
                            <div className={isDark ? 'text-white' : 'text-gray-800'}>
                                <h1 className="text-lg font-semibold font-display">Eric Obama</h1>
                                <p className="text-xs opacity-70">Ingénieur Génie Civil</p>
                            </div>
                        </div>

                        {/* Navigation Desktop Épurée */}
                        <nav className="hidden md:flex items-center space-x-1">
                            {navigation.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`nav-item relative ${
                                        activeSection === item.id
                                            ? 'active text-white'
                                            : isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                                    }`}
                                >
                                    <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
                                    <span className="ml-2">{item.label}</span>
                                    <div className={`nav-indicator ${isDark ? 'bg-civil-blue' : 'bg-civil-teal'}`}></div>
                                </button>
                            ))}

                            {/* Bouton Thème */}
                            <button
                                onClick={toggleTheme}
                                className="theme-toggle ml-4"
                                aria-label="Changer le thème"
                            >
                                <FontAwesomeIcon
                                    icon={isDark ? faSun : faMoon}
                                    className="text-white w-4 h-4"
                                />
                            </button>
                        </nav>

                        {/* Menu Mobile */}
                        <div className="flex items-center space-x-4 md:hidden">
                            <button
                                onClick={toggleTheme}
                                className="theme-toggle"
                                aria-label="Changer le thème"
                            >
                                <FontAwesomeIcon
                                    icon={isDark ? faSun : faMoon}
                                    className="text-white w-4 h-4"
                                />
                            </button>

                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                                    isDark
                                        ? 'bg-gray-800 text-white hover:bg-gray-700'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                            >
                                <FontAwesomeIcon
                                    icon={isMenuOpen ? faTimes : faBars}
                                    className="w-5 h-5"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Menu Mobile Épuré */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-40 md:hidden pt-24">
                    <div
                        className="absolute inset-0 bg-black/20 backdrop-blur-xs"
                        onClick={() => setIsMenuOpen(false)}
                    ></div>
                    <div className={`absolute top-24 right-6 left-6 rounded-2xl p-6 animate-slide-in ${
                        isDark ? 'bg-gray-900/95' : 'bg-white/95'
                    } glass`}>
                        <nav className="space-y-2">
                            {navigation.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`nav-item w-full text-left justify-start ${
                                        activeSection === item.id
                                            ? 'active text-white'
                                            : isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                                    }`}
                                >
                                    <FontAwesomeIcon icon={item.icon} className="w-4 h-4 mr-3" />
                                    {item.label}
                                    <div className={`nav-indicator ${isDark ? 'bg-civil-blue' : 'bg-civil-teal'}`}></div>
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>
            )}

            {/* Navigation Latérale Desktop */}
            <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden md:flex">
                <div className="flex flex-col items-center space-y-4">
                    {navigation.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`relative group w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                                activeSection === item.id
                                    ? 'bg-gradient-to-br from-civil-blue to-civil-teal text-white shadow-lg'
                                    : isDark
                                        ? 'bg-gray-800/80 text-gray-400 hover:bg-gray-700/80 hover:text-white'
                                        : 'bg-white/80 text-gray-600 hover:bg-white hover:text-gray-900 shadow-md'
                            }`}
                        >
                            <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />

                            {/* Tooltip */}
                            <div className={`absolute right-full mr-3 px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                                isDark ? 'bg-gray-800 text-white shadow-lg' : 'bg-white text-gray-800 shadow-lg'
                            }`}>
                                <span className="text-sm whitespace-nowrap">{item.label}</span>
                                <div className={`absolute top-1/2 right-0 transform translate-x-1 -translate-y-1/2 w-2 h-2 ${
                                    isDark ? 'bg-gray-800' : 'bg-white'
                                } rotate-45`}></div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Header;