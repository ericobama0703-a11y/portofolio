import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faExternalLinkAlt,
  faDownload,
  faFolder,
  faCalendarAlt,
  faTag,
  faCode,
  faTimes,
  faArrowLeft,
  faArrowRight,
  faImage
} from '@fortawesome/free-solid-svg-icons';

const Projects = ({ projects, isDark }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  // Filtrage des projets
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => 
        project.category.toLowerCase().includes(filter.toLowerCase())
      );

  // Catégories uniques pour les filtres
  const categories = ['all', ...new Set(projects.map(project => project.category))];

  // Ouvrir la modal de projet
  const openProjectModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Empêcher le scroll
  };

  // Fermer la modal
  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; // Rétablir le scroll
  };

  // Navigation entre projets
  const navigateProject = (direction) => {
    if (!selectedProject) return;
    
    const currentIndex = projects.findIndex(p => p.name === selectedProject.name);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % projects.length;
    } else {
      newIndex = (currentIndex - 1 + projects.length) % projects.length;
    }
    
    setSelectedProject(projects[newIndex]);
  };

  // Formater la date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
  };

  return (
    <section id="projects" className="min-h-screen pt-20 flex items-center">
      <div className="w-full">
        <div className="container mx-auto px-6">
          <div className={glass rounded-3xl p-8 md:p-12 ${isDark ? 'bg-gray-900/30' : 'bg-white/30'} max-w-6xl mx-auto}>
            
            {/* En-tête de section */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 bg-gradient-to-br from-civil-blue to-civil-teal bg-clip-text text-transparent">
                Mes Projets
              </h2>
              <p className={text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-500'}}>
                Découvrez mes réalisations en génie civil, BIM et gestion de projets
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-civil-blue to-civil-teal rounded-full mx-auto mt-4"></div>
            </div>

            {/* Filtres */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === category
                      ? 'bg-gradient-to-r from-civil-blue to-civil-teal text-white shadow-lg'
                      : isDark
                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                >
                  {category === 'all' ? 'Tous les projets' : category}
                </button>
              ))}
            </div>

            {/* Grille de projets */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className={`rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer project-card ${
                    isDark ? 'bg-gray-800/50' : 'bg-white/50'
                  } shadow-lg`}
                  onClick={() => openProjectModal(project)}
                >
                  {/* Image du projet - Version corrigée */}
                  <div className="relative h-48 overflow-hidden">
                    {project.image ? (
                      // Si une image est disponible
                      <img 
                        src={project.image} 
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    ) : (
                      // Sinon, placeholder avec dégradé
                      <div className="w-full h-full bg-gradient-to-br from-civil-blue to-civil-teal flex items-center justify-center">
                        <div className="text-center text-white">
                          <FontAwesomeIcon 
                            icon={faImage} 
                            className="text-4xl mb-2 opacity-70" 
                          />
                          <p className="text-sm font-medium">Image non disponible</p>
                        </div>
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        isDark ? 'bg-gray-900/80 text-white' : 'bg-white/90 text-gray-800'
                      }`}>
                        {project.category}
                      </span>
                    </div>
                    {/* Overlay au survol */}
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <FontAwesomeIcon 
                          icon={faExternalLinkAlt} 
                          className="text-white text-2xl" 
                        />
                      </div>
                    </div>
                  </div>

                  {/* Contenu du projet */}
                  <div className="p-6">
                    <h3 className={text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-800'}}>
                      {project.name}
                    </h3>
                    
                    <p className={text-sm mb-4 line-clamp-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}}>
                      {project.description}
                    </p>

                    {/* Technologies utilisées */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-2 py-1 rounded text-xs ${
                            isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className={`px-2 py-1 rounded text-xs ${
                          isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600'
                        }`}>
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Date et fichiers */}
                    <div className="flex items-center justify-between text-xs">
                      <div className={flex items-center gap-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}}>
                        <FontAwesomeIcon icon={faCalendarAlt} className="w-3 h-3" />
                        <span>{formatDate(project.startDate)}</span>
                      </div>
                      <div className={flex items-center gap-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}}>
                        <FontAwesomeIcon icon={faDownload} className="w-3 h-3" />
                        <span>{project.downloadableFiles.length} fichiers</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message si aucun projet */}
            {filteredProjects.length === 0 && (
              <div className={text-center py-12 ${isDark ? 'text-gray-400' : 'text-gray-500'}}>
                <FontAwesomeIcon icon={faFolder} className="text-4xl mb-4 opacity-50" />
                <p>Aucun projet trouvé dans cette catégorie</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal de détail du projet */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div 
            className={`relative rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto ${
              isDark ? 'bg-gray-900' : 'bg-white'
            } shadow-2xl`}
          >
            {/* En-tête de la modal */}
            <div className="sticky top-0 z-10 p-6 border-b bg-inherit rounded-t-3xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    onClick={closeProjectModal}
                    className={`p-2 rounded-lg transition-colors ${
                      isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-200'
                    }`}
                  >
                    <FontAwesomeIcon 
                      icon={faTimes} 
                      className={w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}} 
                    />
                  </button>
                  <h3 className={text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}}>
                    {selectedProject.name}
                  </h3>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => navigateProject('prev')}
                    className={`p-2 rounded-lg transition-colors ${
                      isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-200'
                    }`}
                  >
                    <FontAwesomeIcon 
                      icon={faArrowLeft} 
                      className={w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}} 
                    />
                  </button>
                  <button
                    onClick={() => navigateProject('next')}
                    className={`p-2 rounded-lg transition-colors ${
                      isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-200'
                    }`}
                  >
                    <FontAwesomeIcon 
                      icon={faArrowRight} 
                      className={w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}} 
                    />
                  </button>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 mt-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  isDark ? 'bg-civil-blue/20 text-civil-blue' : 'bg-civil-teal/20 text-civil-teal'
                }`}>
                  {selectedProject.category}
                </span>
                <div className={flex items-center gap-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}}>
                  <FontAwesomeIcon icon={faCalendarAlt} className="w-4 h-4" />
                  <span>
                    {formatDate(selectedProject.startDate)} - {formatDate(selectedProject.endDate)}
                  </span>
                </div>
              </div>
            </div>

            {/* Contenu de la modal */}
            <div className="p-6 space-y-6">
              {/* Image du projet dans la modal */}
              <div className="rounded-xl overflow-hidden">
                {selectedProject.image ? (
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.name}
                    className="w-full h-64 object-cover"
                  />
                ) : (
                  <div className="w-full h-64 bg-gradient-to-br from-civil-blue to-civil-teal flex items-center justify-center">
                    <div className="text-center text-white">
                      <FontAwesomeIcon icon={faImage} className="text-6xl mb-4 opacity-50" />
                      <p className="text-lg font-medium">Image non disponible</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Description */}
              <div>
                <h4 className={text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-800'}}>
                  Description
                </h4>
                <p className={leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}}>
                  {selectedProject.description}
                </p>
              </div>

              {/* Tâches réalisées */}
              <div>
                <h4 className={text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-800'}}>
                  Tâches réalisées
                </h4>
                <ul className={space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}}>
                  {selectedProject.tasks.map((task, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                        isDark ? 'bg-civil-blue' : 'bg-civil-teal'
                      }`}></div>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies utilisées */}
              <div>
                <h4 className={text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-800'}}>
                  <FontAwesomeIcon icon={faCode} className="w-4 h-4 mr-2" />
                  Technologies utilisées
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-2 rounded-lg text-sm font-medium ${
                        isDark 
                          ? 'bg-gray-800 text-gray-300' 
                          : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Fichiers téléchargeables */}
              <div>
                <h4 className={text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-800'}}>
                  <FontAwesomeIcon icon={faDownload} className="w-4 h-4 mr-2" />
                  Documents associés
                </h4>
                <div className="grid gap-3">
                  {selectedProject.downloadableFiles.map((file, index) => (
                    <a
                      key={index}
                      href={file.url}
                      download
                      className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                        isDark 
                          ? 'bg-gray-800 hover:bg-gray-700' 
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <FontAwesomeIcon 
                          icon={faDownload} 
                          className={`w-5 h-5 ${
                            isDark ? 'text-civil-blue' : 'text-civil-teal'
                          }`} 
                        />
                        <div>
                          <p className={font-medium ${isDark ? 'text-white' : 'text-gray-800'}}>
                            {file.name}
                          </p>
                          <p className={text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}}>
                            {file.type.toUpperCase()} • Télécharger
                          </p>
                        </div>
                      </div>
                      <FontAwesomeIcon 
                        icon={faExternalLinkAlt} 
                        className={w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}} 
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;