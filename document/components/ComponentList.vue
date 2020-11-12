<template>
  <el-scrollbar>
    <div style="height: 10px;" />
    <span class="group-title">开发指南</span>
    <ul class="item-group">
      <li class="component-item">
        <router-link
          class="item-link"
          active-class="item-link-active"
          to="intro"
        >
          项目介绍
        </router-link>
      </li>
      <li class="component-item">
        <router-link
          class="item-link"
          active-class="item-link-active"
          to="guide"
        >
          使用方法
        </router-link>
      </li>
      <li class="component-item">
        <router-link
          class="item-link"
          active-class="item-link-active"
          to="log"
        >
          开发计划
        </router-link>
      </li>
      <li class="component-item">
        <router-link
          class="item-link"
          active-class="item-link-active"
          to="rule"
        >
          开发规范
        </router-link>
      </li>
      <li class="component-item">
        <router-link
          class="item-link"
          active-class="item-link-active"
          to="design"
        >
          设计文档
        </router-link>
      </li>
    </ul>
    <span class="group-title">容器组件</span>
    <ul class="item-group">
       <li
        class="component-item"
        v-for="(item, index) in layoutComponents"
        :key="index"
      >
        <router-link
          class="item-link"
          active-class="item-link-active"
          :to="item.routerName"
        >
          {{ item.name }}({{ item.componentId }})
        </router-link>
      </li>
    </ul>
    <span class="group-title">基础组件</span>
    <ul class="item-group">
      <li
        class="component-item"
        v-for="(item, index) in basicComponents"
        :key="index"
      >
        <router-link
          class="item-link"
          active-class="item-link-active"
          :to="item.routerName"
        >
          {{ item.name }}({{ item.componentId }})
        </router-link>
      </li>
    </ul>
    <span class="group-title">表单组件</span>
    <ul class="item-group">
      <li
        class="component-item"
        v-for="(item, index) in formComponents"
        :key="index"
      >
        <router-link
          class="item-link"
          active-class="item-link-active"
          :to="item.routerName"
        >
          {{ item.name }}({{ item.componentId }})
        </router-link>
      </li>
    </ul>
    <span class="group-title">工具类库</span>
    <ul class="item-group">
      <li
        class="component-item"
        v-for="(item, index) in extraComponents"
        :key="index"
      >
        <router-link
          class="item-link"
          active-class="item-link-active"
          :to="item.routerName"
        >
          {{ item.name }}({{ item.componentId }})
        </router-link>
      </li>
    </ul>
    <div style="height: 40px;" />
  </el-scrollbar>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { basicComponents, formComponents, layoutComponents, extraComponents } from '../config';

@Component
export default class ComponentDashboard extends Vue {
  basicComponents: Array<any> = basicComponents;
  formComponents: Array<any> = formComponents;
  layoutComponents: Array<any> = layoutComponents;
  extraComponents: Array<any> = extraComponents;
}
</script>

<style scoped lang="less">
.component-item {
  height: 40px;
  list-style: none;
}
.item-link {
  display: block;
  height: 40px;
  color: #333;
  line-height: 40px;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 400;
  text-decoration: none;

  &:hover {
    color: #00beba;
  }
  &-active {
    color: #00beba;
  }
}

.item-group {
  margin: 0;
  padding: 0;
}
.group-title {
  display: block;
  padding: 10px 0;
  font-weight: 600;
  color: #333;
}
</style>
