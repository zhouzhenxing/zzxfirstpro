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
   <nav-bar></nav-bar>
   <list-item v-for="item in list">
     <div>{{item.value}}</div>
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
        {value:'选项一'},
        {value:'选项二'},
        {value:'选项三'}
      ]
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
