<template>
  <div class="login">
    <!-- <h1 class="title">登录</h1> -->
    <el-form :model="loginFormRef" ref="loginForm" label-width="60px" class="demo-ruleForm" :rules="rules">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username" size="large"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password" size="large"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
         <div class="flexBetween code">
            <el-input v-model="loginForm.code" size="large"></el-input>
            <div v-html="loginCode.data"></div>
         </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">登录</el-button>
      </el-form-item>
    </el-form>
    
  </div>
</template>
<script>
import { reactive, ref } from '@vue/reactivity'
import api from '@/api/system/login'
import { onMounted } from '@vue/runtime-core'
export default {
  setup() {
    const loginForm = reactive({})
    const loginFormRef = ref('')
    const rules = reactive({
      username: {},
      password: {},
      code: {}
    })
    const loginCode = ref('')
    onMounted(async ()=>{
      await api.getLoginCode().then((res)=>{
        loginCode.value = res.data
      })
    })
    return {
      loginForm,
      loginFormRef,
      rules,
      loginCode
    }
  },
}
</script>
<style scoped lang="scss">
.login {
  width: 400px;
  margin: 200px auto;
  background-color: #abcdef;
  border-radius: 10px;
  padding: 24px 40px;
  .title {
    width: 100%;
    text-align: center;
    margin: 0 0 24px;
  }
  .code{
    width: 100%;
    height: 40px;
    overflow: hidden;
    div{
      height: 100%;
    }
    .el-input {
      margin-right: 24px;
    }
  }
  .el-button{
    width: 100%;
  }
}
</style>