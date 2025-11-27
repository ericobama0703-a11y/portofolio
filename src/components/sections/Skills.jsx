import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCode,
    faUsers,
    faChartLine,
    faCube,
    faDrawPolygon,
    faCalculator,
    faFileAlt,
    faBalanceScale,
    faLanguage
} from '@fortawesome/free-solid-svg-icons';

const Skills = ({ skills, languages, isDark }) => {
    const { technical, professional } = skills;

    // Icônes pour les catégories de compétences
    const categoryIcons = {
        'BIM': faCube,
        'DAO': faDrawPolygon,
        'Structure': faCalculator,
        'Gestion': faChartLine,
        'Bureautique': faFileAlt,
        'Normes': faBalanceScale,
        'Programmation': faCode
    };

    // Couleurs pour les niveaux
    const getLevelColor = (level) => {
        if (level >= 80) return 'from-green-500 to-emerald-600';
        if (level >= 60) return 'from-blue-500 to-cyan-600';
        if (level >= 40) return 'from-yellow-500 to-amber-600';
        return 'from-red-500 to-orange-600';
    };

    // Grouper les compétences techniques par catégorie
    const skillsByCategory = technical.reduce((acc, skill) => {
        const category = skill.category;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(skill);
        return acc;
    }, {});

    return (
        <section id="skills" className="min-h-screen pt-20 flex items-center">
            <div className="w-full">
                <div className="container mx-auto px-6">
                    <div className={`glass rounded-3xl p-8 md:p-12 ${isDark ? 'bg-gray-900/30' : 'bg-white/30'} max-w-6xl mx-auto`}>

                        {/* En-tête de section */}
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 bg-gradient-to-br from-civil-blue to-civil-teal bg-clip-text text-transparent">
                                Compétences
                            </h2>
                            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                Expertise technique et compétences professionnelles acquises au fil de mes expériences
                            </p>
                            <div className="w-24 h-1 bg-gradient-to-r from-civil-blue to-civil-teal rounded-full mx-auto mt-4"></div>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                            {/* Colonne gauche - Compétences techniques par catégorie */}
                            <div className="flex-1">
                                <h3 className={`text-2xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                                    Compétences Techniques
                                </h3>

                                <div className="space-y-8">
                                    {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
                                        <div key={category} className={`rounded-2xl p-6 ${isDark ? 'bg-gray-800/50' : 'bg-white/50'}`}>
                                            {/* En-tête de catégorie */}
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-civil-blue to-civil-teal flex items-center justify-center">
                                                    <FontAwesomeIcon
                                                        icon={categoryIcons[category] || faCode}
                                                        className="text-white w-4 h-4"
                                                    />
                                                </div>
                                                <h4 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                                                    {category}
                                                </h4>
                                            </div>

                                            {/* Liste des compétences de la catégorie */}
                                            <div className="space-y-4">
                                                {categorySkills.map((skill, index) => (
                                                    <div key={index} className="group">
                                                        <div className="flex justify-between items-center mb-2">
                                                            <div className="flex items-center gap-3">
                                <span className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                  {skill.name}
                                </span>
                                                            </div>
                                                            <span className={`text-sm font-semibold ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                {skill.level}%
                              </span>
                                                        </div>

                                                        {/* Barre de progression */}
                                                        <div className={`w-full h-3 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                                                            <div
                                                                className={`h-3 rounded-full bg-gradient-to-r ${getLevelColor(skill.level)} transition-all duration-1000 ease-out group-hover:scale-y-110`}
                                                                style={{ width: `${skill.level}%` }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Colonne droite - Compétences professionnelles et langues */}
                            <div className="flex-1">
                                {/* Compétences professionnelles */}
                                <div className={`rounded-2xl p-6 mb-8 ${isDark ? 'bg-gray-800/50' : 'bg-white/50'}`}>
                                    <h3 className={`text-2xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                                        Compétences Professionnelles
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {professional.map((skill, index) => (
                                            <div
                                                key={index}
                                                className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105 ${
                                                    isDark ? 'bg-gray-700/50 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                                                }`}
                                            >
                                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-civil-amber to-civil-rose flex items-center justify-center flex-shrink-0">
                                                    <FontAwesomeIcon icon={faUsers} className="text-white w-3 h-3" />
                                                </div>
                                                <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                          {skill}
                        </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Langues */}
                                <div className={`rounded-2xl p-6 ${isDark ? 'bg-gray-800/50' : 'bg-white/50'}`}>
                                    <h3 className={`text-2xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                                        Langues
                                    </h3>

                                    <div className="space-y-6">
                                        {languages.map((language, index) => (
                                            <div key={index} className="flex items-center justify-between">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-civil-teal to-civil-blue flex items-center justify-center">
                                                        <FontAwesomeIcon icon={faLanguage} className="text-white w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                                                            {language.language}
                                                        </h4>
                                                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                                            {language.level}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Indicateur visuel du niveau */}
                                                <div className="flex gap-1">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <div
                                                            key={star}
                                                            className={`w-3 h-3 rounded-full ${
                                                                (language.language === 'Français' && star <= 5) ||
                                                                (language.language === 'Anglais' && star <= 4)
                                                                    ? 'bg-civil-teal'
                                                                    : isDark ? 'bg-gray-600' : 'bg-gray-300'
                                                            }`}
                                                        ></div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Légende des niveaux */}
                                    <div className={`mt-6 p-4 rounded-xl border ${
                                        isDark ? 'border-gray-600 bg-gray-700/30' : 'border-gray-200 bg-gray-50'
                                    }`}>
                                        <h5 className={`text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                            Échelle de compétence linguistique
                                        </h5>
                                        <div className="flex items-center justify-between text-xs">
                                            <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>Débutant</span>
                                            <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>Intermédiaire</span>
                                            <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>Avancé</span>
                                            <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>Courant</span>
                                            <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>Natif</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Statistiques résumées */}
                                <div className={`rounded-2xl p-6 mt-8 ${isDark ? 'bg-gray-800/50' : 'bg-white/50'}`}>
                                    <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                                        Aperçu des Compétences
                                    </h4>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="text-center">
                                            <div className={`text-2xl font-bold mb-1 ${
                                                technical.filter(s => s.level >= 80).length > 0 ? 'text-green-500' : 'text-gray-400'
                                            }`}>
                                                {technical.filter(s => s.level >= 80).length}
                                            </div>
                                            <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                                Expert
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            <div className={`text-2xl font-bold mb-1 ${
                                                technical.filter(s => s.level >= 60 && s.level < 80).length > 0 ? 'text-blue-500' : 'text-gray-400'
                                            }`}>
                                                {technical.filter(s => s.level >= 60 && s.level < 80).length}
                                            </div>
                                            <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                                Avancé
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            <div className={`text-2xl font-bold mb-1 ${
                                                technical.filter(s => s.level >= 40 && s.level < 60).length > 0 ? 'text-yellow-500' : 'text-gray-400'
                                            }`}>
                                                {technical.filter(s => s.level >= 40 && s.level < 60).length}
                                            </div>
                                            <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                                Intermédiaire
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            <div className="text-2xl font-bold mb-1 text-civil-teal">
                                                {technical.length}
                                            </div>
                                            <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                                Total
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;