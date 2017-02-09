<style lang="sass">
@import 'mixin.scss';
.list-item{
	height:rem(118);
	line-height:rem(118);
	font-size:rem(28);
	padding-left:rem(30);
	margin-top:rem(20);
	background:#ffffff;
}
</style>

<template>
  <div class="list-item" v-on:click="gotopage">
  	<div>{{ItemData.name}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      item: "选项一"
    }
  },
  methods:{
    gotopage(){
      console.log('this',this);
      this.$router.push({path:this.ItemData.link});
    }
  },
  props:{
      ItemData:{
        type:Object,
        required:false
      }
  }
}
</script>

