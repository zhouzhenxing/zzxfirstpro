<style lang="sass">
@import 'mixin.scss';
.nav-bar{
  display: block;
  // width: 100%;
  // height: rem(100);
}
.fixed{
  position:fixed;
  width: 100%;
  top:0;
  left: 0;
}
.absolute{
  position:absolute;
  width: 100%;
  top:0;
  left: 0;
}
.nav-content{
  display: block;
  background:#FAFAFA;
  border-bottom: 1px solid #e0e0e0;
  height: rem(100);
  line-height: rem(100);
  text-align: center;
  position:relative;
}
.nav-title{
  display: block;
  width: 100%;
  text-align: center;
}
.nav-btn{
  display: block;
  height: rem(100);
  width: rem(100);
  line-height: rem(100);
  text-align: center;
  position:absolute;
  top:0;
  z-index: 100;
}
.btn-left{
  left:0;
}
.btn-right{
  right:0;
}
.empty-block{
  display: block;
  height: rem(100);
  width: 100%;
}
</style>

<template>
  <div class="nav-bar">
    <div :class="navstyle">
    <div class="nav-content">
      <div class="nav-btn" :class="navbtnpostion" v-if="navshow">返回</div>
      <div class="nav-title">{{NavOption.title}}</div>
    </div>
    </div>
    <div class="empty-block"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {};
  },
  computed:{
    navstyle(){
      let navPostion={
        'absolute':'absolute',
        'fixed':'fixed'
      }
      if(this.NavOption && this.NavOption.navstyle){
        return navPostion[this.NavOption.navstyle];
      }else{
        return navPostion['absolute']
      }
    },
    navbtnpostion(){
      let btnposion={
        'left':'btn-left',
        'right':'btn-right'
      }
      if(this.NavOption && this.NavOption.navbtn){
        return btnposion[this.NavOption.navbtn];
      }
    },
    navshow(){
      if(this.NavOption && this.NavOption.navbtn && (this.NavOption.navbtn=='left'||this.NavOption.navbtn=='right')){
        return true;
      }else{
        return false;
      }
    }
  },
  props:{
      NavOption:Object
  }
}
</script>