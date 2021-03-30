<template>
<div class="project google-font">
<v-container>
<v-layout my-5>
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

        <v-layout row wrap v-if="!loading">
            <v-flex xs12 md12>
                <h1 class="display-3 my-4">{{ project.title }}</h1>
            </v-flex>
        </v-layout>
        <v-layout row wrap v-if="!loading">
                <v-flex xs12 md9>
                    <v-img 
                      :src="project.imageUrl" >
                    </v-img>
                </v-flex>

                <v-flex xs12 md3 pa-2>
                    {{project.description}}
                </v-flex>
                </v-layout>
               <v-layout row wrap mb-4 v-if="!loading">
                 <v-flex md12 my-4 class="d-flex d-sm-flex d-md-none d-lg-none" v-if="this.project.videoUrl !== ''">
                    <youtube :video-id="project.videoUrl" ref="youtube" player-width="310" player-height="175"></youtube>
                </v-flex>
                <v-flex md12 my-4 class="d-none d-sm-none d-md-flex d-lg-flex d-xl-flex" v-if="this.project.videoUrl !== ''">
                    <youtube :video-id="project.videoUrl" ref="youtube" player-width="1280" player-height="720"></youtube>
                    
                </v-flex>
              </v-layout>
        
    </v-container>
</div>
</template>

<script>

  export default {
      data() {
        return {

         
        }
      },
      props: ['id'],
      computed: {
        project () {
          return this.$store.getters.loadedProject(this.id)
        },

        loading () {
          return this.$store.getters.loading
        }

      }
    }
  
</script>

