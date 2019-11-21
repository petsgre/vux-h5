<template>
  <div class="hello">
    <group>
      <cell title="title" value="value"></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Group,
    Cell
  },
  mounted() {
    this.$vux.alert.show({
      title: 'Vux is Cool',
      content: 'Do you agree?',
      onShow() {
        console.log("Plugin: I'm showing")
      },
      onHide() {
        console.log("Plugin: I'm hiding")
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
