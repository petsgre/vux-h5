<template>
  <div class="receipt">
    <divider>洗车前回执</divider>
    <div class="card-padding">
      <group>
        <x-textarea :placeholder="'请输入回执内容'" @on-change="updateText" v-model="text"></x-textarea>
      </group>
    </div>
    <div class="upload-box">
      <div class="upload" v-show="img1.url">
        <img :src="img1.url">
      </div>
      <div @click="upload(1)" class="upload">+</div>
      <input @change="changeInput(1,$event)" id="file1" style="height:0" type="file">
      <div style="clear:both"></div>
    </div>
    <divider>洗车后回执</divider>
    <div class="upload-box">
      <div class="upload" v-show="img2.url">
        <img :src="img2.url">
      </div>
      <div @click="upload(2)" class="upload">+</div>
      <input @change="changeInput(2,$event)" id="file2" style="height:0" type="file">
      <div style="clear:both"></div>
    </div>
    <x-button @click.native="submit" type="primary">提交</x-button>
  </div>
</template>

<script>
import { Card, Divider, XTextarea } from 'vux'
import { finishOrder, uploadPic } from '@/api'

export default {
  name: 'receipt',
  data() {
    return {
      order: {},
      text: '',
      img1: {
        url: ''
      },
      img2: {
        url: ''
      }
    }
  },
  components: {
    Card,
    Divider,
    XTextarea
  },
  methods: {
    changeInput(index, e) {
      const that = this
      const file = e.target.files[0]
      var formData = new FormData()
      formData.append('file', file)
      uploadPic(formData).then(res => {
        if (index === 1) {
          that.img1.url = res.data
        } else {
          that.img2.url = res.data
        }
      })
    },
    upload(index) {
      var btn = document.getElementById('file' + index)
      this.triggerClick(btn)
    },
    triggerClick(el) {
      if (el.click) {
        el.click()
      } else {
        try {
          var evt = document.createEvent('Event')
          evt.initEvent('click', true, true)
          el.dispatchEvent(evt)
        } catch (e) {
          alert(e)
        }
      }
    },
    updateText(val) {},
    submit() {
      const that = this
      const req = {
        oId: this.order.id,
        bak1: this.img1.url,
        bak2: this.img2.url
      }
      finishOrder(req).then(res => {
        that.$vux.toast.show({
          text: '提交成功'
        })
      })
    }
  },
  mounted() {
    this.order = this.$root.temp.order
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
input[type='file'] {
  visibility: hidden;
}
img {
  width: 100%;
  height: 100%;
}
.upload-box {
  padding: 15px;
}
.upload {
  border: 1px #ddd dashed;
  width: 50px;
  height: 50px;
  float: left;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
}
</style>
