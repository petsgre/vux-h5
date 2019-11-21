<template>
  <div class="index">
    <tab>
      <tab-item @on-item-click="onItemClick" selected>未接订单</tab-item>
      <tab-item @on-item-click="onItemClick">进行中的订单</tab-item>
    </tab>
    <template v-for="item in list">
      <form-preview
        :body-items="item.list"
        :footer-buttons="buttons"
        :header-label="'付款金额'"
        :header-value="'¥'+item.feePrice"
        :key="item.index"
        :name="item"
      ></form-preview>
      <br :key="item.id">
    </template>
    <tabbar>
      <tabbar-item selected>
        <img
          selected
          slot="icon"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAAAWNJREFUaAXtmssNwjAMhpOKMTjwkNgF2IMpgAMwBXsAuyDxODAHISlVTzGylMS41Z9T5Dqx/X9GTVGMwYACqhWwVHbP7Wz+du+jcW5I+aiwW/uqbLUa7a6XWD5VzBhsnSguJOoB1LmGeWQMIravqSE3OdxIyuRawQf39dT96jKSoGCORUOhwKLyCmwOggIiFw0BgkXlFdgcBAVELhoCBIvKK7A5fRZlBn9spifnzILpHnWz1pzH+9sy+jDR2PsWTSZYSvlEcO3y3hNEgS3rjk5AsKPg2rRBsJWio5Pk92COkwylXY4TjuoWdf5fT6p4rj2ZIE4yXKkL+alu0Rw1o8AcKv5zDxD8p/o5YveeYPJ7ECeZhD7DSYYhXu9/gyiQ0QWqXUBQNR5GciDIEEm1CwiqxsNIDgQZIql2ob8m/D3McIuvvs2nugSfXMiVGGSLhkumvxYS+8mbmwux8oEREQpkUeADV8xGaoJtaEsAAAAASUVORK5CYII="
        >
        <span slot="label">订单</span>
      </tabbar-item>
      <tabbar-item link="/person">
        <img
          slot="icon"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAABIpJREFUaAXtWk9IVEEYn2/LSomIiAJDMLU6GWkQ/TtoGQSdDDL04iYdulqXDhF76FBQdO0Q/iFIMqhLQaCmh0oI0sgumlYQGkVERGilven7vX2zvre7rr6debgub2D3zXvzfd/8fvPNm/m+4QkRlnAEcnoEKB26A60vCr/9mD4qhagUUq5NJ5Mzz4j+MImRzRuL+gZvHpxJxpVCcNfZ3t2zs+K+EHJnsnBu39NYQYE4NXq77o0bp4cgPPfl+/RrkCNBw+zBJxGSf90KuVa3JK1hEselkFVC0NjWTUV73J5c7QaMaanIlWxftW8gVjvnbs/Vek2s//KnD/9egmScg3iksEZUBVf7nYtfn6wUcsANrJhtqCsOqKN4CKoFJdenZRy69z+BOWlR9BL06uTFXUhwpbsx9GDowRwfgbyfop5IJghnSClpR8vTKkuIXWTJYvQhIzTFIzv6ru3IMBHx3hxcCYxg+bnnW+TM74sV0b4GDqG2gUKCiSUFExbcNlnW3NdNheuuTtw69DUImoFM0fLm3gtiZmZCCKvVJkf0kQPiLorQDfvHdcHP4sStVsjaOgEwNOrBmmj/uk9yro2BNwIrZyQPmdCV8fajQ+mwV5zpq5aWvMTy9dx+vby5Z28JrW4Z6Kj9nU4+m2dGCcbJiUb21k+ejk0TnXWPM4FyiJ8sa+45wTp3WaeRbUClKZOenzZjUxRTDABtciQOv+88lpGcGyRkJes4A9NocroaIYgFhQHHABqee99xbAR1PwU60HV0Yo5NPybSyhohiNWS36P1eOf8eC4ZEXRhA7ZgM7k9m3ttgtjniKzT6BwLSjYg3DrKBgnZANvutmzq2gQrov3VUopiLPsLrZZ+gNk2nC0Etv3oppPVJigj8dM3knIwXQfZPFO2lO1sbCgdbYIq/BIcfimj2lfHVsK2hkFtghp9L6pK/CIuKrSIgDZBBM52H04gvUh/S2uWwo5dLaLPS1NYWEqbIFk0BvO8lh5YuBt/Ley2/dBgcKP+NFOltQmOd9QO8VSa4iPHUsSWqV34e2LbYFu8H04infKnnSqtTRD5nJSRezCNwDm1C39PlA0pqNtErqhNEPCLCuQ1HvFfyAoQOPujNC8NXdiALeSI8y3Z14wQfHu77gtDiAEGsoKyaE8l6n4KdKDr6MRMJcBGCAIUp0Y3GGAXLxAb+BDimR9P2ukS69i6bAO2/AxOJlljBNEJklVFkm8fcdrzINPCgzbIQFaRgw3YMlWMJrxOJt7EoF8xwBjeJ1406suivR/t8Mu1Z2JbsSyrFETwzkEenuNzDqPFKEGFDEA5n7sjOOVBpsHLbCl7qFTwYVOicISO7cVegQM8dAqEIEg4i8R5JnfBzjg4KFexJaIfBAjj7dhDV+ixofKUQwBTFj9PoU7PbSA3RheZQBBqGg0Jag7gsquHHlx2F2gCCD2oOYDLru71IH/YBkT4PGrZkfkEkMDscFDqHoIcKNtH7nw9zp9HBRblqM5NXYEVmGFPcVC2+X6+5OPHeB6CoJrXn1MqX+bTB7GKU3gNRyBHR+A/KFjbvWAqMXEAAAAASUVORK5CYII="
        >
        <span slot="label">个人</span>
      </tabbar-item>
      <!-- <tabbar-item selected link="/component/demo">
        <img slot="icon" src="../assets/demo/icon_nav_article.png">
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon" src="../assets/demo/icon_nav_cell.png">
        <span slot="label">News</span>
      </tabbar-item>-->
    </tabbar>
  </div>
