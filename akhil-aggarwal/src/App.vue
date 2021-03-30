<template>
  <v-app>
  <NavBar></NavBar>
    <v-content class="mx-4 my-4">
    
      <router-view>     
      </router-view>
      
      <Footer></Footer>
    </v-content>
  </v-app>
</template>


<script>
import NavBar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'


export default {

  name: 'App',

  components: {
    NavBar,
    Footer
    
  },

  data: () => ({
    //
  }),
}

</script>

