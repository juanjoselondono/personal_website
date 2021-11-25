<template>
    <div>
        <div style="position:relative;text-align:center">
            <img class="portrait" :src="Images" alt="">
            <h1 class="title">{{name}}</h1>
        </div>
        <div>
        <div>
        <b-card v-if="Software != null" no-body class="overflow-hidden" style="max-width: 100%;">
            <b-row no-gutters >
            <b-col md="6">
                <img class="software_Image" :src="Software.portrait" alt="">
            </b-col>
            <b-col md="6">
                <b-card-body style="heigth:100%;padding:30px!important;color:black">
                <b-card-text>
                    <p style="align-self:center;text-align:center;color:black">{{Software.description}}</p>
                    <p v-if="Software.website != null">Website <a  :href="Software.website">{{Software.website}}</a></p>
                    <p v-if="Software.repo != null">Repo Link <a  :href="Software.repo">{{Software.repo}}</a></p>
                </b-card-text>
                </b-card-body>
            </b-col>
            </b-row>
        </b-card>
        </div>
        </div>
        <div v-if="videoURI != null">
        <b-card no-body class="overflow-hidden" style="background-color:transparent ;marginTop:5%;border:none">
            <b-row no-gutters>
            <b-col md="6">
                <iframe width="100%" height="315px" :src="videoURI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </b-col>
            <b-col class="bg-transparent" md="6" style="align-self:center;color:white">
                <b-card-body :title="Description">
                </b-card-body>
                <p v-if="github_link != null">Repo Link <a  :href="github_link">{{github_link}}</a></p>
            </b-col>
            </b-row>
        </b-card>
        </div>
        <div>
        <b-card v-if="sliderImages != null" no-body class="overflow-hidden bg-transparent" style="max-width: 100%;margin-top:5%;margin-bottom:5%">
            <b-row no-gutters>
            <b-col md="6">
                <div>
                    <b-carousel
                        id="carousel-no-animation"
                        style="text-shadow: 0px 0px 2px #000"
                        no-animation
                        controls
                        indicators
                        img-width="1024"
                        img-height="480"
                        v-if="sliderImages != null"
                        class="specs_slider"
                    >
                    <b-carousel-slide :img-src="sliderImages[0]"></b-carousel-slide>
                    <b-carousel-slide :img-src="sliderImages[1]" v-if="sliderImages != null && sliderImages[1] != null"></b-carousel-slide>
                    <b-carousel-slide :img-src="sliderImages[2]" v-if="sliderImages != null && sliderImages[2] != null"></b-carousel-slide>
                    </b-carousel>
                </div>
            </b-col>
            <b-col md="6">
            <b-list-group style="margin-top:5%" v-if="spec != null">
                <h3 style="color:white;font-size:3em;margin-bottom:1.5%">Specs</h3>
                <ul class="specs_container" id="specs">
            </ul>
            </b-list-group>
            </b-col>
            </b-row>
        </b-card>
        </div>
    </div>
 
</template>

<style scoped>
    .portrait{
        width: 100%;
        height: 50vh;
        object-fit: cover;
    }
    .title{
        transform: translate(-50%, -50%);left:50%;
        top:50%;
        position: absolute;
        color:white;
        font-size:4em;
    }
    .info_container{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .specs_container{
        list-style: none;
        padding: 0;
        color: white;
        font-size: 1.5em;
    }
    .software_Image{
        width: 300px;
        height: 250px;
        object-fit: cover;
        margin: 10px;
    }
</style>
<script>
import json from '../projects.json'
export default {
    name:'Project',
    data(){
        return{
            videoURI:'',
            Description:'',
            Images:'',
            name: '',
            spec:'',
            github_link:'',
            sliderImages:'',
            Software:''
        }
    },
    mounted(){
        console.log(json)
        const urlParams = new URLSearchParams(location.search);
        for (const [key] of urlParams) {
            json.forEach(element => {
                if(element == null){
                    this.$router.push('/') 
                }
                if(element.name == key){
                    this.videoURI = element.videoURI
                    this.Description = element.videoDescription
                    this.Images = element.Images
                    this.name = element.name
                    this.spec = element.Specs
                    this.github_link = element.Repository
                    this.sliderImages = element.sliderImages
                    this.Software = element.Software
                    if(element.Specs != null){
                        element.Specs.forEach((spec)=>{
                            var node = document.createElement(`li`)                 // Create a <li> node
                            node.innerHTML = spec
                            document.getElementById("specs").appendChild(node);     // Append <li> to <ul> with id="myList"
                        })
                    }
                }
            });
        }
    }
}
</script>