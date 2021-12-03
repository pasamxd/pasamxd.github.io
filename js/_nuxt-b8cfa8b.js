(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,4],{258:function(t,e,n){"use strict";n.r(e);n(33);var r=n(0).a.extend({name:"Title",data:function(){return{titles:["Developer.","Student.","UwU.","Person.","Cat."],title:"Developer.",lastTitle:""}},methods:{changeTitle:function(){var t=this;this.lastTitle=this.title;var e=this.titles.filter((function(title){return title!==t.lastTitle&&title!==t.title}))[Math.floor(Math.random()*this.titles.filter((function(title){return title!==t.lastTitle&&title!==t.title})).length)];this.title=e}}}),l=n(23),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",{staticClass:"text-black dark:text-white"},[t._v("A")]),t._v(" "),n("span",{staticClass:"cursor-pointer animate-gradient-x select-none bg-gradient-to-br mt-1 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400",on:{click:t.changeTitle}},[t._v(t._s(t.title))])])}),[],!1,null,null,null);e.default=component.exports},259:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({name:"Spotify",props:["lanyard","finished"],computed:{getSongName:function(){return this.lanyard&&this.lanyard.spotify?this.lanyard.spotify.song:"Not listening to anything"},getArtistName:function(){return this.lanyard&&this.lanyard.spotify?this.lanyard.spotify.artist:"Spotify"},getAlbumArt:function(){return this.lanyard&&this.lanyard.spotify&&this.lanyard.spotify.album_art_url||"/assets/images/not-listening-64x64.png"},getSongUrl:function(){return this.lanyard&&this.lanyard.spotify?"https://open.spotify.com/track/".concat(this.lanyard.spotify.track_id):"#"}}}),l=n(23),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"transform transition duration-500 hover:scale-105 ",attrs:{href:t.getSongUrl}},[n("div",{staticClass:"w-full animate__animated animate__fadeInLeft border rounded-lg py-3 items-center px-5 dark:border-opacity-20 border-opacity-20 text-black dark:text-white cursor-pointer select-none flex flex-row border-dark dark:border-light"},[t.finished?n("img",{staticClass:"rounded-sm h-16 w-16",attrs:{draggable:"false",alt:"song-art",src:""+t.getAlbumArt}}):n("div",{staticClass:"rounded-sm bg-light dark:bg-dark h-16 w-16"}),t._v(" "),t.finished?n("div",{staticClass:"px-4 items-center"},[n("h1",{staticClass:"w-44 lg:w-80 text-lg truncate"},[t._v(t._s(t.getSongName))]),t._v(" "),n("div",{staticClass:"flex space-x-2 items-center"},[n("font-awesome-icon",{staticClass:"text-green-400",attrs:{icon:["fab","spotify"]}}),t._v(" "),n("h1",{staticClass:"w-32 lg:w-40 transform truncate text-sm"},[t._v(t._s(t.getArtistName))])],1)]):n("div",{staticClass:"px-4 flex flex-col space-y-1"},[n("div",{staticClass:"w-44 h-5 rounded-sm bg-light dark:bg-dark md:w-80"}),t._v(" "),n("div",{staticClass:"w-40 h-5 rounded-sm bg-light dark:bg-dark bg-white"})])])])}),[],!1,null,null,null);e.default=component.exports},264:function(t,e,n){"use strict";n.r(e);var r=n(8),l=(n(56),n(73),n(127),n(0).a.extend({name:"Home",head:function(){return{title:"Home"}},data:function(){return{finished:!1,lanyard:{},socket:null}},computed:{getAvatarUrl:function(){var t;return this.lanyard&&this.lanyard.discord_user?"https://cdn.discordapp.com/avatars/".concat(this.lanyard.discord_user.id,"/").concat(this.lanyard.discord_user.avatar).concat((null===(t=this.lanyard.discord_user.avatar)||void 0===t?void 0:t.startsWith("a_"))?".gif":".png","?size=512")||!1:"/assets/images/default-avatar.png"}},beforeDestroy:function(){var t,e,n;(null===(t=this.socket)||void 0===t?void 0:t.CLOSED)||(null===(e=this.socket)||void 0===e?void 0:e.CLOSING)||null===(n=this.socket)||void 0===n||n.close()},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$lanyard({userId:"298888568279924746",socket:!0});case 2:t.socket=e.sent,null===(n=t.socket)||void 0===n||n.addEventListener("message",(function(e){var data=e.data,n=JSON.parse(data),r=n.t,l=n.d;"INIT_STATE"!==r&&"PRESENCE_UPDATE"!==r||(t.lanyard=l||{}),t.finished=!0}));case 4:case"end":return e.stop()}}),e)})))()}})),o=n(23),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container relative mx-auto -mt-12"},[n("div",{staticClass:"flex justify-center items-center h-screen"},[n("div",{staticClass:"container relative flex lg:space-y-0 space-y-8 flex-col lg:flex-row items-center justify-center lg:justify-around flex-grow px-0 mx-auto md:px-20 lg:px-24 section"},[n("div",{staticClass:"flex space-y-4 items-center lg:items-start justify-center flex-col"},[n("h1",{staticClass:"flex animate__animated animate__fadeInLeft cursor-default flex-col text-4xl lg:text-left text-center lg:text-6xl font-bold text-black dark:text-white"},[t._v("Hi. I'm Tuna. \n                        "),n("Title")],1),t._v(" "),n("Spotify",{attrs:{finished:t.finished,lanyard:Object.assign({},t.lanyard)}})],1),t._v(" "),n("div",{staticClass:"animate__animated animate__fadeInRight"},[t.finished?n("img",{staticClass:"rounded-lg shadow-inner w-36 h-36 lg:w-80 lg:h-80",attrs:{alt:"Avatar",draggable:"false",src:""+t.getAvatarUrl}}):n("div",{staticClass:"animate-gradient-x bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded-lg w-36 h-36 lg:w-80 lg:h-80"})])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Title:n(258).default,Spotify:n(259).default})}}]);