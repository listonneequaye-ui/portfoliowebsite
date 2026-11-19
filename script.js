//variables
let projectCount = 0;

// Project Data
const projects = [
 {name:"Logo Design", type:"design", image:"assets/photo1.jpg"},
 
 {name:"UI Design", type:"design", image:"assets/photo2.jpg"},
 
 {name:"Poster Design", type:"design", image:"assets/photo3.jpg"},
 
 {name:"Magazine Design", type:"design", image:"assets/photo4.jpg"},
 
 {name:"Photography 1", type:"photo", image:"assets/photo5.jpg"},
 
 {name:"Photography 2", type:"photo", image:"assets/photo6.jpg"},

 {name:"Photography 3", type:"photo", image:"assets/photo7.jpg"},
 
 {name:"Photography 4", type:"photo", image:"assets/photo8.jpg"}
];



// Button
function showMessage() {
    document.getElementById("message").innerHTML =
    "Welcome to my creative portfolio!";
}




// Projects
function showProjects(category) {

    let gallery = document.getElementById("gallery");

    gallery.innerHTML = "";

    let filtered = projects.filter(function(project) {
        return category === "all" || project.type === category;
    });

    filtered.forEach(function(project) {

        gallery.innerHTML += `
        <div class="card">
            <img src="${project.image}">
            <h3>${project.name}</h3>
        </div>
        `;

    });



    // Tracking Data
    projectCount = filtered.length;

    document.getElementById("count").innerHTML =
    "Projects displayed: " + projectCount;
}





// AJAX
fetch("projects.json")
.then(response => response.json())
.then(data => {
    console.log("Projects loaded:", data);
})
.catch(error => console.log(error));





// Display All Projects
showProjects("all");






