<template>
<div id="app" class="container">
  <navArea></navArea>
  <div class="box">
    <transition-group name="card" tag="ul">
      <li v-for="(card,index) in cards" class="card" v-bind:key="index" v-if="card.isActive">
        <div class="card-image">
          <figure class="image">
            <hello :urls="card.url"></hello>
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4" v-cloak>{{card.name}} {{card.old}}olds {{card.city}}</p>
              <p class="subtitle is-6"><i class="fa fa-commenting-o" aria-hidden="true"></i> Im so free!</p>
            </div>
          </div>
          <hr>
          <p class="title is-4">Introduction</p>
          <div class="content" v-cloak>{{card.content}}</div>
          <hr>
          <div class="tags">
            <span class="tag is-rounded is-outlined is-primary">vue</span>
            <span class="tag is-rounded is-outlined is-primary">fw</span>
            <span class="tag is-rounded is-outlined is-primary">launch</span>
          </div>
        </div>
        <div class="section"></div>
        <div class="button_area_wrap" :class="is-active" v-bind:style="{'z-index' : ''+cards.length-index+''}">
          <div class="button_area">
            <a class="button is-outlined is-black is-large" @click="skipCard(card)">Skip</a>
            <a class="button is-danger is-large is-outlined" @click="modalVisible=true">Thanks!</a>
          </div>
        </div>
        <overlay v-show="modalVisible" @close="modalVisible=false">
          <div class="bd-callout is-primary">
            <p>　Congrats!Your best couple!</p>
            <a class="button is-primary is-large is-inverted is-outlined columns is-centered" @click="thanks(card)">Next!</a>
          </div>
        </overlay>
      </li>
    </transition-group>
    <li v-show="lastLiVisible">empty!</li>
  </div>
</div>
</template>

<script>
import navArea from './components/nav_area'
import hello from './components/Hello'
import overlay from './components/overlay'
export default {
  name: 'app',
  components: {
    navArea,
    hello,
    overlay
  },
  methods: {
    skipCard: function(card) {
      // card.isActive=false;
      // console.log(card.isActive);
      // this.cards.splice(this.cards.indexOf(card), 1);

      if (this.cards.indexOf(card) === 2) {
        this.cards[this.cards.indexOf(card)].isActive = false;
        this.lastLiVisible = true;
      } else {
        this.cards[this.cards.indexOf(card)].isActive = false;
        this.cards[this.cards.indexOf(card) + 1].isActive = true;
      }
      // console.log(card.name);
    },
    thanks: function(card) {
      // console.log(card.isActive);
      // this.cards.splice(this.cards.indexOf(card), 1);
      if (this.cards.indexOf(card) === 2) {
        this.cards[this.cards.indexOf(card)].isActive = false;
        this.lastLiVisible = true;
        this.modalVisible = false;
      } else {
        this.cards[this.cards.indexOf(card)].isActive = false;
        this.cards[this.cards.indexOf(card) + 1].isActive = true;
        this.modalVisible = false;
      }

      // card.isActive=false;
      // console.log(card.name);
    }
  },
  data: function() {
    return {
      cards: [{
          name: 'ketty',
          city: 'tokyo',
          old: '31',
          url: [
            'url(static/img/profile_img1.jpg)',
            'url(static/img/profile_img1-1.jpg)'
          ],
          content: '1Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris.',
          isActive: true
        },
        {
          name: 'micky',
          city: 'tokyo',
          old: '28',
          url: [
            'url(static/img/profile_img2.jpg)',
            'url(static/img/profile_img2-1.jpg)'
          ],
          content: '2Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris.',
          isActive: false
        },
        {
          name: 'chaly',
          city: 'tokyo',
          old: '48',
          url: [
            'url(static/img/profile_img3.jpg)',
            'url(static/img/profile_img3-1.jpg)'
          ],
          content: '3Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris.',
          isActive: false
        }
      ],
      modalVisible: false,
      lastLiVisible: false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.box{
  text-align: left;
}
.slider-container {
  margin: 0;
  width: 100%;
  height: 400px;
}
</style>
