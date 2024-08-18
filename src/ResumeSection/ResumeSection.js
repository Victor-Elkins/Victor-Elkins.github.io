import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ResumeSection = () => {
  return (
    <div className="container">
      <h1>Victor Elkins</h1>
      <p>
        (281) 323-5559 | <a href="mailto:victor.r.elkins@gmail.com">victor.r.elkins@gmail.com</a> |  
        <a href="https://www.linkedin.com/in/victor-elkins-ab5058198/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a> | 
        <a href="https://github.com/victor-elkins" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </p>

      <h2>Education</h2>
      <p><strong>University of Houston</strong> Graduation Date: Dec 2024<br />
      Bachelor of Science, Computer Science (3.5/4.0 GPA)</p>
      
      <p><strong>Houston Community College</strong> Graduated: Dec 2022<br />
      Associate of Science, Computer Science</p>
      
      <h2>Work Experience</h2>
      <h3>ExxonMobil - Software Engineer Intern</h3>
      <p>May 2024 – August 2024</p>
      <p>
        Developed an API generator on the company's UDO Platform using Snowflake, DreamFactory, Go, Python, Kubernetes, Docker, and Azure VMs on Linux/Ubuntu, hosted on OpenShift, boosting API creation efficiency by 90%.<br />
        Integrated Azure Key Vault for security and OAuth, along with integrated SSO, implementing business rules and general security.<br />
        Automated deployment pipelines with Apache Airflow, integrating security, validation, and monitoring using DataDog, Git, and GitHub. Implemented Agile methodology on the UDO platform to optimize IT infrastructure and enhance system performance for the UDO team.<br />
        Revamped the company's ticketing system with Vue.js and Tailwind CSS, automating ADO board item creation for customers. Implemented JavaScript for dynamic features, used Tailwind CSS for modern design, and integrated automatic email receipts for ticket transactions using Node.js, utilized Azure hosting and SSO with OAuth.
      </p>
      
      <h3>Dycom Industries - Software Engineer Intern</h3>
      <p>June 2023 – August 2023</p>
      <p>
        Developed a large-scale decision tree linter in Python, integrating it into the CI/CD pipeline in GitLab, an Angular frontend, and a Visual Studio Code extension with Java.<br />
        Collaborated with interns to deliver a timely final product, using GitLab for version control and Jenkins for CI/CD, managing appointments, conducting code reviews, and fostering a productive team environment.<br />
        Improved decision tree quality, saving Dycom Industries hundreds of development hours towards review.
      </p>
      
      <h3>Vertical AIT - Software Engineer Intern</h3>
      <p>Feb 2023 – June 2023</p>
      <p>
        Designed and implemented internal tools including dotnet, jQuery, Bootstrap, and Azure DevOps.<br />
        Managed the coordination and task assignments among the small team, ensuring consistent code reviews and on-time deliverables.<br />
        Integrated a backend image modeling system with a UI for use in an industrial setting, reducing tracking time by 95%.
      </p>
      
      <h2>Project Experience</h2>
      <h3>Cougar CS Revamp Web Development Committee</h3>
      <p>Jan 2023 – Present</p>
      <p>
        Collaborated in the overhaul of the CougarCS website, utilizing Next.js, React, and Tailwind CSS.<br />
        Led meetings and managed a team of interns, focusing on general DevOps tasks, feature management, and project collaboration using GitHub and Git. Created and maintained the general architecture of the project.
      </p>
      
      <h3>K-hack 2024 - Molecular Structure Optimization</h3>
      <p>Jan 2024 – May 2024</p>
      <p>
        Implemented machine learning techniques like Gaussian Process Regression to obtain stable molecular structures for industrial applications in Jupyter Labs.<br />
        Engineered a high-performance, lightweight web application using Node.js, React, and jQuery, showcasing advanced project functionalities and delivering an intuitive user experience for demonstration purposes.
      </p>
      
      <h3>Student Planner API</h3>
      <p>Jan 2023 – August 2023</p>
      <p>
        Implemented a comprehensive CRUD system using the ASP.NET Framework, including a RESTful API with Swagger UI, to create a planner for managing crucial assignments and deadlines.<br />
        Integrated an SQL Database to ensure seamless and secure data storage within the planner.
      </p>
      
      <h3>Multithreaded Web Server</h3>
      <p>Jan 2023 – May 2023</p>
      <p>
        Developed a multithreaded web server in Rust, leveraging async/await for efficient HTTP request handling.<br />
        Implemented concurrency features to manage multiple client connections concurrently, ensuring robust performance and scalability.
      </p>
      
      <h3>Medical Bill Uploading Service</h3>
      <p>Oct 2022 – Dec 2022</p>
      <p>
        Developed a Node.js and Express-based RESTful API for uploading and managing medical bills.<br />
        Implemented automated testing with Chai and Mocha to ensure API functionality and reliability.
      </p>
      
      <h2>Skills</h2>
      <p>
        <strong>Languages:</strong> C#, C++, Java, JavaScript/TypeScript, Python, Rust, R, HTML/CSS, SQL, PHP, Go, SQL<br />
        <strong>Tools & Frameworks:</strong> Dotnet, ReactJS, Next JS, Express, Pandas, NumPy, jQuery, Azure, Snowflake, Java Spring/Spring Boot, AWS
      </p>
      
      
    </div>
  );
}

export default ResumeSection;
