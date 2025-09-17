import React from 'react';
import {  Atom, Database, Cloud, Server, Zap, Leaf, Anchor, Flame, Layers, GitBranch, FileCode2, Send, Image, Palette, Monitor, Smartphone, Cpu, Globe, Settings, Github } from 'lucide-react';
import './Skills.css'
import { SiCanva, SiPython, SiTailwindcss, SiVite, SiXampp } from 'react-icons/si';
import { DiDjango } from 'react-icons/di';
import { VscVscode } from 'react-icons/vsc';
import { FiFigma } from 'react-icons/fi';
import { BsBootstrap } from 'react-icons/bs';

const Skills = () => {
  const allSkills = [
    // Frontend
    { name: "JavaScript", icon: <div className="yellow">JS</div>, color: "yellow" },
    { name: "React", icon: <Atom size={32} />, color: "cyan" },
    { name: "TypeScript", icon: <div className="blue">TS</div>, color: "blue" },
    { name: "HTML5", icon: <div className="orange">H5</div>, color: "orange" },
    { name: "CSS", icon: <div className="blue">CSS</div>, color: "blue" },
    { name: "Next.js", icon: <div className="white">N</div>, color: "white" },
    { name: "Vite.js", icon: <div className="yellow"><SiVite/></div>, color: "yellow" },
    { name: "Tailwind", icon: <div className="cyan"><SiTailwindcss/></div>, color: "cyan" },
    { name: "Bootstrap", icon: <div className="cyan"><BsBootstrap/></div>, color: "cyan" },

    //  Backend
    { name: "Python", icon: <div className="green"><SiPython/></div>, color: "green" },
    { name: "Django", icon: <div className="green"><DiDjango/></div>, color: "green" },

    //  Database & Cloud
    { name: "MySQL", icon: <Database size={32} />, color: "orange" },

    // Tools & Design
    { name: "Figma", icon: <FiFigma size={32} />, color: "purple" },
    { name: "Canva", icon: <SiCanva size={32} />, color: "blue" },
    { name: "XAMPP", icon: <SiXampp size={32} />, color: "orange" },
    { name: "Git", icon: <GitBranch size={32} />, color: "orange" },
    { name: "GitHub", icon: <div className="  black"><Github/></div>, color: "black" },
    { name: "VS Code", icon: <VscVscode size={32} />, color: "blue" },
  ];

  // Split skills into rows of 7
  const skillRows = [];
  for (let i = 0; i < allSkills.length; i += 7) {
    skillRows.push(allSkills.slice(i, i + 7));
  }

  return (
<div className="skills-container" id='skills'>
      <div className="skills-content">
        {/* Header */}
        <div className="skills-header">
          <h1 className="cta-title section-title">Skills And Technologies</h1>    
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          <div className="skills-flex-container">
            {allSkills.map((skill, skillIndex) => (
              <div key={skillIndex} className="skill-card-wrapper">
                <div className={`skill-card ${skill.color}`}>
                  {/* Corner decorations */}
                  <div className="corner-tl"></div>
                  <div className="corner-tr"></div>
                  <div className="corner-bl"></div>
                  <div className="corner-br"></div>
                  
                  {/* Icon */}
                  <div className="skill-icon">
                    {skill.icon}
                  </div>
                  
                  {/* Name */}
                  <div className="skill-name">
                    {skill.name.toUpperCase()}
                  </div>
                  
                  {/* Scanning line effect */}
                  <div className="scan-line"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      </div>
  );
};

export default Skills;