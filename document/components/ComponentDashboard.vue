<template>
  <el-scrollbar><router-view></router-view></el-scrollbar>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ComponentDashboard extends Vue {}
</script>

<style scoped lang="less"></style>
