<template>
  <div class="color-container">
    <div class="select-color" :style="`background-color: ${color}`">我选择的颜色:{{color}}</div>
    <yi-color-select v-model="color" @change="onChangeColor"></yi-color-select>
  </div>
</template>

<script>
export default {
  name: 'colorSelectss ',
  data() {
    return {
      color: '',
    };
  },
  methods: {
    onChangeColor(e) {
      console.log(e, '=========>>>>');
    },
  },
};
</script>

<style lang="scss" scoped>
.color-container {
  font-size: 18px;
  padding-left: 20px;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.select-color{
    margin-bottom: 20px;
}
</style>