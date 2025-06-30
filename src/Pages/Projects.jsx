import React from "react";


function Projects() {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>

      <div className="project-item">
        <h2>Infant Monitoring System using Smart IoT Belt</h2>
        <p>
          For my final year project, I developed an innovative <span className="highlight">Infant Monitoring System</span> using a smart IoT-enabled belt.
        </p>

        <p>
          The main objective of this project was to ensure continuous and real-time health monitoring for infants, especially in neonatal care units or home settings.
        </p>

        <p>
          The smart belt is embedded with sensors that track vital health parameters such as:
        </p>

        <ul>
          <li><strong>Respiration Rate</strong> – To detect any breathing irregularities.</li>
          <li><strong>Heartbeat Rate</strong> – To monitor the infant's pulse for any abnormalities.</li>
          <li><strong>Body Temperature</strong> – To track fever or hypothermia conditions.</li>
        </ul>

        <p>
          For real-time data collection and transmission, I used the <span className="highlight">ESP32 Microcontroller</span>. The ESP32 offered built-in Wi-Fi and Bluetooth modules, making it ideal for IoT-based health monitoring.
        </p>

        <p>
          The collected data was displayed on a web dashboard and mobile notifications were triggered in case of critical changes in the infant's vitals.
        </p>

        <p className="tagline">This project enhanced my skills in IoT hardware, sensor integration, and real-time health monitoring systems. 🚀</p>
      </div>
    </div>
  );
}

export default Projects;
