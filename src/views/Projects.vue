<template>
  <div class="projects">
    <div class="title_container">
      <div class="title">PROJECTS</div>
    </div>
    <div class="wrapper">
      <div class="typing-demo">
        checkout some of my projects
      </div>
    </div>
    <Item></Item>
  </div>
</template>
<style scoped>
.wrapper {
  height: 10vh;
  /*This part is important for centering*/
  display: flex;
  align-items: center;
  justify-content: center;
}
.form{
  width: 100%;
  padding-left: 20%;
  padding-right: 20%;
  justify-self: center;
  justify-content: center;
}
.typing-demo {
  width: 25ch;
  animation: typing 2s steps(22), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-size: 1.2em;
  color: white;
}

@keyframes typing {
  from {
    width: 0
  }
}
    
@keyframes blink {
  50% {
    border-color: transparent
  }
}
/*Title*/
.title_container {
  color: #fff;
  height: 100%;
  overflow: hidden;
}
.title_container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.title {
  background: 50% 100% / 50% 50% no-repeat
              radial-gradient(ellipse at bottom, #fff, transparent, transparent);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 9.8vh;
  animation: reveal 3000ms ease-in-out forwards 200ms,
             glow 2500ms linear infinite 2000ms;
}  
  @keyframes glow {
    40% {
      text-shadow: 0 0 8px #fff;
    }
  }
  @keyframes reveal {
    80%{
      letter-spacing: 8px;
    }
    100% {
      background-size: 300% 300%;
    }
  }  
</style>
<script>
  import Item from '../components/Item.vue'
  export default {
    name: 'Project',
    components:{
      Item
    },
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ]
      }
    }

  }
</script>
