<template>
  <a-layout id="components-layout-demo-fixed">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        v-model:selectedKeys="selectedKeys"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="/">
          <router-link to="/">首页</router-link>
        </a-menu-item>
        <a-menu-item key="/about">
          <router-link to="/about">关于</router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <a-breadcrumb :style="{ margin: '16px 0' }">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <div
        :style="{
          background: '#fff',
          padding: '24px',
          height: 'calc(100vh - 188px)',
        }"
      >
        <div style="background-color: #ececec; padding: 20px;">
          <a-row :gutter="16">
            <a-col :span="8">
              <a-card title="Card title" :bordered="false">
                <p>总共计划时长{{allTime}}</p>
              </a-card>
            </a-col>
            <a-col :span="8">
              <router-view />
              {{ a }}--{{ selectedKeys }}--{{ allTime }}
            </a-col>
          </a-row>
        </div>
      </div>
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>
<script>
import { computed, reactive, ref, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default {
  // setup(props,context){
  //组件直接的传参
  setup() {
    // 默认只执行一次
    let state = reactive({
      selectedKeys: computed(() => {
        return [route.path]
      }),
      a: 1,
    })
    let route = useRoute()

    let store = useStore()

    
    // watch 监控某个属性 computed
    // 获取与监控路由方法1 watch
    // watch(()=>route.path,(newValue)=>{
    //   console.log(newValue)
    //   state.selectedKeys = [newValue]
    // },{immediate:true})//immediate  立即执行
    // 获取与监控路由方法2 computed

    // vuex
    console.log(store.getters.allTime)

    let allTime = ref(store.getters.allTime) //导读将所有的属性变成响应式

    return {
      ...toRefs(state), //保证数据是响应式的  还有结构的功能
      allTime,
    }
  },
}
</script>
<style>
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>
