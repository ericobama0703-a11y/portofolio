import React, { useState, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

import portfolioData from './data/portfolio-data.json';

library.add(fas, fab);

function App() {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const handleThemeChange = (event) => {
            setIsDark(event.detail);
        };

        window.addEventListener('themeChange', handleThemeChange);

        return () => {
            window.removeEventListener('themeChange', handleThemeChange);
        };
    }, []);

    const themeClass = isDark
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
        : 'bg-gradient-to-br from-blue-50 via-gray-50 to-cyan-50';

    return (
        <div className={`min-h-screen transition-all duration-500 ${themeClass}`}>
            <Header />

            <main>
                <Hero personalInfo={portfolioData.personalInfo} isDark={isDark} />
                <About personalInfo={portfolioData.personalInfo} education={portfolioData.education} isDark={isDark} />
                <Skills skills={portfolioData.skills} languages={portfolioData.languages} isDark={isDark} />
                <Experience experience={portfolioData.experience} isDark={isDark} />
                <Projects projects={portfolioData.projects} isDark={isDark} />
                <Contact contact={portfolioData.contact} isDark={isDark} />
            </main>

            <Footer isDark={isDark} />
        </div>
    );
}

export default App;