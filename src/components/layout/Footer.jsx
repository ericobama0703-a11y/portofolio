import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCode, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = ({ isDark }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={`glass rounded-t-3xl mt-20 border-t ${
            isDark ? 'border-gray-700 bg-gray-900/80' : 'border-gray-200 bg-white/80'
        }`}>
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">

                    {/* Informations de contact */}
                    <div className="flex flex-col items-center lg:items-start space-y-3">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-civil-blue to-civil-teal rounded-xl flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-sm">EO</span>
                            </div>
                            <div className={isDark ? 'text-white' : 'text-gray-800'}>
                                <p className="font-semibold">Eric Obama Awono</p>
                                <p className="text-sm opacity-70">Ingénieur Génie Civil</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0 text-sm">
                            <div className="flex items-center space-x-2">
                                <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 text-civil-blue" />
                                <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>ericobama0703@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FontAwesomeIcon icon={faPhone} className="w-4 h-4 text-civil-teal" />
                                <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>+33 7 43 66 85 98</span>
                            </div>
                        </div>
                    </div>

                    {/* Liens sociaux */}
                    <div className="flex items-center space-x-4">
                        <a
                            href="https://linkedin.com/in/eric-oswald-obama-awono-0a4684279"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                                isDark
                                    ? 'bg-gray-800 text-gray-300 hover:bg-civil-blue hover:text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-civil-blue hover:text-white'
                            }`}
                        >
                            <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />
                        </a>
                        <a
                            href="#"
                            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                                isDark
                                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                            }`}
                        >
                            <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className={`flex items-center space-x-2 text-sm ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                        <FontAwesomeIcon icon={faCode} className="w-4 h-4 text-civil-blue" />
                        <span>Développé avec</span>
                        <FontAwesomeIcon icon={faHeart} className="w-4 h-4 text-civil-rose animate-pulse" />
                        <span>• {currentYear}</span>
                    </div>
                </div>

                {/* Ligne de séparation */}
                <div className={`mt-8 pt-6 border-t ${
                    isDark ? 'border-gray-700' : 'border-gray-200'
                }`}>
                    <div className="flex flex-col md:flex-row items-center justify-between text-sm">
                        <p className={isDark ? 'text-gray-400' : 'text-gray-500'}>
                            Innovative Solutions in Sustainable Infrastructure
                        </p>
                        <p className={`mt-2 md:mt-0 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                            Dijon, France
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;