const projects = [
    {
        title : "Weather App",
        link : "https://github.com/Poornimait/Weather-App",
        description : "A sleek weather app that provides real-time forecasts with a user-friendly interface, delivering accurate weather information at your fingertips.",
        technologies: "html css javascript"
    },
    {
        title : "React Calculator",
        link : "https://github.com/Poornimait/React-Calculator",
        description : "A functional calculator built with React, offering a seamless and intuitive user experience. It efficiently handles basic arithmetic operations with a clean and responsive design.",
        technologies: "react"
    },
    {
        title : "Blinkit Clone",
        link : "https://github.com/Poornimait/blinkit_clone",
        description : "A feature-rich clone of the Blinkit app, replicating the functionality of an online grocery delivery service with a modern interface and dynamic user experience.",
        technologies: "html css"
    },
    {
        title : "Spotify clone",
        link : "https://github.com/Poornimait/spotify-clone",
        description : "A captivating clone of Spotify, offering a responsive interface for music streaming. Users can explore playlists, manage songs, and enjoy an immersive audio experience.",
        technologies: "html css"
    }
];


function renderProjects() {
    const container = document.getElementById("project-container");


    projects.forEach((project) => {
        const projectBox = document.createElement('div');
        projectBox.className = 'project-box';

        const fileIcon = document.createElement('i');
        fileIcon.className = "fa-regular fa-folder-closed";
        fileIcon.style.color = '#64FFDA';

        const gitIcon = document.createElement('i');
        gitIcon.className = "fa-brands fa-github";

        const iconHolder = document.createElement('div');
        iconHolder.className = "project-icon-holder";
        iconHolder.appendChild(fileIcon);
        iconHolder.appendChild(gitIcon);

        const projectTitle = document.createElement('div');
        projectTitle.className = 'project-title';
        projectTitle.textContent = project.title;
        
        const projectDescription = document.createElement('div');
        projectDescription.className = 'project-description';
        projectDescription.textContent = project.description;

        const projectSkills = document.createElement('div');
        projectSkills.className = 'project-skills';
        projectSkills.textContent = project.technologies;

        projectBox.appendChild(iconHolder);
        projectBox.appendChild(projectTitle);
        projectBox.appendChild(projectDescription);
        projectBox.appendChild(projectSkills);

        projectBox.onclick = function() {
            window.open(project.link, "_blank");
        };

        container.appendChild(projectBox);

    })  
}


window.onload = renderProjects;