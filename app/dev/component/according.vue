<style lang="sass">
@import 'mixin.scss';

</style>

<template>
  <div class="list-item">
  	<slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      item: "选项一"
    }
  },
  props:{
      ItemData:Object
  }
}
</script>