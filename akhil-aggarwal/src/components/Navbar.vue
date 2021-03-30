<template>
  <div class="navbar">


    <v-app-bar
      color="blue darken-2"
      flat
      dark
       >

      <v-toolbar-title class="mx-4 d-none d-md-flex">
         <span class="google-font " style="font-size: 120%;">Akhil Aggarwal</span>
         </v-toolbar-title>

         <v-toolbar-title class="mx-4 d-flex d-md-none">      
         <span class="google-font" style="font-size: 120%;">Akhil Aggarwal</span>      
         </v-toolbar-title>

      <v-spacer ></v-spacer>
        
      <v-btn class="mx-1 d-none d-md-flex google-font" text color="white--text" v-for="link in links" :key="link.text" router :to="link.route">
        {{link.text}}
      </v-btn>

      <v-btn 
          v-if="userIsAuthenticated"
          class="d-none d-md-flex"
          @click="onLogout" :to="'/'">
          <v-icon left dark>exit_to_app</v-icon>
          Logout

        </v-btn>

    </v-app-bar>



  <v-bottom-navigation
    color="primary"
    class="d-flex d-md-none google-font"
    fixed
  >
    <v-btn v-for="link in links" :key="link.text" router :to="link.route" style="height: inherit !important;">
      <span>{{link.text}}</span>
      <i aria-hidden="true" class="v-icon material-icons theme--light">{{link.icon}}</i>
    </v-btn>
     
  </v-bottom-navigation>



  </div>
</template>

<script>

export default {

  computed: {
      links () {
        let links = [
       {icon: 'home',text: 'Home',route:'/'},
       {icon: 'flip_to_front',text: 'Projects',route:'/projects'},
       {icon: 'person_outline',text: 'About',route:'/about'},
       {icon: 'perm_contact_calendar',text: 'Contact',route:'/contact'},
     ]
        if (this.userIsAuthenticated) {
          links = [
            {icon: 'home',text: 'Home',route:'/'},
            {icon: 'flip_to_front',text: 'Projects',route:'/projects'},
            {icon: 'person_outline',text: 'About',route:'/about'},
            {icon: 'perm_contact_calendar',text: 'Contact',route:'/contact'},
            {icon: 'supervisor_account',text: 'Add Projects',route:'/addprojects'},
            
          ]
        }
        return links
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    },
   
 methods: {
      onLogout () {
        this.$store.dispatch('logout')
      }
    }

 
}
</script>
