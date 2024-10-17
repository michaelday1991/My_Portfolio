fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const container = document.querySelector("#project-container");
        
        data.projects.forEach(project => {
            container.innerHTML += `
            <div class= 'project'>
                <br></br>
                <h3 class= 'text-2xl underline font-medium'>${project.name}</h3>
                <br></br>
                <img src='${project.img}' alt="Picture of a website" />
                <br></br>
                <p class= 'Description'>${project.desc}</p>
                <br></br>
                <a class='text-red-500' href='${project.url}' target=_blank> Check the GitHub Link </a> 
                </div>`;
        });
})
