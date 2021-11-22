<template>
  <div class="home">
    <Slider :Images="[
    {
      uri:`${publicPath}assets/projects-images/PLANE_CONCEPTS/Boatv1.png`,
      label:'Software Developer, Hardware Maker, Casual Musician'
    },
    {
      uri: `${publicPath}assets/projects-images/PLANE_CONCEPTS/SMARTGLIDER/Smartglider3.png`,
      label: 'Building Towards The Future'
    }
    ]"/>
    <div style="margin:5%;">
      <b-card no-body class="overflow-hidden" style="padding; border-radius: 30px;">
        <b-row no-gutters>
          <b-col md="6" class="image_container">
            <b-card-img src="./assets/images/profile.jpg" alt="Image" class="info_image" style=""></b-card-img>
          </b-col>
          <b-col md="6" class="info">
            <b-card-body title="Hello! I Am Juan Londoño" class="description container">
              <b-card-text style="text-align:left">
                I am a colombian mechatronic engineering student at <a href="https://www.eia.edu.co/">Universidad EIA</a> who loves to share Ideas with others. Send me your ideas and thoughts to juanjoselondonodavid@gmail.com.
                <p style="color:gray;font-size:0.8em; margin-top:5%">
                  Also I enjoy music considerably. Check out my <a href="https://open.spotify.com/artist/1lBJ8VUYZ0xpTBIkHV93Nx?si=0QvA9iUIQiq6fgpMV5_SmQ">Spotify Profile</a> where I publish some of my songs
                </p>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <b-card id="info_container" class="text-center bg-dark" style="margin:5%;color:white">
      <div>
        <b-card-body>
        <h3 style="font-size:4em">Tech Stack</h3>
        <b-list-group>
          <b-list-group-item >Internet Of Things (Lorawan, WiFi, Bluetooth .. )</b-list-group-item>
          <b-list-group-item>HTML, CSS, Vuejs, React, React Native</b-list-group-item>
          <b-list-group-item>Python, Keras, Tensorflow</b-list-group-item>
          <b-list-group-item >Mongo DB, SQL</b-list-group-item>
          <b-list-group-item>C++, C#, Arduino, Micropython</b-list-group-item>
        </b-list-group>
        </b-card-body>
      </div>
    </b-card>
    </div>
</template>
<style scoped>
.info{
  justify-self: center;
  align-self: center;
}
.info_image{
  width:35%; 
  height:auto;
  border-radius: 30px;
  padding: 10px;
}
.image_container{
  justify-content: center;
  align-self: center;
  align-content: center;
}
.list-group-item{
  background-color: transparent;
  border: none;
  color:white;
  font-size: 1.4em;
}
#info_container{
  -webkit-box-shadow: 0px 5px 19px 8px rgba(0, 0, 0, 0.96); 
  box-shadow: 0px 5px 19px 8px rgba(0, 0, 0, 0.96);
  border-radius: 30px;
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
  height: 100px !important;
  width: 100px !important;
}
</style>
<script>
import Slider from '../components/Slider.vue'
export default {
  name: 'Home',
  components:{
    Slider
  },
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>
