(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["contact"],{"15bc":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-container",{staticClass:"google-font"},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-card",[s("v-card-text",[s("v-container",[s("form",{on:{submit:function(a){return a.preventDefault(),t.onSignup(a)}}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"email",label:"Mail",id:"email",type:"email",required:""},model:{value:t.email,callback:function(a){t.email=a},expression:"email"}})],1)],1),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"password",label:"Password",id:"password",type:"password",required:""},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}})],1)],1),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"confirmPassword",label:"Confirm Password",id:"confirmPassword",type:"password",rules:[t.comparePasswords]},model:{value:t.confirmPassword,callback:function(a){t.confirmPassword=a},expression:"confirmPassword"}})],1)],1),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-btn",{attrs:{type:"submit"}},[t._v(" Sign up "),s("span",{staticClass:"custom-loader",attrs:{slot:"loader"},slot:"loader"},[s("v-icon",{attrs:{light:""}},[t._v("cached")])],1)])],1)],1)],1)])],1)],1)],1)],1)],1)},r=[],i={data:function(){return{email:"",password:"",confirmPassword:""}},computed:{comparePasswords:function(){return this.password!==this.confirmPassword?"Passwords do not match":""},user:function(){return this.$store.getters.user}},watch:{user:function(t){null!==t&&void 0!==t&&this.$router.push("/")}},methods:{onSignup:function(){this.$store.dispatch("signUserUp",{email:this.email,password:this.password})},onDismissed:function(){this.$store.dispatch("clearError")}}},n=i,l=s("2877"),o=s("6544"),c=s.n(o),d=s("8336"),v=s("b0af"),u=s("99d9"),f=s("a523"),m=s("0e8f"),p=s("132d"),h=s("a722"),b=s("8654"),g=Object(l["a"])(n,e,r,!1,null,null,null);a["default"]=g.exports;c()(g,{VBtn:d["a"],VCard:v["a"],VCardText:u["c"],VContainer:f["a"],VFlex:m["a"],VIcon:p["a"],VLayout:h["a"],VTextField:b["a"]})},"6b11":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"fallback"},[s("v-container",{staticClass:"text-center"},[s("v-layout",{staticClass:"my-5",attrs:{row:"",wrap:""}},[s("v-spacer"),t._v(" "),s("h1",[t._v("Opps !")]),t._v(" "),s("v-spacer")],1),s("v-layout",{staticClass:"my-5",attrs:{row:"",wrap:""}},[s("v-spacer"),s("h3",[t._v("Currently you can't view this page without a connection.")]),s("v-spacer")],1),s("v-layout",{staticClass:"my-5",attrs:{row:"",wrap:""}},[s("v-spacer"),s("a",{staticClass:"ma-0 mx-2 py-2 px-5 google-font elevation-1 v-btn v-btn--router theme--light",attrs:{href:"/"}},[t._v("Go to the Homepage")]),s("v-spacer")],1)],1)],1)},r=[],i=s("2877"),n=s("6544"),l=s.n(n),o=s("a523"),c=s("a722"),d=s("2fa4"),v={},u=Object(i["a"])(v,e,r,!1,null,null,null);a["default"]=u.exports;l()(u,{VContainer:o["a"],VLayout:c["a"],VSpacer:d["a"]})},"959e":function(t,a,s){t.exports=s.p+"img/qrcode.784c7d2c.jpg"},"99d9":function(t,a,s){"use strict";s.d(a,"a",(function(){return i})),s.d(a,"b",(function(){return n})),s.d(a,"c",(function(){return l})),s.d(a,"d",(function(){return o}));var e=s("b0af"),r=s("80d2"),i=Object(r["f"])("v-card__actions"),n=Object(r["f"])("v-card__subtitle"),l=Object(r["f"])("v-card__text"),o=Object(r["f"])("v-card__title");e["a"]},b0af:function(t,a,s){"use strict";s("0481"),s("4069"),s("a9e3");var e=s("5530"),r=(s("615b"),s("10d2")),i=s("297c"),n=s("1c87"),l=s("58df");a["a"]=Object(l["a"])(i["a"],n["a"],r["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return Object(e["a"])({"v-card":!0},n["a"].options.computed.classes.call(this),{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},r["a"].options.computed.classes.call(this))},styles:function(){var t=Object(e["a"])({},r["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=i["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var a=this.generateRouteLink(),s=a.tag,e=a.data;return e.style=this.styles,this.isClickable&&(e.attrs=e.attrs||{},e.attrs.tabindex=0),t(s,this.setBackgroundColor(this.color,e),[this.genProgress(),this.$slots.default])}})},b8fa:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"contact google-font"},[e("h1",{staticClass:"subtitle-1 grey--text"},[t._v("Contact "),e("v-container",{staticClass:"my-5"},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:"",md3:""}},[e("span",{staticClass:"headline"},[t._v("QR Code")]),e("p",{staticClass:"subtitle-1 google-sans",staticStyle:{color:"black"}},[t._v(" Now no need to typing, Simply scan this QR Code and save our contact in your phone")]),e("v-img",{staticStyle:{width:"300px"},attrs:{src:s("959e")}})],1),e("v-flex",{attrs:{xs12:"",md1:""}}),e("v-flex",{staticClass:"my-5",attrs:{xs12:"",md7:""}},[e("span",{staticClass:"font-weight-medium display-1"},[t._v("Contact Me:")]),e("v-layout",{staticClass:"my-8",attrs:{row:"",wrap:""}},[e("v-flex",{staticClass:"pa-3",attrs:{xs2:"",md1:""}},[e("i",{staticClass:"fas fa-map-marker-alt",staticStyle:{"font-size":"25px"}})]),e("v-flex",{staticStyle:{color:"black"},attrs:{xs8:"",md10:""}},[t._v("294 Green Land, Majitha-Verka Bye Pass Road, Opp. Fortis Escorts Hospital, Amritsar, Punjab 143001")]),e("v-flex",{attrs:{xs2:"",md1:""}})],1),e("v-layout",{staticClass:"my-1",attrs:{row:"",wrap:""}},[e("v-flex",{staticClass:"pa-3",attrs:{xs2:"",md1:""}},[e("i",{staticClass:"fas fa-phone-alt",staticStyle:{"font-size":"25px"}})]),e("v-flex",{staticClass:"py-1",staticStyle:{color:"black"},attrs:{xs8:"",md10:""}},[t._v("+91 7087216873")]),e("v-flex",{attrs:{xs2:"",md1:""}})],1),e("v-layout",{staticClass:"my-1",attrs:{row:"",wrap:""}},[e("v-flex",{staticClass:"pa-3",attrs:{xs2:"",md1:""}},[e("i",{staticClass:"fas fa-envelope",staticStyle:{"font-size":"25px"}})]),e("v-flex",{staticClass:"py-2",staticStyle:{color:"black"},attrs:{xs8:"",md10:""}},[t._v("anumeearts@gmail.com")]),e("v-flex",{attrs:{xs2:"",md1:""}})],1),e("v-layout",{staticStyle:{"font-size":"200%","margin-top":"25px","margin-bottom":"50px"}},[e("span",{staticClass:"mx-2"},[e("a",{staticClass:"v-btn v-btn--flat v-btn--icon theme--light",attrs:{href:"https://www.facebook.com/akhilbansalaggarwal",target:"_blank"}},[e("div",{staticClass:"v-btn__content"},[e("i",{staticClass:"fab fa-facebook-square"})])])]),e("span",{staticClass:"mx-2"},[e("a",{staticClass:"v-btn v-btn--flat v-btn--icon theme--light",attrs:{href:"https://www.instagram.com/artist.akhilaggarwal/",target:"_blank"}},[e("div",{staticClass:"v-btn__content"},[e("i",{staticClass:"fab fa-instagram-square"})])])]),e("span",{staticClass:"mx-2"},[e("a",{staticClass:"v-btn v-btn--flat v-btn--icon theme--light",attrs:{href:"https://www.linkedin.com/in/akhilbansalaggarwal/",target:"_blank"}},[e("div",{staticClass:"v-btn__content"},[e("i",{staticClass:"fab fa-linkedin"})])])]),e("span",{staticClass:"mx-2"},[e("a",{staticClass:"v-btn v-btn--flat v-btn--icon theme--light",attrs:{href:"https://github.com/akhilbansalaggarwal",target:"_blank"}},[e("div",{staticClass:"v-btn__content"},[e("i",{staticClass:"fab fa-github-square"})])])]),e("span",{staticClass:"mx-2"},[e("a",{staticClass:"v-btn v-btn--flat v-btn--icon theme--light",attrs:{href:"https://www.youtube.com/channel/UCN-E-vxDrkV3Xa6keeM7ORA?",target:"_blank"}},[e("div",{staticClass:"v-btn__content"},[e("i",{staticClass:"fab fa-youtube-square"})])])]),e("span",{staticClass:"mx-2"},[e("a",{staticClass:"v-btn v-btn--flat v-btn--icon theme--light",attrs:{href:"https://medium.com/@akhil_aggarwal",target:"_blank"}},[e("div",{staticClass:"v-btn__content"},[e("i",{staticClass:"fab fa-medium"})])])])])],1),e("v-flex",{attrs:{xs12:"",md1:""}})],1)],1)],1)])},r=[],i={name:"Contact"},n=i,l=s("2877"),o=s("6544"),c=s.n(o),d=s("a523"),v=s("0e8f"),u=s("adda"),f=s("a722"),m=Object(l["a"])(n,e,r,!1,null,null,null);a["default"]=m.exports;c()(m,{VContainer:d["a"],VFlex:v["a"],VImg:u["a"],VLayout:f["a"]})}}]);
//# sourceMappingURL=contact.67b41c8e.js.map