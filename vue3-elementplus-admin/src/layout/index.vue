<template>
  <div>
    侧边栏+router-view，所以这个时后面所有页面的基础
  </div>
</template>
<script>
import { onMounted } from '@vue/runtime-core'
import api from '@/api/system/user'
export default {
  setup() {
    onMounted(()=>{
      const data = api.getUser("你好")
      api.saveUser({name:"lisi",password:"123123"})
      console.log(data,"1111")
    })
  },
}
</script>