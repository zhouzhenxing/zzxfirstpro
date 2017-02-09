<style lang="sass">
@import 'mixin.scss';
h1{
  text-align:center;
}
.item-view{
  width:100%;
  height:100%;
  background:#f5f7f7;
}
</style>

<template>

  <div class="item-view">
   <nav-bar :NavOption="navoption"></nav-bar>
   <list-item v-for="item in list" :ItemData="item">
   </list-item>
  </div>
</template>

<script>
import NavBar from '../component/nav-bar.vue';
import ListItem from '../component/list-item.vue';

export default {
  data () {
    return {
      list:[
        {
          name:'折叠组件',
          link:'/accdisp'
        },
        {
          name:'倒计时组件',
          link:'/list'
        },
        {
          name:'倒计时',
          link:'/list'
        },
        {
          name:'选项5',
          link:'/list'
        },
        {
          name:'选项6',
          link:'/list'
        },
        {
          name:'选项7',
          link:'/list'
        },
        {
          name:'选项4',
          link:'/list'
        },
        {
          name:'选项5',
          link:'/list'
        },
        {
          name:'选项6',
          link:'/list'
        },
        {
          name:'选项7',
          link:'/list'
        },
        {
          name:'选项三',
          link:'/list'
        }
      ],
      navoption:{
        title:'主页面导航栏',
        navstyle:'fixed',
        navbtn:'left'
      }
    }
  },
  computed: {
   
  },
  components:{
    NavBar,
    ListItem
  }
}
</script>
