<template>
  <v-app>
  <v-app-bar
      :collapse="!collapseOnClick"
      :collapse-on-click="collapseOnClick"
      color="blue darken-4"
      dark
      fixed
      elevate-on-scroll
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      
      <img
            src="../static/img/logo.svg"
            height="25"
          />
      <v-toolbar-title class="bar-title">Open<b>Sync</b></v-toolbar-title>    
      <v-spacer></v-spacer>
    <v-btn @click.stop="collapseOnClick = !collapseOnClick" icon>
    <v-icon>mdi-arrow-collapse-horizontal</v-icon> 
    </v-btn> 
   <v-btn href="https://github.com/brasky/OpenSync" class="mx-2" fab dark small color="blue">
      <v-icon dark>mdi-github</v-icon>
    </v-btn>
    
    </v-app-bar>
    
    <v-content>
      <v-container fluid style="padding: 0px;">
        <v-slide-y-transition mode="out-in">
          <nuxt />
        </v-slide-y-transition>
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" class="d-flex justify-center">
      <div style="margin:10px">
        <div>
          <img
            src="../static/img/logo.svg"
            height="32"
            style="vertical-align:middle;margin-right:5px;"
          />
          <a
            href="https://github.com/brasky/OpenSync"
          >&copy; 2020 OpenSync All Rights Reserved</a>
        </div>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {

  data() {
    return {
      items: [
        { icon: "mdi-home", title: "Home", to: "/" },
        { icon: "mdi-chart-bubble", title: "About", to: "/about" },
        { icon: "mdi-contacts", title: "Contact", to: "/contact" },
        { icon: "mdi-message", title: "Post 1", to: "/posts/1" },
        { icon: "mdi-message", title: "Post 2", to: "/posts/2" },
        { icon: "mdi-message", title: "Post 3", to: "/posts/3" },
        { icon: "mdi-message", title: "Post 4", to: "/posts/4" },
        { icon: "mdi-message", title: "Post 5", to: "/posts/5" }
      ],
      title: "OpenSync",
      collapseOnScroll: false,
      collapseOnClick: true,
      }
      },
      
};
</script>
<style>
.bar-title{
  font-family: 'Roboto Medium',sans-serif;
  margin-left: 5px;
}
.bar-title b{
  color: #6699ff;
  font-weight: normal;
}
.v-app-bar--fixed{
  min-width: 130px;
}
</style>