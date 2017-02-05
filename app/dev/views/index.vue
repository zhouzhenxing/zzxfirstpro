<script>
export default {
  data () {
    return {
      item: {name:"随便写的一段内容"},
      comments: [],
      pollOptions: null
    }
  },
  computed: {
   
  }
}
</script>

<style lang="sass">
h1{
  
}
</style>

<template>
  <div class="item-view">
   <h1>标题</h1>
   <div>{{item.name}}</div>
  </div>
</template>

