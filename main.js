
Vue.component('cards',{
  template:'<div class="box"><div class="card"><div v-for="card in cards"><div class="button_area_wrap" :class="{ \'is-active\':card.isActive}"><div class="button_area"><a class="button is-outlined is-black is-large" @click="skipCard(card)">Skip</a><a class="button is-danger is-large is-outlined">Thanks!</a></div></div></div><slot></slot><div class="section"></div></div></div>',
  data(){
    return {cards:[]};
  },
  created(){
    this.cards=this.$children;
  },
  methods:{
    skipCard(skipCard){
        this.cards.forEach(card=>{
          card.isActive= (card.name == skipCard.name);
        });
    }
  }
});

Vue.component('card',{
  template:'<div v-show="isActive"><div class="card-image"><figure class="image is-4by3"><img :src="url" alt="Image"></figure></div><div class="card-content"><div class="media"><div class="media-content"><p class="title is-4">{{name}} {{old}}olds {{city}}</p><p class="subtitle is-6"><i class="fa fa-commenting-o" aria-hidden="true"></i> Im so free!</p></div></div><hr><p class="title is-4">Introduction</p><div class="content">{{content}}</div><hr><slot></slot></div></div>',
  data(){
    return{
      isActive:false
    };
  },
  props:{
    name:{required:true},
    city:{required:true},
    old:{required:true},
    url:{required:true},
    content:{required:true},
    selected:{default:false}
  },
  mounted(){
    this.isActive=this.selected;
  },
});
Vue.component('nav_area',{
  template:'<div class="hero is-primary"><div class="hero-body"><div class="container"><h1 class="title">Pairs_Spa</h1></div></div></div>',
});
new Vue({
  el:'#app',
});
