<template>
  <div class="404">
    <group>
      <x-input title="姓名" v-model="info.name"></x-input>
    </group>
    <group>
      <x-input title="电话" v-model="info.phone"></x-input>
    </group>
    <group>
      <x-input title="备注" v-model="info.remark"></x-input>
    </group>
  </div>
</template>

<script>
import { getUserInfo } from '@/api'
export default {
  name: 'info',
  data() {
    return { info: {} }
  },
  components: {},
  computed: {},
  methods: {
    login() {
      this.$router.push('/404')
    }
  },
  created() {
    const that = this
    getUserInfo().then(res => {
      that.info = res.data
    })
  },
  mounted() {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
</style>
