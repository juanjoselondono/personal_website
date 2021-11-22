<template>
    <div class="bg-dark text-light text-center" id="container">
        <div id="contact_container">
            <div class="contact_item_container">
                <a rel="nofollow" href="https://www.instagram.com/londono_da/" class="contact_item">
                    <b-icon-instagram-app class="icon"></b-icon-instagram-app>
                </a>
            </div>
            <div class="contact_item_container">
                <a rel="nofollow" href="https://twitter.com/londono_da" class="contact_item">
                    <b-icon-twitter-app class="icon"></b-icon-twitter-app>
                </a>
            </div>        
            <div class="contact_item_container">
                <a rel="nofollow" href="https://wa.link/1uykxn" class="contact_item">
                    <b-icon-telephone-icon class="icon"></b-icon-telephone-icon>
                </a>
            </div>
            <div class="contact_item_container">
                <a rel="nofollow" href="https://github.com/juanjoselondono" class="contact_item">
                    <b-icon-github-app class="icon"></b-icon-github-app>
                </a>
            </div>
            <div class="contact_item_container">
                <a rel="nofollow" href="https://open.spotify.com/artist/1lBJ8VUYZ0xpTBIkHV93Nx?si=0QvA9iUIQiq6fgpMV5_SmQ" class="contact_item">
                <b-icon-music-note-beamed class="icon"></b-icon-music-note-beamed>
                </a>
            </div>
        </div>
        <div class="contact_info">
            <p>juanjoselondonodavid@gmail.com</p>
            <p>+57 3054293966</p>
            <p style="color:gray;font-size:0.8em">©juanlondono2021</p>
        </div>
    </div>
</template>
<style scoped>
    #container{
        display: flex;
        flex-direction: column;
    }
    bg-card{
        margin: 0px;
    }
    .contact_item_container{
        margin: 0px;
        justify-content: center;
        display: flex;
        align-content: center;
        align-self: center;
        margin: 10px;
    }
    #contact_container{
        align-content: center;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 2vh;
    }
    .icon{
        font-size: 30px;
        text-align: center;
        align-self: center;
        color: white;
    }
    .contact_info{
        margin-bottom: 20px;
    }
</style>
<script>
export default {
  name: 'Footer'
}
</script>