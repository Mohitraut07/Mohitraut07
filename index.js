document.addEventListener("DOMContentLoaded",function(){
    const mySkills = document.querySelector(".mySkills");
    const projects = Array.from(mySkills.querySelectorAll(".project"));

    projects.sort(function(a,b){
        const dateA = new Date(a.querySelector("small").textContent);
        const dateB = new Date(b.querySelector("small").textContent);

        return (dateB-dateA);
    });

    projects.forEach((project) => mySkills.appendChild(project));
})
