<template>
  <div class="page-container">
    <p class="title">1、不带初始值</p>
    <yi-money-input placeholder="请输入金额"
                    :initValue="initValue1"
                    @change="change">
    </yi-money-input>
    <p class="title">2、带初始值</p>
    <yi-money-input :initValue="initValue2"
                    label="收入："
                    placeholder="请输入金额"
                    border
                    @change="change">
    </yi-money-input>
  </div>
</template>

<script>
export default {
  name: 'YiMoneyInputDisplay',
  data() {
    return {
      initValue1: null,
      initValue2: '4.34'
    };
  },
  methods: {
    change(value) {
      console.log('this is get value====>', value, typeof value);
    }
  },
  mounted() { }
};
</script>

<style scoped lang="less">
.page-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .title {
    margin-top: 15px;
    padding-left: 15px;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    text-align: left;
    color: #333;
  }
}
</style>
