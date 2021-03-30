<template>
  <div class="projects google-font">
    
  <h1 class="subtitle-1 grey--text">Projects</h1>
  <v-container class="my-5"> 
    
    <v-layout>
      <v-spacer></v-spacer>
      <v-flex xs12 md6 class="text-xs-center">
        <v-progress-circular
          indeterminate
          class="primary--text justify-space-around"
          :width="7"
          :size="70"
          v-if="loading"></v-progress-circular>
      </v-flex>
    </v-layout>

    <v-layout row wrap justify-space-around v-if="!loading">
      <v-flex xs12 md4 v-for="project in projects" :key="project.id">
        <v-card
            class="mx-auto my-2"
            max-width="370"
            
          >
            <v-img            
              height="250px"
              :src="project.imageUrl"
            ></v-img>

            <v-card-title>
              {{project.title}}
            </v-card-title>

            <v-card-subtitle>
             {{project.subtitle}}
            </v-card-subtitle>

            <v-card-actions>

              <v-btn
                color="blue"
                text
                :to="'/project/' + project.id"
              >
                Explore
              </v-btn>

              <v-spacer></v-spacer>

            </v-card-actions>

        </v-card>
      </v-flex>
    </v-layout>  
  
  </v-container>
  </div>
</template>

<script>


export default {
  name: 'Projects',
  
  

    computed:{
        projects (){ 
         return this.$store.getters.featuredProjects
       },
       
       loading () {
        return this.$store.getters.loading
      }
       
    },

   

  components: {
   
  }
}
</script>