(function(e){function t(t){for(var s,o,n=t[0],c=t[1],l=t[2],d=0,u=[];d<n.length;d++)o=n[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);p&&p(t);while(u.length)u.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],s=!0,o=1;o<a.length;o++){var n=a[o];0!==r[n]&&(s=!1)}s&&(i.splice(t--,1),e=c(c.s=a[0]))}return e}var s={},o={app:0},r={app:0},i=[];function n(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"875f4bbc"}[e]+".js"}function c(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={about:1};o[e]?t.push(o[e]):0!==o[e]&&a[e]&&t.push(o[e]=new Promise((function(t,a){for(var s="css/"+({about:"about"}[e]||e)+"."+{about:"c29b32b9"}[e]+".css",r=c.p+s,i=document.getElementsByTagName("link"),n=0;n<i.length;n++){var l=i[n],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===s||d===r))return t()}var u=document.getElementsByTagName("style");for(n=0;n<u.length;n++){l=u[n],d=l.getAttribute("data-href");if(d===s||d===r)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var s=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=s,delete o[e],p.parentNode.removeChild(p),a(i)},p.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){o[e]=0})));var s=r[e];if(0!==s)if(s)t.push(s[2]);else{var i=new Promise((function(t,a){s=r[e]=[t,a]}));t.push(s[2]=i);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=n(e);var u=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(p);var a=r[e];if(0!==a){if(a){var s=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+s+": "+o+")",u.name="ChunkLoadError",u.type=s,u.request=o,a[1](u)}r[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=s,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)c.d(a,s,function(t){return e[t]}.bind(null,s));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var p=d;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},4089:function(e,t,a){},"4cab":function(e,t,a){e.exports=a.p+"img/404Astro.78275bfd.png"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("vue-particles",{staticStyle:{position:"fixed",width:"100%",height:"100%"},attrs:{color:"#dedede",particleOpacity:.7,particlesNumber:80,shapeType:"circle"}}),a("div",{staticStyle:{position:"relative"}},[a("Navbar"),a("router-view"),a("Footer")],1)],1)},r=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-navbar",{staticClass:"bg-transparent navbar-dark",staticStyle:{colot:"white"},attrs:{toggleable:"lg"}},[a("b-navbar-brand",{attrs:{href:"/"}},[e._v("Juan José Londoño David")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("router-link",{attrs:{to:"/"}},[a("b-nav-item",{attrs:{href:"/"}},[e._v("Home")])],1),a("router-link",{attrs:{to:"/projects"}},[a("b-nav-item",{attrs:{href:"/about"}},[e._v("Projects")])],1),a("b-nav-item",{attrs:{href:"https://shore-tarp-c78.notion.site/Juan-Londo-o-Blog-c486d75ed31e4223ac84f0b819fd9119"}},[e._v("Blog")])],1)],1)],1)],1)},n=[],c={name:"Navbar"},l=c,d=(a("7aed"),a("2877")),u=Object(d["a"])(l,i,n,!1,null,"6f50a511",null),p=u.exports,m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bg-dark text-light text-center",attrs:{id:"container"}},[a("div",{attrs:{id:"contact_container"}},[a("div",{staticClass:"contact_item_container"},[a("a",{staticClass:"contact_item",attrs:{rel:"nofollow",href:"https://www.instagram.com/londono_da/"}},[a("b-icon-instagram-app",{staticClass:"icon"})],1)]),a("div",{staticClass:"contact_item_container"},[a("a",{staticClass:"contact_item",attrs:{rel:"nofollow",href:"https://twitter.com/londono_da"}},[a("b-icon-twitter-app",{staticClass:"icon"})],1)]),a("div",{staticClass:"contact_item_container"},[a("a",{staticClass:"contact_item",attrs:{rel:"nofollow",href:"https://wa.link/1uykxn"}},[a("b-icon-telephone-icon",{staticClass:"icon"})],1)]),a("div",{staticClass:"contact_item_container"},[a("a",{staticClass:"contact_item",attrs:{rel:"nofollow",href:"https://github.com/juanjoselondono"}},[a("b-icon-github-app",{staticClass:"icon"})],1)]),a("div",{staticClass:"contact_item_container"},[a("a",{staticClass:"contact_item",attrs:{rel:"nofollow",href:"https://open.spotify.com/artist/1lBJ8VUYZ0xpTBIkHV93Nx?si=0QvA9iUIQiq6fgpMV5_SmQ"}},[a("b-icon-music-note-beamed",{staticClass:"icon"})],1)])]),e._m(0)])},g=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"contact_info"},[a("p",[e._v("juanjoselondonodavid@gmail.com")]),a("p",[e._v("+57 3054293966")]),a("p",{staticStyle:{color:"gray","font-size":"0.8em"}},[e._v("©juanlondono2021")])])}],f={name:"Footer"},h=f,b=(a("de87"),Object(d["a"])(h,m,g,!1,null,"03ec60d9",null)),v=b.exports,S={name:"Home",components:{Navbar:p,Footer:v}},_=S,y=(a("034f"),Object(d["a"])(_,o,r,!1,null,null,null)),w=y.exports,I=a("5f5b"),j=a("0759"),E=a("7386"),C=a("8c4f"),R=(a("d3b7"),a("3ca3"),a("ddb0"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("Slider",{attrs:{Images:[{uri:e.publicPath+"assets/projects-images/PLANE_CONCEPTS/Boatv1.png",label:"Software Developer, Hardware Maker, Casual Musician"},{uri:e.publicPath+"assets/projects-images/PLANE_CONCEPTS/SMARTGLIDER/Smartglider3.png",label:"Building Towards The Future"}]}}),a("div",{staticStyle:{margin:"5%"}},[a("b-card",{staticClass:"overflow-hidden",staticStyle:{"background-color":"transparent",border:"none"},attrs:{"no-body":""}},[a("b-row",{attrs:{"no-gutters":""}},[a("b-col",{staticClass:"image_container",attrs:{md:"6"}},[a("b-card-img",{staticClass:"info_image",attrs:{src:"./assets/images/profile.jpg",alt:"Image"}})],1),a("b-col",{staticClass:"info",attrs:{md:"6"}},[a("b-card-body",{staticClass:"description container",attrs:{title:"Hello! I Am Juan Londoño"}},[a("b-card-text",{staticStyle:{"text-align":"left",color:"white"}},[e._v(" I am a colombian mechatronic engineering student at "),a("a",{attrs:{href:"https://www.eia.edu.co/"}},[e._v("Universidad EIA")]),e._v(" who loves to share Ideas with others. Send me your ideas and thoughts to juanjoselondonodavid@gmail.com. "),a("p",{staticStyle:{color:"gray","font-size":"0.8em","margin-top":"5%"}},[e._v(" I also enjoy music considerably. Check out my "),a("a",{attrs:{href:"https://open.spotify.com/artist/1lBJ8VUYZ0xpTBIkHV93Nx?si=0QvA9iUIQiq6fgpMV5_SmQ"}},[e._v("Spotify Profile")]),e._v(" where I publish some of my songs ")])])],1)],1)],1)],1)],1),a("b-card",{staticClass:"text-center bg-dark",staticStyle:{margin:"5%",color:"white"},attrs:{id:"info_container"}},[a("div",[a("b-card-body",[a("h3",{staticStyle:{"font-size":"4em"}},[e._v("Tech Stack")]),a("b-list-group",[a("b-list-group-item",[e._v("Internet Of Things (Lorawan, WiFi, Bluetooth .. )")]),a("b-list-group-item",[e._v("HTML, CSS, Vuejs, React, React Native")]),a("b-list-group-item",[e._v("Python, Keras, Tensorflow")]),a("b-list-group-item",[e._v("Mongo DB, SQL")]),a("b-list-group-item",[e._v("C++, C#, Arduino, Micropython")])],1)],1)],1)])],1)}),T=[],k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,background:"#ababab","img-width":"1024","img-height":"480"},on:{"sliding-start":e.onSlideStart,"sliding-end":e.onSlideEnd},model:{value:e.slide,callback:function(t){e.slide=t},expression:"slide"}},[a("b-carousel-slide",{attrs:{caption:e.Images[0].label},scopedSlots:e._u([{key:"img",fn:function(){return[a("img",{staticStyle:{"object-fit":"cover!important"},attrs:{width:"100%",height:"500vh",src:e.Images[0].uri,alt:"image slot"}})]},proxy:!0}])}),a("b-carousel-slide",{attrs:{caption:e.Images[1].label},scopedSlots:e._u([{key:"img",fn:function(){return[a("img",{staticStyle:{"object-fit":"cover!important"},attrs:{width:"100%",height:"500vh",src:e.Images[1].uri,alt:"image slot"}})]},proxy:!0}])})],1)],1)},x=[],A={data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(){this.sliding=!0},onSlideEnd:function(){this.sliding=!1}},props:{Images:Array}},M=A,L=(a("a603"),Object(d["a"])(M,k,x,!1,null,"2f4a611e",null)),P=L.exports,N={name:"Home",components:{Slider:P},data:function(){return{publicPath:""}},metaInfo:{title:"Juan Londoño | Welcome to my portfolio",meta:[{name:"description",content:"I am a colombian mechatronic engineering student at Universidad EIA who loves to share Ideas with others and Build great Things. I am also an IOT engineer and a full stack developer."},{name:"keywords",content:"software developer portfolio, Mechatronic Engineer, Mechatronics, Engineer, Juan José Londoño David"}]}},B=N,O=(a("f5b8"),Object(d["a"])(B,R,T,!1,null,"c05eab18",null)),J=O.exports,D=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},G=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"404",attrs:{id:"container"}},[s("h1",{staticClass:"text"},[e._v("404")]),s("p",{staticStyle:{color:"white"}},[e._v("The page that you were looking for does not exists"),s("br"),e._v("Go back to "),s("a",{attrs:{href:"/"}},[e._v("Home")])]),s("img",{staticClass:"image",attrs:{src:a("4cab"),alt:""}})])}],U={name:"NotFound"},F=U,H=(a("8796"),Object(d["a"])(F,D,G,!1,null,"f6764772",null)),V=H.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticStyle:{position:"relative","text-align":"center"}},[a("img",{staticClass:"portrait",attrs:{src:e.Images,alt:""}}),a("h1",{staticClass:"title"},[e._v(e._s(e.name))])]),a("div",[a("div",[null!=e.Software?a("b-card",{staticClass:"overflow-hidden",staticStyle:{"max-width":"100%"},attrs:{"no-body":""}},[a("b-row",{attrs:{"no-gutters":""}},[a("b-col",{attrs:{md:"6"}},[a("img",{staticClass:"software_Image",attrs:{src:e.Software.portrait,alt:""}})]),a("b-col",{attrs:{md:"6"}},[a("b-card-body",{staticStyle:{heigth:"100%",padding:"30px!important",color:"black"}},[a("b-card-text",[a("p",{staticStyle:{"align-self":"center","text-align":"center",color:"black"}},[e._v(e._s(e.Software.description))]),null!=e.Software.website?a("p",[e._v("Website "),a("a",{attrs:{href:e.Software.website}},[e._v(e._s(e.Software.website))])]):e._e(),null!=e.Software.repo?a("p",[e._v("Repo Link "),a("a",{attrs:{href:e.Software.repo}},[e._v(e._s(e.Software.repo))])]):e._e()])],1)],1)],1)],1):e._e()],1)]),null!=e.videoURI?a("div",[a("b-card",{staticClass:"overflow-hidden",staticStyle:{"background-color":"transparent",marginTop:"5%",border:"none"},attrs:{"no-body":""}},[a("b-row",{attrs:{"no-gutters":""}},[a("b-col",{attrs:{md:"6"}},[a("iframe",{attrs:{width:"100%",height:"315px",src:e.videoURI,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),a("b-col",{staticClass:"bg-transparent",staticStyle:{"align-self":"center",color:"white"},attrs:{md:"6"}},[a("b-card-body",{attrs:{title:e.Description}}),null!=e.github_link?a("p",[e._v("Repo Link "),a("a",{attrs:{href:e.github_link}},[e._v(e._s(e.github_link))])]):e._e()],1)],1)],1)],1):e._e(),a("div",[null!=e.sliderImages?a("b-card",{staticClass:"overflow-hidden bg-transparent",staticStyle:{"max-width":"100%","margin-top":"5%","margin-bottom":"5%"},attrs:{"no-body":""}},[a("b-row",{attrs:{"no-gutters":""}},[a("b-col",{attrs:{md:"6"}},[a("div",[null!=e.sliderImages?a("b-carousel",{staticClass:"specs_slider",staticStyle:{"text-shadow":"0px 0px 2px #000"},attrs:{id:"carousel-no-animation","no-animation":"",controls:"",indicators:"","img-width":"1024","img-height":"480"}},[a("b-carousel-slide",{attrs:{"img-src":e.sliderImages[0]}}),null!=e.sliderImages&&null!=e.sliderImages[1]?a("b-carousel-slide",{attrs:{"img-src":e.sliderImages[1]}}):e._e(),null!=e.sliderImages&&null!=e.sliderImages[2]?a("b-carousel-slide",{attrs:{"img-src":e.sliderImages[2]}}):e._e(),null!=e.sliderImages&&null!=e.sliderImages[3]?a("b-carousel-slide",{attrs:{"img-src":e.sliderImages[3]}}):e._e(),null!=e.sliderImages&&null!=e.sliderImages[4]?a("b-carousel-slide",{attrs:{"img-src":e.sliderImages[4]}}):e._e(),null!=e.sliderImages&&null!=e.sliderImages[5]?a("b-carousel-slide",{attrs:{"img-src":e.sliderImages[5]}}):e._e(),null!=e.sliderImages&&null!=e.sliderImages[6]?a("b-carousel-slide",{attrs:{"img-src":e.sliderImages[6]}}):e._e(),null!=e.sliderImages&&null!=e.sliderImages[7]?a("b-carousel-slide",{attrs:{"img-src":e.sliderImages[7]}}):e._e(),null!=e.sliderImages&&null!=e.sliderImages[8]?a("b-carousel-slide",{attrs:{"img-src":e.sliderImages[8]}}):e._e(),null!=e.sliderImages&&null!=e.sliderImages[9]?a("b-carousel-slide",{attrs:{"img-src":e.sliderImages[9]}}):e._e()],1):e._e()],1)]),a("b-col",{attrs:{md:"6"}},[null!=e.spec?a("b-list-group",{staticStyle:{"margin-top":"5%"}},[(e.doNotShowSpecsTitle=null)?a("h3",{staticStyle:{color:"white","font-size":"3em","margin-bottom":"1.5%"}},[e._v("Specs")]):e._e(),a("ul",{staticClass:"specs_container",attrs:{id:"specs"}})]):e._e()],1)],1)],1):e._e()],1)])},Q=[],z=a("3835"),W=a("b85c"),Y=(a("9861"),a("ac1f"),a("841c"),a("159b"),a("b0c0"),a("d4bf")),q={name:"Project",data:function(){return{videoURI:"",Description:"",Images:"",name:"",spec:"",github_link:"",sliderImages:"",Software:"",doNotShowSpecsTitle:""}},mounted:function(){var e=this;console.log(Y);var t,a=new URLSearchParams(location.search),s=Object(W["a"])(a);try{var o=function(){var a=Object(z["a"])(t.value,1),s=a[0];Y.forEach((function(t){null==t&&e.$router.push("/"),t.name==s&&(e.videoURI=t.videoURI,e.Description=t.videoDescription,e.Images=t.Images,e.name=t.name,e.spec=t.Specs,e.github_link=t.Repository,e.sliderImages=t.sliderImages,e.Software=t.Software,e.doNotShowSpecsTitle=t.doNotShowSpecsTitle,null!=t.Specs&&t.Specs.forEach((function(e){var t=document.createElement("li");t.innerHTML=e,document.getElementById("specs").appendChild(t)})))}))};for(s.s();!(t=s.n()).done;)o()}catch(r){s.e(r)}finally{s.f()}},metaInfo:{title:name}},K=q,Z=(a("8c65"),Object(d["a"])(K,$,Q,!1,null,"33338dc0",null)),X=Z.exports;s["default"].use(C["a"]);var ee=[{path:"/",name:"Home",component:J},{path:"/projects",name:"Projects",component:function(){return a.e("about").then(a.bind(null,"acca"))}},{path:"/project",name:"Project",component:X},{path:"/404",component:V},{path:"*",redirect:"/404"}],te=new C["a"]({mode:"history",base:"",routes:ee}),ae=te,se=a("98c9"),oe=a("58ca");a("f9e3"),a("2dd8");s["default"].use(oe["a"]),s["default"].use(se["a"]),s["default"].use(C["a"]),s["default"].config.productionTip=!1,s["default"].use(I["a"]),s["default"].component("BIcon",j["a"]),s["default"].component("BIconInstagramApp",E["n"]),s["default"].component("BIconTwitterApp",E["v"]),s["default"].component("BIconGithubApp",E["m"]),s["default"].component("BIconTelephoneIcon",E["u"]),s["default"].component("BIconMusicNoteBeamed",E["o"]),new s["default"]({router:ae,el:"#app",render:function(e){return e(w)},components:{App:w},template:"<App/>"})},"7aed":function(e,t,a){"use strict";a("d3a7")},8230:function(e,t,a){},"85ec":function(e,t,a){},8796:function(e,t,a){"use strict";a("ca1d")},"8c65":function(e,t,a){"use strict";a("a175")},a175:function(e,t,a){},a603:function(e,t,a){"use strict";a("b016")},b016:function(e,t,a){},ca1d:function(e,t,a){},d3a7:function(e,t,a){},d4bf:function(e){e.exports=JSON.parse('[{"name":"TRG Rover","videoURI":"https://www.youtube.com/embed/cnvhR36UHYM","videoDescription":"This Tiny Rover uses a 180° servo motor to change FPV camera\'s position. It is controlled via Fly Sky controller, Powered by a 1800mAh battery it has a 1h battery range. ","Repository":"https://github.com/juanjoselondono/RoboCar","Author":"Juan José Londoño David","Images":"../../assets/projects-images/TRG_car/TRG_CAR.jpg","Specs":["Powered by Arduino","balsa Wood Frame","5v Geared Motor","Bluetooth Lights Control"],"sliderImages":["../../assets/projects-images/TRG_car/TRG_CAR.jpg"]},{"name":"Electric Fighter Jet","videoURI":"https://www.youtube.com/embed/kVVY2sbykyo","videoDescription":"This foamboard RC plane, It\'s based on the Design of a Su-32 Fighter jet. The Su-32 is capable of effectively accomplishing the following combat tasks: high precision strikes against air, air defense, ground and sea targets.","Author":"Juan José Londoño David","Images":"../../assets/projects-images/FIGHTER_JET/portrait.jpg","sliderImages":["../../assets/projects-images/FIGHTER_JET/photo1.jpg","../../assets/projects-images/FIGHTER_JET/photo2.jpg"],"Specs":["2.4Hz Fly Sky Controller","50cm Wing Span","Foamboard Fuselage","A2212 Brushless Motor","8x4,5 Propeller"]},{"name":"REMEMBER GAME","Author":"Juan José Londoño David","Images":"../../assets/images/black.png","Software":{"description":"JS game made by Sacha Lyfsyc in a Platzi course. Modified by Juan José Londoño David","repo":"https://github.com/juanjoselondono/REMEMBER.GAME","website":"https://juanjoselondono.github.io/REMEMBER.GAME/","portrait":"../../assets/projects-images/REMEMBER_ME/REMEMBERME.png"}},{"name":"BRUNO","Author":"Juan José Londoño David","Images":"../../assets/images/black.png","Software":{"description":"CVI, Command voice interface built with google\'s API Speech Recogniton and Speech Synthesis. It can be used to play videos on youtube, search content on wikipedia, get the time and in future versions it will have the capacity to assign custom commands.","repo":"https://github.com/juanjoselondono/B.R.U.N.O","website":"https://bruno-ai.herokuapp.com/","portrait":"../../assets/projects-images/BRUNO/UI.png"}},{"name":"Smart Glider","Author":"Juan José Londoño David","Images":"../../assets/projects-images/PLANE_CONCEPTS/SMARTGLIDER/SmartGlider.png","sliderImages":["../../assets/projects-images/PLANE_CONCEPTS/SMARTGLIDER/SmartGlider2.png","../../assets/projects-images/PLANE_CONCEPTS/SMARTGLIDER/SmartGlider3.png","../../assets/projects-images/PLANE_CONCEPTS/SMARTGLIDER/SmartGlider.png"],"Specs":["This Glider concept has a beautiful modern Design. It\'s based on birds aerodynamics. It\'s cockpit is made of Graphene which gives a full view of the landscape to it\'s passagers"]},{"name":"Minispeedster Plane","Images":"../../assets/images/black.png","Author":"Juan José Londoño David","sliderImages":["../../assets/projects-images/MINI_SPEEDSTER/speedster.jpg"],"Specs":["RC cardboard plane based on the MiniSpeedster\'s \'Flight Test\' design"]},{"name":"SR72","Images":"../../assets/projects-images/SR72/SR72 Desert.png","sliderImages":["../../assets/projects-images/SR72/SR72 desert back.png","../../assets/projects-images/SR72/SR72 Flying.png","../../assets/projects-images/SR72/SR72 v2.png","../../assets/projects-images/SR72/frame.0.png","../../assets/projects-images/SR72/frame.1.png","../../assets/projects-images/SR72/frame.2.png","../../assets/projects-images/SR72/frame.3.png","../../assets/projects-images/SR72/frame.4.png"],"Specs":["This concept is a more futurist version of The Lockheed Martin SR-72,known as the \'Blackbird sucesor\', is an American hypersonic UAV concept intended for intelligence, surveillance and reconnaissance proposed privately in 2013 by Lockheed Martin as a successor to the retired Lockheed SR-71 Blackbird."],"doNotShowSpecsTitle":true}]')},de87:function(e,t,a){"use strict";a("4089")},f5b8:function(e,t,a){"use strict";a("8230")}});
//# sourceMappingURL=app.876ee2f6.js.map