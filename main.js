Vue.component('nav_area',{
  template:'<div class="hero is-primary"><div class="hero-body"><div class="container"><h1 class="title">Pairs_Spa</h1></div></div></div>',
});
Vue.component('modal',{
  template:'<div class="modal is-active"><div class="modal-background"></div><div class="modal-content"><slot></slot></div><button class="modal-close is-large" aria-label="close" @click="$emit(\'close\')"></button></div>',
});

new Vue({
  el:'#app',
  data:{
    cards:[{
      name:"ketty",
      city:"tokyo",
      old:"31",
      url:[
        "assets/profile_img1.jpg",
        "assets/profile_img1-1.jpg"
      ],
      content:"1Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris.",
      isActive:true
    },
    {
      name:"micky",
      city:"tokyo",
      old:"28",
      url:[
        "assets/profile_img2.jpg",
        "assets/profile_img2-1.jpg"
      ],
      content:"2Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris.",
      isActive:false
    },
    {
      name:"chaly",
      city:"tokyo",
      old:"48",
      url:[
        "assets/profile_img3.jpg",
        "assets/profile_img3-1.jpg"
      ],
      content:"3Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris.",
      isActive:false
    }],
    modalVisible:false,
    lastLiVisible:false
  },
  methods: {
    skipCard(card) {
      // card.isActive=false;
      console.log(card.isActive);
      // this.cards.splice(this.cards.indexOf(card), 1);

      if(this.cards.indexOf(card)==2){
        this.cards[this.cards.indexOf(card)].isActive=false;
        this.lastLiVisible=true;
      }else{
        this.cards[this.cards.indexOf(card)].isActive=false;
        this.cards[this.cards.indexOf(card)+1].isActive=true;
      }
      console.log(card.name);
    },
    thanks(card){
      console.log(card.isActive);
      // this.cards.splice(this.cards.indexOf(card), 1);
      if(this.cards.indexOf(card)==2){
        this.cards[this.cards.indexOf(card)].isActive=false;
        this.lastLiVisible=true;
        this.modalVisible=false;
      }else{
        this.cards[this.cards.indexOf(card)].isActive=false;
        this.cards[this.cards.indexOf(card)+1].isActive=true;
        this.modalVisible=false;
      }

      // card.isActive=false;
      console.log(card.name);
    }
  },
  computed:{
    zindexV:function(index){
      return this.cards.length-1-index;
    }
  }
});
