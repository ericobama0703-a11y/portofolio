import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMapMarkerAlt,
    faPhone,
    faEnvelope,
    faPaperPlane,
    faLinkedin,
    faGithub,
    faTwitter,
    faCheckCircle,
    faExclamationCircle
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub as faGithubBrand } from '@fortawesome/free-brands-svg-icons';

const Contact = ({ contact, isDark }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulation d'envoi - À remplacer par votre service d'email
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });

            // Réinitialiser le statut après 5 secondes
            setTimeout(() => setSubmitStatus(null), 5000);
        }, 2000);
    };

    // Réseaux sociaux
    const socialLinks = [
        {
            name: 'LinkedIn',
            url: contact.linkedin,
            icon: faLinkedinIn,
            color: 'hover:bg-blue-600'
        },
        {
            name: 'GitHub',
            url: '#',
            icon: faGithubBrand,
            color: 'hover:bg-gray-800'
        },
        {
            name: 'Email',
            url: `mailto:${contact.email}`,
            icon: faEnvelope,
            color: 'hover:bg-red-500'
        }
    ];

    return (
        <section id="contact" className="min-h-screen pt-20 flex items-center">
            <div className="w-full">
                <div className="container mx-auto px-6">
                    <div className={`glass rounded-3xl p-8 md:p-12 ${isDark ? 'bg-gray-900/30' : 'bg-white/30'} max-w-6xl mx-auto`}>

                        {/* En-tête de section */}
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 bg-gradient-to-br from-civil-blue to-civil-teal bg-clip-text text-transparent">
                                Contact
                            </h2>
                            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                Discutons de votre prochain projet ou opportunité de collaboration
                            </p>
                            <div className="w-24 h-1 bg-gradient-to-r from-civil-blue to-civil-teal rounded-full mx-auto mt-4"></div>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                            {/* Colonne gauche - Informations de contact */}
                            <div className="flex-1">
                                <div className={`rounded-2xl p-6 ${isDark ? 'bg-gray-800/50' : 'bg-white/50'}`}>
                                    <h3 className={`text-2xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                                        Prenons contact
                                    </h3>

                                    {/* Informations de contact */}
                                    <div className="space-y-6 mb-8">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-civil-blue to-civil-teal flex items-center justify-center">
                                                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>
                                                    Localisation
                                                </p>
                                                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                                    {contact.address}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-civil-teal to-civil-amber flex items-center justify-center">
                                                <FontAwesomeIcon icon={faPhone} className="text-white w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>
                                                    Téléphone
                                                </p>
                                                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                                    {contact.phone}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-civil-amber to-civil-rose flex items-center justify-center">
                                                <FontAwesomeIcon icon={faEnvelope} className="text-white w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>
                                                    Email
                                                </p>
                                                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                                    {contact.email}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Réseaux sociaux */}
                                    <div>
                                        <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                                            Suivez-moi
                                        </h4>
                                        <div className="flex gap-4">
                                            {socialLinks.map((social, index) => (
                                                <a
                                                    key={index}
                                                    href={social.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                                                        isDark
                                                            ? 'bg-gray-700 text-gray-300 hover:text-white'
                                                            : 'bg-gray-200 text-gray-600 hover:text-white'
                                                    } ${social.color}`}
                                                >
                                                    <FontAwesomeIcon icon={social.icon} className="w-5 h-5" />
                                                </a>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Disponibilité */}
                                    <div className={`mt-8 p-4 rounded-xl border-l-4 ${
                                        isDark ? 'border-civil-blue bg-gray-800/30' : 'border-civil-teal bg-white/50'
                                    }`}>
                                        <p className={`text-sm ${isDark ? 'text-civil-blue' : 'text-civil-teal'}`}>
                                            💼 Disponible pour des opportunités de stage à partir de juin 2024
                                        </p>
                                    </div>
                                </div>

                                {/* Carte de localisation */}
                                <div className={`rounded-2xl p-6 mt-6 ${isDark ? 'bg-gray-800/50' : 'bg-white/50'}`}>
                                    <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                                        Localisation
                                    </h4>
                                    <div className="aspect-video rounded-xl bg-gradient-to-br from-civil-blue to-civil-teal flex items-center justify-center">
                                        <div className="text-center text-white">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-4xl mb-2 opacity-70" />
                                            <p className="font-semibold">Dijon, France</p>
                                            <p className="text-sm opacity-80">Mobilité nationale</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Colonne droite - Formulaire de contact */}
                            <div className="flex-1">
                                <div className={`rounded-2xl p-6 ${isDark ? 'bg-gray-800/50' : 'bg-white/50'}`}>
                                    <h3 className={`text-2xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                                        Envoyez un message
                                    </h3>

                                    {/* Statut de soumission */}
                                    {submitStatus === 'success' && (
                                        <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
                                            isDark ? 'bg-green-900/30 border border-green-800' : 'bg-green-100 border border-green-200'
                                        }`}>
                                            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 w-5 h-5" />
                                            <div>
                                                <p className={`font-medium ${isDark ? 'text-green-400' : 'text-green-800'}`}>
                                                    Message envoyé avec succès !
                                                </p>
                                                <p className={`text-sm ${isDark ? 'text-green-300' : 'text-green-600'}`}>
                                                    Je vous répondrai dans les plus brefs délais.
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Nom */}
                                            <div>
                                                <label
                                                    htmlFor="name"
                                                    className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                                                >
                                                    Votre nom
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${
                                                        isDark
                                                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-civil-blue focus:ring-2 focus:ring-civil-blue/20'
                                                            : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500 focus:border-civil-teal focus:ring-2 focus:ring-civil-teal/20'
                                                    }`}
                                                    placeholder="Votre nom complet"
                                                />
                                            </div>

                                            {/* Email */}
                                            <div>
                                                <label
                                                    htmlFor="email"
                                                    className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                                                >
                                                    Votre email
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${
                                                        isDark
                                                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-civil-blue focus:ring-2 focus:ring-civil-blue/20'
                                                            : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500 focus:border-civil-teal focus:ring-2 focus:ring-civil-teal/20'
                                                    }`}
                                                    placeholder="votre@email.com"
                                                />
                                            </div>
                                        </div>

                                        {/* Sujet */}
                                        <div>
                                            <label
                                                htmlFor="subject"
                                                className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                                            >
                                                Sujet
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${
                                                    isDark
                                                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-civil-blue focus:ring-2 focus:ring-civil-blue/20'
                                                        : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500 focus:border-civil-teal focus:ring-2 focus:ring-civil-teal/20'
                                                }`}
                                                placeholder="Objet de votre message"
                                            />
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label
                                                htmlFor="message"
                                                className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                                            >
                                                Votre message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={6}
                                                className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 resize-none ${
                                                    isDark
                                                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-civil-blue focus:ring-2 focus:ring-civil-blue/20'
                                                        : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500 focus:border-civil-teal focus:ring-2 focus:ring-civil-teal/20'
                                                }`}
                                                placeholder="Décrivez votre projet ou votre demande..."
                                            />
                                        </div>

                                        {/* Bouton d'envoi */}
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 ${
                                                isSubmitting
                                                    ? 'bg-gray-400 cursor-not-allowed'
                                                    : 'bg-gradient-to-br from-civil-blue to-civil-teal hover:from-civil-teal hover:to-civil-blue transform hover:scale-105'
                                            } text-white shadow-lg`}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                    Envoi en cours...
                                                </>
                                            ) : (
                                                <>
                                                    <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4" />
                                                    Envoyer le message
                                                </>
                                            )}
                                        </button>

                                        {/* Note */}
                                        <p className={`text-center text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                            Je m'engage à vous répondre dans les 24 heures
                                        </p>
                                    </form>
                                </div>

                                {/* Call to Action */}
                                <div className={`rounded-2xl p-6 mt-6 text-center ${
                                    isDark ? 'bg-gray-800/50' : 'bg-white/50'
                                }`}>
                                    <h4 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                                        Prêt à collaborer ?
                                    </h4>
                                    <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                        Discutons de votre projet de génie civil ou de développement durable
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                        <a
                                            href={`mailto:${contact.email}`}
                                            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                                                isDark
                                                    ? 'bg-civil-blue text-white hover:bg-civil-teal'
                                                    : 'bg-civil-teal text-white hover:bg-civil-blue'
                                            }`}
                                        >
                                            Me contacter
                                        </a>
                                        <a
                                            href={contact.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${
                                                isDark
                                                    ? 'border-civil-blue text-civil-blue hover:bg-civil-blue hover:text-white'
                                                    : 'border-civil-teal text-civil-teal hover:bg-civil-teal hover:text-white'
                                            }`}
                                        >
                                            LinkedIn
                                        </a>
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

export default Contact;