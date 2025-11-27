import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowDown, faEye } from '@fortawesome/free-solid-svg-icons';

const Hero = ({ personalInfo, isDark }) => {
    const { fullName, title, tagline, description, cvUrl } = personalInfo;

    const handleDownloadCV = () => {
        if (cvUrl) {
            const link = document.createElement('a');
            link.href = cvUrl;
            link.download = 'CV_Eric_Obama.pdf';
            link.click();
        }
    };

    const handleViewProjects = () => {
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToAbout = () => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="min-h-screen pt-36 flex items-center">
            <div className="w-full">
                {/* Container avec la même largeur que le header */}
                <div className="container mx-auto px-6">
                    <div className={`glass rounded-3xl p-8 md:p-12 ${isDark ? 'bg-gray-900/30' : 'bg-white/30'} max-w-6xl mx-auto`}>

                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">

                            {/* Colonne gauche - Avatar et informations */}
                            <div className="flex-shrink-0 text-center lg:text-left">
                                {/* Avatar amélioré */}
                                <div className="w-48 h-48 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-civil-blue to-civil-teal p-2 mb-6">
                                    <div className={`w-full h-full rounded-2xl ${isDark ? 'bg-gray-800' : 'bg-white'} flex items-center justify-center`}>
                                        <div className="text-center">
                      <span className="text-4xl font-bold bg-gradient-to-br from-civil-blue to-civil-teal bg-clip-text text-transparent">
                        EO
                      </span>
                                            <div className={`w-16 h-1 mx-auto mt-2 rounded-full bg-gradient-to-r from-civil-blue to-civil-teal`}></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Informations de contact rapides */}
                                <div className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                    <div className="flex items-center justify-center lg:justify-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-civil-blue"></div>
                                        <span className="text-sm">Disponible pour stage</span>
                                    </div>
                                    <div className="flex items-center justify-center lg:justify-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-civil-teal"></div>
                                        <span className="text-sm">Dijon, France</span>
                                    </div>
                                </div>
                            </div>

                            {/* Colonne droite - Contenu principal */}
                            <div className="flex-1 text-center lg:text-left">
                                {/* Nom et titre */}
                                <div className="mb-8">
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 bg-gradient-to-br from-civil-blue to-civil-teal bg-clip-text text-transparent">
                                        {fullName.split(' ')[0]} <span className="text-white">{fullName.split(' ').slice(1).join(' ')}</span>
                                    </h1>

                                    <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
                                        <p className={`text-xl md:text-2xl font-semibold ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                            {title}
                                        </p>
                                        <div className="hidden sm:block w-1 h-6 rounded-full bg-civil-blue"></div>
                                        <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                                            isDark ? 'bg-civil-blue/20 text-civil-blue' : 'bg-civil-teal/20 text-civil-teal'
                                        }`}>
                                            ESTP Paris
                                        </div>
                                    </div>
                                </div>

                                {/* Tagline */}
                                <div className="mb-8">
                                    <p className={`text-lg md:text-xl leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'} italic`}>
                                        "{tagline}"
                                    </p>
                                </div>

                                {/* Description */}
                                <div className="mb-8">
                                    <p className={`text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                        {description}
                                    </p>
                                </div>

                                {/* Boutons d'action */}
                                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mt-12">
                                    <button
                                        onClick={handleViewProjects}
                                        className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-br from-civil-blue to-civil-teal text-white shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3 min-w-[200px] justify-center`}
                                    >
                                        <FontAwesomeIcon icon={faEye} />
                                        Voir mes projets
                                    </button>
                                    <button
                                        onClick={handleDownloadCV}
                                        className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 border-2 ${
                                            isDark
                                                ? 'border-civil-blue text-civil-blue hover:bg-civil-blue hover:text-white'
                                                : 'border-civil-teal text-civil-teal hover:bg-civil-teal hover:text-white'
                                        } flex items-center gap-3 min-w-[200px] justify-center`}
                                    >
                                        <FontAwesomeIcon icon={faDownload} />
                                        Télécharger CV
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Indicateur de scroll centré en bas */}
                        <div className="text-center mt-16">
                            <button
                                onClick={scrollToAbout}
                                className="animate-bounce flex flex-col items-center gap-2 mx-auto group"
                            >
                                <div className={`w-10 h-16 border-2 rounded-full flex justify-center items-start pt-3 transition-all duration-300 group-hover:border-civil-teal ${
                                    isDark ? 'border-civil-blue' : 'border-civil-teal'
                                }`}>
                                    <FontAwesomeIcon
                                        icon={faArrowDown}
                                        className={`w-4 h-4 transition-all duration-300 group-hover:text-civil-teal ${
                                            isDark ? 'text-civil-blue' : 'text-civil-teal'
                                        }`}
                                    />
                                </div>
                                <p className={`text-sm transition-all duration-300 group-hover:text-civil-teal ${
                                    isDark ? 'text-gray-400' : 'text-gray-500'
                                }`}>
                                    Explorer mon profil
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;