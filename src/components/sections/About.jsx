import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faGraduationCap, faCalendarAlt, faUniversity } from '@fortawesome/free-solid-svg-icons';

const About = ({ personalInfo, education, isDark }) => {
    const { fullName, title, location, phone, email, description, status } = personalInfo;

    // Fonction pour calculer la durée entre deux dates
    const getDuration = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = endDate ? new Date(endDate) : new Date();
        const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
        return months >= 12 ? `${Math.floor(months/12)} an${Math.floor(months/12) > 1 ? 's' : ''}` : `${months} mois`;
    };

    // Formater la date en français
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' });
    };

    return (
        <section id="about" className="min-h-screen pt-20 flex items-center">
            <div className="w-full">
                <div className="container mx-auto px-6">
                    <div className={`glass rounded-3xl p-8 md:p-12 ${isDark ? 'bg-gray-900/30' : 'bg-white/30'} max-w-6xl mx-auto`}>

                        {/* En-tête de section */}
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 bg-gradient-to-br from-civil-blue to-civil-teal bg-clip-text text-transparent">
                                Profil
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-civil-blue to-civil-teal rounded-full mx-auto"></div>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                            {/* Colonne gauche - Informations personnelles */}
                            <div className="flex-1">
                                <div className="space-y-8">

                                    {/* Carte d'identité */}
                                    <div className={`rounded-2xl p-6 ${isDark ? 'bg-gray-800/50' : 'bg-white/50'}`}>
                                        <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                                            Informations personnelles
                                        </h3>

                                        <div className="space-y-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-civil-blue to-civil-teal flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white w-5 h-5" />
                                                </div>
                                                <div>
                                                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Localisation</p>
                                                    <p className={isDark ? 'text-white' : 'text-gray-800'}>{location}</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-civil-teal to-civil-blue flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faPhone} className="text-white w-5 h-5" />
                                                </div>
                                                <div>
                                                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Téléphone</p>
                                                    <p className={isDark ? 'text-white' : 'text-gray-800'}>{phone}</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-civil-amber to-civil-rose flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faEnvelope} className="text-white w-5 h-5" />
                                                </div>
                                                <div>
                                                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Email</p>
                                                    <p className={isDark ? 'text-white' : 'text-gray-800'}>{email}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Statut */}
                                        <div className={`mt-6 p-4 rounded-xl border-l-4 ${
                                            isDark ? 'border-civil-blue bg-gray-800/30' : 'border-civil-teal bg-white/50'
                                        }`}>
                                            <p className={`text-sm font-medium ${isDark ? 'text-civil-blue' : 'text-civil-teal'}`}>
                                                {status}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Description détaillée */}
                                    <div className={`rounded-2xl p-6 ${isDark ? 'bg-gray-800/50' : 'bg-white/50'}`}>
                                        <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                                            À propos
                                        </h3>
                                        <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                            {description}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Colonne droite - Éducation */}
                            <div className="flex-1">
                                <div className={`rounded-2xl p-6 ${isDark ? 'bg-gray-800/50' : 'bg-white/50'}`}>
                                    <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                                        Parcours académique
                                    </h3>

                                    <div className="space-y-6">
                                        {education.map((edu, index) => (
                                            <div key={index} className="relative">
                                                {/* Ligne de timeline */}
                                                {index < education.length - 1 && (
                                                    <div className={`absolute left-6 top-14 w-0.5 h-16 ${
                                                        isDark ? 'bg-gray-600' : 'bg-gray-300'
                                                    }`}></div>
                                                )}

                                                <div className="flex gap-4">
                                                    {/* Icône */}
                                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-civil-blue to-civil-teal flex items-center justify-center">
                                                        <FontAwesomeIcon icon={faGraduationCap} className="text-white w-5 h-5" />
                                                    </div>

                                                    {/* Contenu */}
                                                    <div className="flex-1">
                                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                                            <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                                                                {edu.degree}
                                                            </h4>
                                                            <div className={`flex items-center gap-1 text-sm ${
                                                                isDark ? 'text-gray-400' : 'text-gray-500'
                                                            }`}>
                                                                <FontAwesomeIcon icon={faCalendarAlt} className="w-3 h-3" />
                                                                <span>
                                  {formatDate(edu.startDate)} - {edu.endDate ? formatDate(edu.endDate) : 'Présent'}
                                </span>
                                                                <span className="mx-2">•</span>
                                                                <span>{getDuration(edu.startDate, edu.endDate)}</span>
                                                            </div>
                                                        </div>

                                                        <div className="flex items-center gap-2 mb-3">
                                                            <FontAwesomeIcon
                                                                icon={faUniversity}
                                                                className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
                                                            />
                                                            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                                                {edu.institution}
                                                            </p>
                                                        </div>

                                                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                                            {edu.location}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Statistiques */}
                                    <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
                                        <div className="text-center">
                                            <p className={`text-2xl font-bold ${isDark ? 'text-civil-blue' : 'text-civil-teal'}`}>
                                                {education.length}
                                            </p>
                                            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Diplômes</p>
                                        </div>
                                        <div className="text-center">
                                            <p className={`text-2xl font-bold ${isDark ? 'text-civil-amber' : 'text-civil-rose'}`}>
                                                {new Date().getFullYear() - new Date(education[education.length - 1].startDate).getFullYear() + 1}
                                            </p>
                                            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Années d'études</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Compétences principales en résumé */}
                                <div className={`rounded-2xl p-6 mt-6 ${isDark ? 'bg-gray-800/50' : 'bg-white/50'}`}>
                                    <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                                        Domaines d'expertise
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {['BIM Modeling', 'Structural Design', 'Project Management', 'Sustainable Construction', 'AutoCAD', 'Revit'].map((skill, index) => (
                                            <span
                                                key={index}
                                                className={`px-3 py-2 rounded-lg text-sm font-medium ${
                                                    isDark
                                                        ? 'bg-gray-700 text-gray-300'
                                                        : 'bg-gray-100 text-gray-700'
                                                }`}
                                            >
                        {skill}
                      </span>
                                        ))}
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

export default About;