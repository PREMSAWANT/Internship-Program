import { Link } from 'react-router-dom';
import './Home.css';

/**
 * Home Page - Portfolio Landing Page
 * Main entry point showing all 4 projects
 */
function Home() {
  const projects = [
    {
      number: "01",
      title: "Real-Time Chat Application",
      description: "Full-stack MERN chat app with real-time messaging, user authentication, online status tracking, and typing indicators. Features modern dark glassmorphism UI.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Socket.IO", "JWT"],
      status: "Complete",
      link: "/chat"
    },
    {
      number: "02",
      title: "Weather Application",
      description: "React-based weather app with real-time data from OpenWeatherMap API. Features 3D-style weather cards, search history, and comprehensive weather information.",
      tech: ["React", "Vite", "OpenWeatherMap API", "CSS3"],
      status: "Complete",
      link: "/weather"
    },
    {
      number: "03",
      title: "Real-Time Collaboration Tool",
      description: "Multi-user collaborative text editor with real-time synchronization, user presence detection, and conflict-free updates. IDE-like dark theme interface.",
      tech: ["React", "Node.js", "Socket.IO", "WebSocket"],
      status: "Complete",
      link: "/collab"
    },
    {
      number: "04",
      title: "Chrome Productivity Extension",
      description: "Browser extension for automatic website time tracking with daily statistics, dark mode UI, and local data storage. Built with Chrome Extension Manifest V3.",
      tech: ["Chrome Extension API", "Manifest V3", "JavaScript", "Local Storage"],
      status: "Complete",
      link: "/extension"
    }
  ];

  return (
    <div className="home">
      {/* Background Animation */}
      <div className="bg-animation">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="container">
        {/* Hero Section */}
        <header className="hero">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Portfolio 2025
          </div>
          <h1 className="hero-title">
            Internship Program
            <span className="gradient-text"> Projects</span>
          </h1>
          <p className="hero-subtitle">
            A collection of 4 production-ready full-stack applications showcasing expertise in modern web development, real-time technologies, and Chrome extensions.
          </p>
          <div className="hero-meta">
            <div className="meta-item">
              <span className="meta-label">Author:</span>
              <span className="meta-value">Prem Sawant</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Status:</span>
              <span className="meta-value status-complete">4/4 Complete</span>
            </div>
          </div>
        </header>

        {/* Projects Section */}
        <section className="projects-section">
          <h2 className="section-title">Featured Projects</h2>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="project-header">
                  <span className="project-number">TASK {project.number}</span>
                  <span className="project-status">✓ {project.status}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  <span className="tech-label">Tech Stack</span>
                  <div className="tech-tags">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="project-footer">
                  <Link to={project.link} className="btn btn-primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                    Launch Project
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="tech-stack-section">
          <h2 className="section-title">Technologies Used</h2>
          <div className="tech-stack-grid">
            <div className="tech-category">
              <h3>Frontend</h3>
              <div className="tech-tags">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Vite</span>
                <span className="tech-tag">HTML5</span>
                <span className="tech-tag">CSS3</span>
                <span className="tech-tag">JavaScript</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>Backend</h3>
              <div className="tech-tags">
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">Express.js</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">Mongoose</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>Real-time</h3>
              <div className="tech-tags">
                <span className="tech-tag">Socket.IO</span>
                <span className="tech-tag">WebSocket</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>Authentication</h3>
              <div className="tech-tags">
                <span className="tech-tag">JWT</span>
                <span className="tech-tag">bcrypt</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-left">
              <h3>Prem Sawant</h3>
              <p>Full-Stack Developer | MERN Stack Specialist</p>
            </div>
            <div className="footer-right">
              <a href="https://github.com/PREMSAWANT" target="_blank" rel="noopener noreferrer" className="footer-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a href="mailto:premsawant600@gmail.com" className="footer-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Email
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Prem Sawant. Created for educational and internship evaluation purposes.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
