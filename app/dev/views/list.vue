<style lang="sass">
@import 'mixin.scss';

</style>

<template>
  <div class="item-view">
   <h1>标题2</h1>
   <div>这是组件2的内容</div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      item: {},
      comments: [],
      pollOptions: null
    }
  },
  
  computed: {
   
  }
}
</script>