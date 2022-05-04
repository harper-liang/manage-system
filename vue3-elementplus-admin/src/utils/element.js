
import {
  ElHeader,
  ElMain,
  ElContainer,
  ElAside,
  ElButton,
  ElMessageBox,
  ElInput,
  ElBacktop,
  ElScrollbar,
  ElTree,
  ElUpload,
  ElCol,
  ElRow,
  ElTable,
  ElTableColumn,
  ElDialog,
  ElForm,
  ElFormItem,
} from 'element-plus'

// 组件
const components = [
  ElHeader,
  ElMain,
  ElContainer,
  ElAside,
  ElButton,
  ElInput,
  ElBacktop,
  ElScrollbar,
  ElTree,
  ElUpload,
  ElRow,
  ElCol,
  ElTable,
  ElTableColumn,
  ElDialog,
  ElForm,
  ElFormItem,
]
// 插件
const plugin = [ElMessageBox]

let element = (app) =>{
  components.forEach(component => {
    app.component(component.name, component)
  })
  plugin.forEach(plugin => {
    app.use(plugin)
  })
}
export default element

