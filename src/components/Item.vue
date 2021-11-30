<template>
    <div>
        <section>
            <b-dropdown id="sortBy" class="mx-1">
            <b-dropdown-item @click="sortByDate()">Sort By date</b-dropdown-item>
            <b-dropdown-item @click="sortByName()">Sort By Alphabetically</b-dropdown-item>
            </b-dropdown>
            <b-dropdown id="sortBy" class="mx-1" right text="Sort Project By Category">
            <b-dropdown-item @click="showAll()">All</b-dropdown-item>
            <b-dropdown-item @click="sortByKind('Planes')">Planes</b-dropdown-item>
            <b-dropdown-item @click="sortByKind('Robots')">Robots</b-dropdown-item>
            <b-dropdown-item @click="sortByKind('IOT')">IOT</b-dropdown-item>
            <b-dropdown-item @click="sortByKind('3D Design')">3D Design</b-dropdown-item>
            <b-dropdown-item @click="sortByKind('Software')">Software</b-dropdown-item>
            <b-dropdown-item @click="sortByKind('AI')">AI</b-dropdown-item>
            </b-dropdown>
        </section>
        <li class="projects_item_container" id="projects"></li>
    </div>
</template>
<style scoped>
.projects_item_container{
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-row-gap: 20px;
  justify-content: center;
  border: 5%;
  margin-top: 8%;
  margin-bottom: 5%;
}
#sortBy{
    justify-self: flex-start;
}
#projects_item{
    background-color: blue;
}
@media only screen and (max-width: 1200px) {
    .projects_item_container{
        grid-template-columns: 1fr;
        justify-content: center;
        grid-row-gap: 20px;
    }
}
</style>
<script>
    class Item {
        constructor(image, description, date, category, title) {
        this.image = image;
        this.title = title;
        this.description = description;
        this.date = date;
        this.category =  category;
        }
    }
    console.log(Item)
    const BRUNO = new Item('../assets/projects-images/BRUNO/UI.png', `CVI, Command voice interface built with google's API Speech Recogniton`, '1/5/2021', ['Software'],'BRUNO');
    const FIGHTER_JET = new Item('../assets/projects-images/FIGHTER_JET/portrait.jpg', `Su32 RC model`, '1/10/2021', ['Planes'],'Electric Fighter Jet');
    const REMEMBER_ME = new Item('../assets/projects-images/REMEMBER_ME/REMEMBERME.png', `REMEBERME GAME`, '3/30/2020', ['IOT'],'REMEMBER GAME');
    const MINI_SPEEDSTER = new Item('../assets/projects-images/MINI_SPEEDSTER/speedster.jpg', `MINISPEEDSTER`, '2/20/10', ['Planes'], 'Minispeedster Plane')
    const SMART_GLIDER = new Item('../assets/projects-images/PLANE_CONCEPTS/SMARTGLIDER/SmartGlider.png', 'Smart Glider', '2/10/2021', ['Planes','3D Design'], 'Smart Glider')
    const ROBOCAR = new Item('../assets/projects-images/TRG_car/TRG_CAR.jpg', 'Arduino Rover with an FPV (First-person view) System', '2/8/2020', ['Robots'], 'TRG Rover')
    const SR72 = new Item('../assets/projects-images/SR72/SR72 Desert.png', 'SR72 Plane', '29/11/2021', ['Planes'], 'SR72')
    const projects = [FIGHTER_JET, REMEMBER_ME,BRUNO, MINI_SPEEDSTER, SMART_GLIDER, ROBOCAR, SR72];
    function buildObjects(object){
        var node = document.createElement(`a`)                 // Create a <li> node
        node.classList.add('projects_item');
        node.setAttribute('style', 'width:40vh;color:white;justify-self:center;border-radius:25px;')
        node.setAttribute('class','bg-dark')
        var img = document.createElement(`img`);
        var title = document.createElement('h2')
        title.setAttribute('class', 'project_title');
        title.innerHTML = object.title;
        title.setAttribute('style','padding:10px')
        node.appendChild(title);
        node.setAttribute('href', `/project?${object.title}`)
        
        var date = document.createElement('p')
        date.setAttribute('class', 'project_date');
        date.innerHTML = object.date;
        node.appendChild(date);
        img.classList.add('project_img');
        img.setAttribute('src', object.image);
        img.setAttribute('style', 'object-fit:cover;width:100%; height:150px')
        var text = document.createElement('p')
        text.innerHTML = object.description;
        text.classList.add('project_description');

        node.appendChild(img);
        node.appendChild(text);
        object.category.forEach(element =>     {
            // Append the text to <li>
            node.setAttribute('category', element)
        });
        node.setAttribute('id', 'projects_item')
        // Append the text to <li>
        document.getElementById("projects").appendChild(node);     // Append <li> to <ul> with id="myList"
    }
export default {
    name:'Item',
    mounted(){
        var sort = projects.sort(function(a, b) {
        var dateA = new Date(a.date), dateB = new Date(b.date);
            return dateA - dateB;
        });
        var node = document.getElementById('projects');
        sort.reverse()
        node.innerHTML = '';
        sort.forEach(element =>{
            buildObjects(element);
        })
    },
  methods: {
    sortByName() {
        var sort = projects.sort(function(a, b) {
        var titleA = a.title.toLowerCase(), titleB = b.title.toLowerCase();
            if (titleA < titleB) return -1;
            if (titleA > titleB) return 1;
            return 0;
        });
        var node = document.getElementById('projects');
        node.innerHTML = '';
        sort.forEach(element =>{
            buildObjects(element);
        })
    },
    sortByDate() {
        var sort = projects.sort(function(a, b) {
            var dateA = new Date(a.date), dateB = new Date(b.date);
            return dateA - dateB;
        });
        var node = document.getElementById('projects');
        sort.reverse()
        node.innerHTML = '';
        sort.forEach(element =>{
            buildObjects(element);
        })
    },
    sortByKind(kind){
        var node = document.getElementById('projects');
        node.innerHTML = '';
        projects.forEach((element)=>{
            if(element.category == kind){
                buildObjects(element);
            }
        })
    },
    showAll(){
        var node = document.getElementById('projects');
        node.innerHTML = '';
        projects.forEach(element => buildObjects(element))
    }
  }
  
}
</script>
