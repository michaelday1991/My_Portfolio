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
                <a href='${project.url}' target=_blank> Check the GitHub Link </a> 
                </div>`;
        });
})
.catch(error => console.error('Error fetching data:', error));