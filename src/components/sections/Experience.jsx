import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCalendarAlt,
    faMapMarkerAlt,
    faBuilding,
    faTasks,
    faChevronDown,
    faChevronUp,
    faHardHat,
    faCode,
    faToolbox
} from '@fortawesome/free-solid-svg-icons';

const Experience = ({ experience, isDark }) => {
    const [expandedItems, setExpandedItems] = useState([]);

    const toggleExpand = (index) => {
        setExpandedItems(prev =>
            prev.includes(index)
                ? prev.filter(item => item !== index)
                : [...prev, index]
        );
    };

    // Fonction pour formater la période
    const formatPeriod = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = endDate ? new Date(endDate) : new Date();

        const startStr = start.toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' });
        const endStr = endDate ? end.toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' }) : 'Présent';

        return `${startStr} - ${endStr}`;
    };

    // Calculer la durée
    const calculateDuration = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = endDate ? new Date(endDate) : new Date();
        const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());

        if (months >= 12) {
            const years = Math.floor(months / 12);
            const remainingMonths = months % 12;
            return `${years} an${years > 1 ? 's' : ''}${remainingMonths > 0 ? ` ${remainingMonths} mois` : ''}`;
        }
        return `${months} mois`;
    };

    // Icônes selon le type de poste
    const getPositionIcon = (position) => {
        if (position.includes('Coordinateur') || position.includes('Conducteur')) return faHardHat;
        if (position.includes('BIM') || position.includes('Projecteur')) return faCode;
        return faToolbox;
    };

    // Couleur selon l'index
    const getExperienceColor = (index) => {
        const colors = ['civil-blue', 'civil-teal', 'civil-amber'];
        return colors[index % colors.length];
    };

    return (
        <section id="experience" className="min-h-screen pt-20 flex items-center">
            <div className="w-full">
                <div className="container mx-auto px-6">
                    <div className={`glass rounded-3xl p-8 md:p-12 ${isDark ? 'bg-gray-900/30' : 'bg-white/30'} max-w-6xl mx-auto`}>

                        {/* En-tête de section */}
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 bg-gradient-to-br from-civil-blue to-civil-teal bg-clip-text text-transparent">
                                Expérience Professionnelle
                            </h2>
                            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                Mon parcours dans le génie civil et la gestion de projets
                            </p>
                            <div className="w-24 h-1 bg-gradient-to-r from-civil-blue to-civil-teal rounded-full mx-auto mt-4"></div>
                        </div>

                        {/* Liste des expériences en cartes simples */}
                        <div className="space-y-6">
                            {experience.map((exp, index) => (
                                <div
                                    key={index}
                                    className={`rounded-2xl p-6 transition-all duration-300 cursor-pointer ${
                                        isDark
                                            ? 'bg-gray-800/50 hover:bg-gray-800/70'
                                            : 'bg-white/50 hover:bg-white/70'
                                    } ${expandedItems.includes(index) ? 'ring-2 ring-civil-blue' : ''}`}
                                    onClick={() => toggleExpand(index)}
                                >
                                    {/* En-tête de l'expérience */}
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                        <div className="flex items-start gap-4 flex-1">
                                            {/* Icône */}
                                            <div className={`w-12 h-12 rounded-xl bg-${getExperienceColor(index)} flex items-center justify-center flex-shrink-0`}>
                                                <FontAwesomeIcon
                                                    icon={getPositionIcon(exp.position)}
                                                    className="text-white w-5 h-5"
                                                />
                                            </div>

                                            {/* Informations principales */}
                                            <div className="flex-1">
                                                <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-800'} mb-2`}>
                                                    {exp.position}
                                                </h3>
                                                <div className="flex flex-wrap items-center gap-4 mb-3">
                                                    <div className="flex items-center gap-2">
                                                        <FontAwesomeIcon
                                                            icon={faBuilding}
                                                            className={`w-4 h-4 ${isDark ? 'text-civil-blue' : 'text-civil-teal'}`}
                                                        />
                                                        <span className={`font-medium ${isDark ? 'text-civil-blue' : 'text-civil-teal'}`}>
                              {exp.company}
                            </span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <FontAwesomeIcon
                                                            icon={faMapMarkerAlt}
                                                            className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
                                                        />
                                                        <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                              {exp.location}
                            </span>
                                                    </div>
                                                </div>

                                                {/* Période et durée */}
                                                <div className="flex flex-wrap items-center gap-4">
                                                    <div className="flex items-center gap-2">
                                                        <FontAwesomeIcon
                                                            icon={faCalendarAlt}
                                                            className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
                                                        />
                                                        <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                              {formatPeriod(exp.startDate, exp.endDate)}
                            </span>
                                                    </div>
                                                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                                                        isDark ? 'bg-civil-blue/20 text-civil-blue' : 'bg-civil-teal/20 text-civil-teal'
                                                    }`}>
                                                        {calculateDuration(exp.startDate, exp.endDate)}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Bouton d'expansion */}
                                        <div className="flex items-center justify-between md:justify-end">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    toggleExpand(index);
                                                }}
                                                className={`p-2 rounded-lg transition-all duration-300 ${
                                                    isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
                                                }`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={expandedItems.includes(index) ? faChevronUp : faChevronDown}
                                                    className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
                                                />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Contenu détaillé (expandable) */}
                                    {expandedItems.includes(index) && (
                                        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                                            {/* Description */}
                                            <p className={`mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                                {exp.description}
                                            </p>

                                            {/* Projets réalisés */}
                                            <div className="space-y-4">
                                                <h4 className={`font-semibold flex items-center gap-2 ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
                                                    <FontAwesomeIcon icon={faTasks} className="w-4 h-4" />
                                                    Projets réalisés
                                                </h4>

                                                <div className="grid gap-4 md:grid-cols-2">
                                                    {exp.projects.map((project, projectIndex) => (
                                                        <div
                                                            key={projectIndex}
                                                            className={`rounded-xl p-4 ${
                                                                isDark ? 'bg-gray-700/30' : 'bg-gray-100'
                                                            }`}
                                                        >
                                                            <h5 className={`font-medium mb-3 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                                                                {project.name}
                                                            </h5>
                                                            <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                                                {project.tasks.map((task, taskIndex) => (
                                                                    <li key={taskIndex} className="flex items-start gap-3">
                                                                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                                                                            isDark ? 'bg-civil-blue' : 'bg-civil-teal'
                                                                        }`}></div>
                                                                        <span className="leading-relaxed">{task}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Compétences clés */}
                                            <div className="mt-6">
                                                <h5 className={`font-semibold mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                                    Compétences utilisées
                                                </h5>
                                                <div className="flex flex-wrap gap-2">
                                                    {Array.from(new Set(exp.projects.flatMap(project =>
                                                        project.tasks.map(task => task.split(' ').slice(0, 2).join(' '))
                                                    ))).slice(0, 8).map((skill, skillIndex) => (
                                                        <span
                                                            key={skillIndex}
                                                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                                                                isDark
                                                                    ? 'bg-gray-700 text-gray-300'
                                                                    : 'bg-gray-200 text-gray-700'
                                                            }`}
                                                        >
                              {skill}
                            </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Statistiques résumées */}
                        <div className={`rounded-2xl p-6 mt-12 ${isDark ? 'bg-gray-800/50' : 'bg-white/50'}`}>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                                <div className="stats-item">
                                    <div className={`text-2xl md:text-3xl font-bold mb-2 text-civil-blue`}>
                                        {experience.length}
                                    </div>
                                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                        Expériences
                                    </p>
                                </div>

                                <div className="stats-item">
                                    <div className={`text-2xl md:text-3xl font-bold mb-2 text-civil-teal`}>
                                        {experience.reduce((total, exp) => total + exp.projects.length, 0)}
                                    </div>
                                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                        Projets réalisés
                                    </p>
                                </div>

                                <div className="stats-item">
                                    <div className={`text-2xl md:text-3xl font-bold mb-2 text-civil-amber`}>
                                        {new Date().getFullYear() - new Date(experience[experience.length - 1].startDate).getFullYear() + 1}
                                    </div>
                                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                        Années d'expérience
                                    </p>
                                </div>

                                <div className="stats-item">
                                    <div className={`text-2xl md:text-3xl font-bold mb-2 text-civil-rose`}>
                                        {experience.reduce((total, exp) => total + exp.projects.reduce((sum, proj) => sum + proj.tasks.length, 0), 0)}
                                    </div>
                                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                        Tâches accomplies
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;