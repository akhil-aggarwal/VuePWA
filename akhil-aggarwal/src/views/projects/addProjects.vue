<template class="google-font">
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h4>Create a new Project</h4>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="onCreateProject">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="title"
                label="Title"
                id="title"
                v-model="title"
                required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="subtitle"
                label="Subtitle"
                id="subtitle"
                v-model="subtitle"
                required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="videoUrl"
                label="Video URL"
                id="video-url"
                v-model="videoUrl"
                ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="imageUrl"
                label="Image URL"
                id="image-url"
                v-model="imageUrl"
                required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3 my-3>
              <v-img :src="imageUrl" ></v-img>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-textarea
                name="description"
                label="Description"
                id="description"
                v-model="description"
                required></v-textarea>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs12  sm6 offset-sm3>
              <v-date-picker v-model="date"> </v-date-picker>
            </v-flex>
            <v-flex xs12  sm6 offset-sm3 my-3>
              <v-time-picker v-model="time"></v-time-picker>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3 my-3> 
              <v-btn
                class="primary"
                :disabled="!formIsValid"
                type="submit">Create Project</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        subtitle: '',
        imageUrl: '',
        videoUrl: '',
        description: '',
        date: '',
        time: new Date()
      }
    },
    computed: {
      formIsValid () {
        return this.title !== '' && this.subtitle !== '' && this.imageUrl !== '' && this.description !== ''
      },
      submittableDateTime () {
        const date = new Date(this.date)
        if (typeof this.time === 'string') {
          let hours = this.time.match(/^(\d+)/)[1]
          const minutes = this.time.match(/:(\d+)/)[1]
          date.setHours(hours)
          date.setMinutes(minutes)
        } else {
          date.setHours(this.time.getHours())
          date.setMinutes(this.time.getMinutes())
        }
        return date
      }
    },
    methods: {
      onCreateProject () {
        if (!this.formIsValid) {
          return
        }
        const projectData = {
          title: this.title,
          subtitle: this.subtitle,
          imageUrl: this.imageUrl,
          videoUrl: this.videoUrl,
          description: this.description,
          date: this.submittableDateTime
        }
        this.$store.dispatch('createProject', projectData)
        this.$router.push('/projects')
      }
    }
  }
</script>