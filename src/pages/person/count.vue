<template>
  <div class="count">
    <x-table>
      <thead>
        <tr>
          <th>正在预约</th>
          <th>{{info.obj1 || 0}}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>已完成</td>
          <td>{{info.obj2 || 0}}</td>
        </tr>
      </tbody>
    </x-table>
  </div>
</template>

<script>
import { XTable } from 'vux'

import { getOrderCount } from '@/api'
export default {
  name: 'info',
  data() {
    return {
      info: {
        obj1: 0,
        obj2: 0
      }
    }
  },
  components: {
    XTable
  },
  computed: {},
  methods: {},
  created() {
    const that = this
    getOrderCount().then(res => {
      that.info.obj1 = (res.data[0] && res.data[0].count) || 0
      that.info.obj2 = (res.data[1] && res.data[1].count) || 0
    })
  },
  mounted() {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
</style>