</template>

<script>
import { getOrderByStatus, acceptOrder } from '@/api'
import { Tabbar, TabbarItem, Tab, TabItem, FormPreview } from 'vux'
export default {
  name: 'index',
  data() {
    return {
      list: [],
      currentIndex: 0
    }
  },
  computed: {
    buttons() {
      if (this.currentIndex) {
        return [
          {
            style: 'primary',
            text: '提交回执并结束订单',
            onButtonClick: obj => {
              const that = this
              that.$root.temp.order = obj
              that.$router.push('/Receipt')
            }
          }
        ]
      }
      return [
        // {
        //   style: 'default',
        //   text: '辅助操作'
        // },
        {
          style: 'primary',
          text: '接受订单',
          onButtonClick: obj => {
            const that = this
            this.$vux.confirm.show({
              title: '提示',
              content: '是否接受订单?',
              onCancel: () => {},
              onConfirm: () => {
                that.acceptOrder(obj)
              }
            })
          }
        }
      ]
    }
  },
  components: {
    Tabbar,
    TabbarItem,
    Tab,
    TabItem,
    FormPreview
  },
  methods: {
    acceptOrder(obj) {
      const that = this
      acceptOrder({ oId: obj.id }).then(res => {
        that.$vux.toast.show({
          text: '抢单成功'
        })
      })
    },
    onItemClick(index) {
      console.log('on item click:', index)
      this.currentIndex = index
      const status = index ? 2 : 1
      const that = this
      getOrderByStatus({ status: status }).then(res => {
        that.list = that.formatData(res.data)
      })
    },
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
    getOrderByStatus({ status: 1 }).then(res => {
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
