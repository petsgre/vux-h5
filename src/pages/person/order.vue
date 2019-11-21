<template>
  <div class="index">
    <template v-for="item in list">
      <form-preview
        :body-items="item.list"
        :header-label="'付款金额'"
        :header-value="'¥'+item.feePrice"
        :key="item.index"
        :name="item"
      ></form-preview>
      <br :key="item.id">
    </template>
  </div>
</template>

<script>
import { getOrders } from '@/api'
import { Tabbar, TabbarItem, Tab, TabItem, FormPreview } from 'vux'
export default {
  name: 'index',
  data() {
    return {
      list: []
    }
  },
  computed: {},
  components: {
    Tabbar,
    TabbarItem,
    Tab,
    TabItem,
    FormPreview
  },
  methods: {
    formatData(data) {
      let list = []
      data.forEach(function(item, index) {
        const obj = {
          feePrice: item.feePrice,
          id: item.oId,
          list: [
            {
              label: '车牌号',
              value: item.carNum
            },
            {
              label: '车位',
              value: item.carSpaceNum
            },
            {
              label: '车型',
              value: item.carType === '1' ? '轿车' : 'SUV'
            },
            {
              label: '联系人',
              value: item.contacts
            },
            {
              label: '电话',
              value: item.contactsPhone
            },
            {
              label: '预约时间',
              value: item.orderDate
            }
          ]
        }
        list.push(obj)
      })
      return list
    }
  },
  created() {
    const that = this
    getOrders().then(res => {
      that.list = that.formatData(res.data)
    })
  },
  mounted() {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.index {
  padding-bottom: 40px;
}
</style>
