<style lang="sass">
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
   <h1>标题</h1>
  </div>
</template>

<script type="label">
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
