fetch('data.json')
.then(response => response.json())
.then(date => {
    const container = document.querySelector("project-container");
    console.log(container)
})
