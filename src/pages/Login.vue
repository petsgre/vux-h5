<template>
  <div class="login">
    <x-icon class="icon-red" size="150" type="ios-circle-filled"></x-icon>
    <div>站府美车</div>
    <group>
      <x-input placeholder="请输入账号" title="账号：" v-model="name"></x-input>
      <x-input placeholder="请输入密码" title="密码：" type="password" v-model="password"></x-input>
    </group>
    <x-button @click.native="login" type="primary">登录</x-button>
  </div>
</template>

<script>
import { Group, Cell, md5 } from 'vux'
import { login } from '@/api'

export default {
  name: 'login',
  data() {
    return {
      name: '',
      password: ''
    }
  },
  components: {
    Group,
    Cell
  },
  methods: {
    login() {
      login({ phone: this.name, pwd: md5(this.password + 'zfmc2019') }).then(
        res => {
          if (res.message === '000000') {
            window.sessionStorage.setItem('user', JSON.stringify(res.data))
            window.sessionStorage.setItem('token', res.token)
            this.$store.dispatch('setUser', res.data)
            setTimeout(() => {
              this.$router.push('/Index')
            }, 300)
          }
        }
      )
    }
  },
  mounted() {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.login {
  text-align: center;
}
.weui-btn {
  margin-top: 20px;
}
</style>
