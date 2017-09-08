<template>
<slider :pages="pages" :sliderinit="sliderinit">
  <!-- slot  -->
</slider>
<!-- <p>{{urls}}</p> -->
</template>

<script>
import slider from 'vue-concise-slider'
export default {
  name: 'hello',
  data () {
    return {
      pages: [
        {
          title: '',
          style: {
            background: this.urls[0]
          }
        },
        {
          title: '',
          style: {
            background: this.urls[1]
          }
        }
      ],
      sliderinit: {
        currentPage: 0, // 当前页码
        thresholdDistance: 500, // 滑动判定距离
        thresholdTime: 50, // 滑动判定时间
        loop: false, // 循环滚动
        direction: 'horizontal', // 方向设置，垂直滚动
        infinite: 1, // 无限滚动前后遍历数
        slidesToScroll: 1//  每次滑动项数
      }
    }
  },
  props: ['urls'],
  // created: function(){
  //   let dataLi = [
  //       title: '',
  //       style: {
  //         background: this.url
  //       }
  //   ];
  // }
  components: {
    slider
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
