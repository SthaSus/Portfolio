import React, { useEffect, useState } from "react";
import "./Projects.css";
import { Building, Calendar, Github } from "lucide-react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch projects from MockAPI
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://68c926a2ceef5a150f639897.mockapi.io/projects"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <p className="text-center">Loading projects...</p>;
  }

  return (
    <div>
      <section id="projects">
        <div className="container">
          <h2 className="section-title text-center cta-title">Featured Projects</h2>

<div className="projects-grid">
          {projects.length > 0 ? (
            projects.map((project) => (
              <div className="project-card" key={project.id}>
                {/* Project Image/Icon */}
                <div className="project-image">
                  <div className="project-icon">🚀</div>
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <span>VIEW PROJECT</span>
                    </div>
                  </div>
                  {/* Corner decorations */}
                  <div className="corner-tl"></div>
                  <div className="corner-tr"></div>
                  <div className="corner-bl"></div>
                  <div className="corner-br"></div>
                </div>

                {/* Project Content */}
                <div className="project-content">
                  <h3 className="project-title">{project.name}</h3>
                  <p className="project-description">{project.description}</p>

                  {/* Project Tags */}
                  <div className="project-tags">
                    <span className="project-tag company">
                      <Building size={14} />
                      {project.companyName}
                    </span>
                    <span className="project-tag duration">
                      <Calendar size={14} />
                      {project.timeDuration}
                    </span>
                    {project.tag && (
                      <span className="project-tag category">
                        {project.tag}
                      </span>
                    )}
                  </div>

                  {/* Project Links */}
                  <div className="project-links">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-button"
                    >
                      <Github size={18} />
                      <span>GitHub</span>
                    </a>
                  </div>

                  {/* Scanning line effect */}
                  <div className="scan-line"></div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-projects">
              <div className="no-projects-icon">🚫</div>
              <p>No projects found</p>
            </div>
          )}
        </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
