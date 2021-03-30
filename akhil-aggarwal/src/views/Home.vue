<template>
  <div class="home google-font"  >

    
    <v-container class="my-6"> 
    
    <v-layout row wrap justify-space-around>
    <v-flex xs12 sm12 md1></v-flex>
      <v-flex xs12 sm12 md5 pa-3>
        <v-img src="../assets/home/profile.png" width="400px" class="mx-auto" align="center"></v-img>
      </v-flex>
      
      <v-flex xs12 sm12 md5 class="google-font mt-8">
       <!--Desktop-->
          <span style="font-size: 2.5rem; color: #616161;" class="d-none d-xs-none d-sm-none d-md-flex ">Hi!<br></span>
          <span>  
            <span class="font-weight-medium d-none d-md-flex" style="margin-top: -10px; font-size: 3rem; color: #616161;">I am <br></span>  
            <h1 style="margin-top: -20px">
            <div class="typed-text google-font d-none d-md-flex" style="height: 80px">{{ typeValue }}</div>
            <div class="cursor d-none d-md-flex" :class="{'typing': typeStatus}">&nbsp; </div>
            </h1>
          </span> 

      <!--Tablet-->
             <v-flex class="d-none d-xs-none d-sm-flex d-md-none">
           <p class="text-center mx-auto" style="font-size: 2rem; color: #616161;" >Hi!
          <br><span style="font-size: 2.5rem; color: #616161;" class="font-weight-medium">I am</span>
          <br>
            <span id="mobile-type" style="font-size: 3rem" class="font-weight-medium">
            <div class="typed-text google-font d-xs-flex d-sm-flex d-md-none" style="color: #1A73E8; height: 70px;" >{{ typeValue }}</div>
            <div class="cursor d-xs-flex d-sm-flex d-md-none" :class="{'typing': typeStatus}">&nbsp; </div>
            </span>
         
          </p>  
          
          </v-flex>     

      <!--Mobile-->  
          <v-flex class="d-flex d-xs-none d-sm-none d-md-none">
          <p class="text-center mx-auto" style="font-size: 1.5rem; color: #616161;" >Hi!
          <br><span style="font-size: 2rem; color: #616161;" class="font-weight-medium">I am</span>
          <br>
            <span id="mobile-type" style="font-size: 2.3rem" class="font-weight-medium">
            <div class="typed-text google-font d-xs-flex d-sm-flex d-md-none" style="color: #1A73E8; height: 50px;" >{{ typeValue }}</div>
            <div class="cursor d-xs-flex d-sm-flex d-md-none" :class="{'typing': typeStatus}">&nbsp; </div>
            </span>
         
          </p>  
          </v-flex> 
            
      <v-layout>
          <p class="google-font d-none d-md-flex " style="font-size: 110%;">Believe that learning is a life time process. Eager to learn and create new things.</p>
          <p class="google-font d-sm-flex d-md-none text-center mx-auto px-2" style="font-size: 140%;">Believe that learning is a life time process. Eager to learn and create new things.</p>
          </v-layout>
          <v-layout style="font-size: 200%;" class="d-xs-flex d-sm-flex d-md-none mx-auto">
            <v-spacer></v-spacer>
              <span class="mx-2">
                  <a href="https://www.facebook.com/akhilbansalaggarwal" target="_blank" class="v-btn v-btn--flat v-btn--icon theme--light">
                    <div class="v-btn__content">
                      <i class="fab fa-facebook-square"></i>
                    </div>
                  </a>
              </span>

              <span class="mx-2">
                  <a href="https://www.instagram.com/artist.akhilaggarwal/" target="_blank" class="v-btn v-btn--flat v-btn--icon theme--light">
                    <div class="v-btn__content">
                       <i class="fab fa-instagram-square"></i>
                    </div>
                  </a>
              </span>

              <span class="mx-2">
                  <a href="https://www.linkedin.com/in/akhilbansalaggarwal/" target="_blank" class="v-btn v-btn--flat v-btn--icon theme--light">
                    <div class="v-btn__content">
                       <i class="fab fa-linkedin"></i>
                    </div>
                  </a>
              </span>

               <span class="mx-2">
                  <a href="https://github.com/akhilbansalaggarwal" target="_blank" class="v-btn v-btn--flat v-btn--icon theme--light">
                    <div class="v-btn__content">
                       <i class="fab fa-github-square"></i>
                    </div>
                  </a>
              </span>
            <v-spacer></v-spacer>
            
         </v-layout>

        

         <v-layout style="font-size: 200%;" class="d-none d-sm-none d-md-flex">
              <span class="mx-2">
                  <a href="https://www.facebook.com/akhilbansalaggarwal" target="_blank" class="v-btn v-btn--flat v-btn--icon theme--light">
                    <div class="v-btn__content">
                      <i class="fab fa-facebook-square"></i>
                    </div>
                  </a>
              </span>

              <span class="mx-2">
                  <a href="https://www.instagram.com/artist.akhilaggarwal/" target="_blank" class="v-btn v-btn--flat v-btn--icon theme--light">
                    <div class="v-btn__content">
                       <i class="fab fa-instagram-square"></i>
                    </div>
                  </a>
              </span>

              <span class="mx-2">
                  <a href="https://www.linkedin.com/in/akhilbansalaggarwal/" target="_blank" class="v-btn v-btn--flat v-btn--icon theme--light">
                    <div class="v-btn__content">
                       <i class="fab fa-linkedin"></i>
                    </div>
                  </a>
              </span>

               <span class="mx-2">
                  <a href="https://github.com/akhilbansalaggarwal" target="_blank" class="v-btn v-btn--flat v-btn--icon theme--light">
                    <div class="v-btn__content">
                       <i class="fab fa-github-square"></i>
                    </div>
                  </a>
              </span>
            
            
         </v-layout>

         <v-layout class="d-xs-flex d-sm-flex d-md-none mx-auto my-5">
           <v-spacer></v-spacer>
           <a href="/about" class="ma-0 mx-2 py-2 px-5 google-font elevation-1 v-btn v-btn--router theme--light" target="_blank" route="" style="background-color: rgb(53, 131, 235); border-color: rgb(53, 131, 235); text-transform: capitalize; border-radius: 5px; color: white;"><div class="v-btn__content">About</div></a> &nbsp;
            <a href="/projects" class="ml-0 mx-2 py-2 px-5 v-btn v-btn-outline v-btn--depressed v-btn--router" target="_blank" route="" style="text-transform: capitalize; border-radius: 5px;"><div class="v-btn__content">Explore Projects</div></a>
         <v-spacer></v-spacer>
         </v-layout>

         <v-layout  class="d-none d-sm-none d-md-flex my-5  ">
           <a href="/about" class="ma-0 mx-2 py-2 px-5 google-font elevation-1 v-btn v-btn--router theme--light" target="_blank" route="" style="background-color: rgb(53, 131, 235); border-color: rgb(53, 131, 235); text-transform: capitalize; border-radius: 5px; color: white;"><div class="v-btn__content">About</div></a>
          <a href="/projects" class="ml-0 mx-2 py-2 px-5 v-btn v-btn-outline v-btn--depressed v-btn--router" target="_blank" route="" style="text-transform: capitalize; border-radius: 5px;"><div class="v-btn__content">Explore Projects</div></a>
         </v-layout>
      
      
      </v-flex>
      
      <v-flex xs12 md1>
        
      </v-flex>

      
    </v-layout> 

    <v-layout row wrap justify-space-around class="my-5">
      <v-flex xs12 sm12 md1>
      </v-flex>
      <v-flex xs12 sm12 md10>
        <v-layout row wrap justify-center class="text-center google-sans mt-5">
          <h1 style="color: #616161; font-size: 3rem">Tools I Use </h1>
          <p class="my-3 mx-3" style="font-size: 1.3rem">I started learning these tool when I was in Standard 7. It has been 5 years of Journey and I have learned all these tools. I keep on working on new technologies and tools. I love learning and creating new things. 
            I believe world is an open book where knowledge is free for those who are really intrested. I learn up new things whenever I get a chance.  
          </p>
        </v-layout>
            
            <v-layout row wrap justify-center>
          
            <span v-for="cicon in cicons" :key="cicon.id" class="ma-3  pa-2 " > 
            <v-img   :src="cicon.src" :key="cicon.id" alt="" srcset="" style="max-width: 8.5vh;"></v-img>
            </span>
          </v-layout>
          <v-layout row wrap justify-center>
              <span v-for="wicon in wicons" :key="wicon.id" class="ma-3 pa-2 py-auto" > 
            <v-img   :src="wicon.src" :key="wicon.id" alt="" srcset="" :style="{'max-width': wicon.width , 'max-height': '8.5vh'}"></v-img>
            </span>


        </v-layout>
      </v-flex>
      <v-flex xs12 sm12 md1>
      </v-flex>
    </v-layout> 


    <v-layout row wrap class="mt-10">
      <v-flex xs12 sm12 md1></v-flex>
      <v-flex xs12 sm12 md10 >
      <h2 style="color: #616161; font-size: 2rem" >My Clients</h2>
      </v-flex>
      <v-flex xs12 sm12 md1></v-flex>
      </v-layout>

    <v-layout row wrap justify-space-around class="pa-4">
      
      <v-flex xs12 sm12 md1>
      </v-flex>
      <v-flex xs12 sm12 md5 >
       
        <v-layout row wrap class="my-2">
          
            <v-layout row wrap class="my-5" >

              <v-flex xs4 sm2 md2>

                <div style="height: 100px; width: 100px;">
                  <v-img src="../assets/home/bansal.png"></v-img>
                </div>

                </v-flex>
                <v-flex sm1 md1></v-flex>

              <v-flex xs8 sm5 md5>

                <div>
              <div class="google-font" style="color: rgb(66, 66, 66); font-size: 130%;">GEP GOURMETS</div>
              <div class="google-font" style="font-size: 90%;">
              <span class="text--primary"><b>Projects:</b> </span> Logo Design, Booklet Design, Label Design, Pouch Design, Web Design, Exhibition Stall Design & 3D Model
              </div>
              </div>
              
              </v-flex>

              <v-flex xs8 sm4 md4></v-flex>

            </v-layout>
            
          <v-layout row wrap class="my-5" >

              <v-flex xs4 sm2 md2>

                <div style="height: 100px; width: 100px;">
                  <v-img src="../assets/home/clarissa.png"></v-img>
                </div>

                </v-flex>
                <v-flex sm1 md1></v-flex>

              <v-flex xs8 sm5 md5>

                <div>
              <div class="google-font" style="color: rgb(66, 66, 66); font-size: 130%;">CLARISSA RESORTS</div>
              <div class="google-font" style="font-size: 90%;">
              <span class="text--primary"><b>Projects:</b></span> Booklet Design, Corporate Filming, E-gretting videos, Photography 
              </div>
              </div>
              
              </v-flex>

              <v-flex xs8 sm4 md4></v-flex>

          </v-layout>

          <v-layout row wrap class="my-5" >

              <v-flex xs4 sm2 md2>

                <div style="height: 100px; width: 100px;">
                  <v-img src="../assets/home/marshal.png"></v-img>
                </div>

                </v-flex>
                <v-flex sm1 md1></v-flex>

              <v-flex xs8 sm5 md5>

                <div>
              <div class="google-font" style="color: rgb(66, 66, 66); font-size: 130%;">MARSHAL ENGINEERS</div>
            <div class="google-font" style="font-size: 90%;">
              <span class="text--primary"><b>Projects:</b></span> Logo Design, Booklet Design, Web Design 
              </div>
              </div>
              
              </v-flex>

              <v-flex xs8 sm4 md4></v-flex>

          </v-layout>

          
              
          </v-layout>
            
      </v-flex>
      <v-flex xs12 sm12 md5>
        <v-layout row wrap class="my-2">

        <v-layout row wrap class="my-5" >

              <v-flex xs4 sm2 md2>

                <div style="height: 100px; width: 100px;">
                  <v-img src="../assets/home/narang.png"></v-img>
                </div>

                </v-flex>
                <v-flex sm1 md1></v-flex>

              <v-flex xs8 sm5 md5>

                <div>
              <div class="google-font" style="color: rgb(66, 66, 66); font-size: 130%;">NARANG BAKERY</div>
            <div class="google-font" style="font-size: 90%;">
              <span class="text--primary"><b>Projects:</b></span> Web Design, Photography
              </div>
              </div>
              
              </v-flex>

              <v-flex xs8 sm4 md4></v-flex>

        </v-layout>

           <v-layout row wrap class="my-5" >

              <v-flex xs4 sm2 md2>

                <div style="height: 100px; width: 100px;">
                  <v-img src="../assets/home/global.png"></v-img>
                </div>

                </v-flex>
                <v-flex sm1 md1></v-flex>

              <v-flex xs8 sm5 md5>

                <div>
              <div class="google-font" style="color: rgb(66, 66, 66); font-size: 130%;">GLOBAL ORGANICS</div>
              <div class="google-font" style="font-size: 90%;">
              <span class="text--primary"><b>Projects:</b></span> E-Invitation for Exhibition 
              </div>
              </div>
              
              </v-flex>

              <v-flex xs8 sm4 md4></v-flex>

          </v-layout>

          
        
        </v-layout>
      </v-flex>
      
      <v-flex xs12 sm12 md1>
      </v-flex>

    </v-layout>
  
  </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import { setTimeout } from 'timers';

