const containerSkills = document.querySelector('.container_skills');
const projects = document.querySelector('.projects_container');

let observerSkills = new IntersectionObserver(isVisible,{ });
let observerProjects = new IntersectionObserver(isVisible,{ });

function isVisible(entries) {
   let entry = entries[0];
   if(entry.isIntersecting) {
      entry.target.classList.add('active');
   }else {
      entry.target.classList.remove('active');
   }
}

observerSkills.observe(containerSkills);
observerProjects.observe(projects);