<template>
  <div class="page-container">
    <van-cell is-link @click="open('date')">点击选择年月日</van-cell>
    <yi-date-picker type="date" ref="date" @change="change" @confirm="confirmDate" />
    <p>年月日{{date}}</p>
    <van-cell is-link @click="open('time')">点击选择时间</van-cell>
    <yi-date-picker type="time" ref="time" @change="change" @confirm="confirmTime" :value="time"/>
    <p>时间{{time}}</p>
    <van-cell is-link @click="open('datetime')">点击选择完整日期时间</van-cell>
    <yi-date-picker type="datetime" ref="datetime" @change="change" @confirm="confirmDateTime"/>
    <p>日期时间{{datetime}}</p>
  </div>
</template>

<script>
export default {
  name: 'YiDate',
  data() {
    return {
      date: '',
      time: '12:00',
      datetime: ''
    };
  },
  methods: {
    open(type) {
      this.$refs[type].open();
    },
    change(picker) {},
    confirmTime(value) {
      this.time = value;
    },
    confirmDate(value) {
      this.date = value;
    },
    confirmDateTime(value) {
      this.datetime = value;
    }
  },
};
</script>

<style scoped>
/* .page-container {
  width: 100%;
  height: 100%;
  display: flex;
  padding: 20px 0;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  background-color: white;
} */
</style>