export default {
  name: 'Home',
  data: () => {
    return {
      typeValue: '',
      typeStatus: false,
      typeArray: ['a Graphic Designer', 'a Web Designer', 'a 3D Modeler', 'Akhil Aggarwal'],
      typingSpeed: 120,
      erasingSpeed: 50,
      newTextDelay: 1200,
      typeArrayIndex: 0,
      charIndex: 0,
      cicons: [
        {src:'https://cdn.worldvectorlogo.com/logos/photoshop-cc.svg', id: '1'},
        {src:'https://cdn.worldvectorlogo.com/logos/premiere-cc.svg', id: '2'},
        {src:'https://cdn.worldvectorlogo.com/logos/after-effects-cc.svg', id: '3'},
        {src:'https://cdn.worldvectorlogo.com/logos/corel-draw-x8.svg', id: '4'},
        {src:'https://cdn.worldvectorlogo.com/logos/3ds-max-full.svg', id: '5'},
        {src:'https://cdn.worldvectorlogo.com/logos/maya-2017.svg', id: '6'},

      ],

      wicons: [
        {src:'https://cdn.worldvectorlogo.com/logos/html-5.svg', width: '6.1vh', id: '7'},
        {src:'https://cdn.worldvectorlogo.com/logos/css-5.svg', width: '6.1vh', id: '8'},
        {src:'https://cdn.worldvectorlogo.com/logos/javascript.svg', width: '8.5vh', id: '9'},
        {src:'https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg', width: '8.5vh', id: '10'},
        {src:'https://cdn.worldvectorlogo.com/logos/vue-js-1.svg', width: '8.5vh', id: '11'},
        {src:'https://cdn.worldvectorlogo.com/logos/vuetify.svg', width: '7.5vh', id: '12'},
        {src:'https://cdn.worldvectorlogo.com/logos/firebase-1.svg', width: '6vh', id: '13'},
        {src:'https://cdn.worldvectorlogo.com/logos/jquery-1.svg', width: '30vh', id: '14'},
        {src:'https://cdn.worldvectorlogo.com/logos/pwa-logo.svg', width: '16vh', id: '15'},
        {src:'https://cdn.worldvectorlogo.com/logos/nodejs.svg', width: '20vh', id: '16'},   

      ]

    }
  },
  methods: {
    typeText() {
      if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if(!this.typeStatus)
          this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      }
      else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if(this.charIndex > 0) {
        if(!this.typeStatus)
          this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      }
      else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if(this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    }
  },

  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  }
}
</script>

<style lang="scss" scoped>
 
  
  h1 {
    font-size: 3.5rem;
    div.typed-text {
      color: #1A73E8;
    }
 
    div.cursor {
      display: inline-block;
      margin-left: 3px;
      width: 4px;
      background-color: #fff;
      animation: cursorBlink 1s infinite;
    }
    div.cursor.typing {
      animation: none;
    }
  }
  @keyframes cursorBlink {
    49% { background-color: #fff; }
    50% { background-color: transparent; }
    99% { background-color: transparent; }
  }
</style>
