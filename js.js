fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const container = document.querySelector("#project-container");
        
        data.projects.forEach(project => {
            container.innerHTML += `
            <div class= 'project'>
                <h3>${project.name}</h3>
                <img src='${project.img}' alt="Picture of a website" />
                <p class= 'Description'>${project.desc}</p>
                </div>`;
        });
})
.catch(error => console.error('Error fetching data:', error));