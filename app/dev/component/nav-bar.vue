<style lang="sass">
@import 'mixin.scss';
.nav-bar{
  display: block;
  height: rem(100);
}
.nav-content{
  display: block;
  background:#FAFAFA;
  border-bottom: 1px solid #e0e0e0;
  height: rem(100);
  line-height: rem(100);
  text-align: center;
}
.nav-btn{
  display: block;
  height: rem(100);
  width: rem(100);
  line-height: rem(100);
  text-align: center;
}
</style>

<template>
  <div class="nav-bar">
    <div class="nav-btn">返回</div>
    <div class="nav-content">{{item}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      item: "导航栏"
    }
  },
  props:{
      NavOption:Object
  }
}
</script>