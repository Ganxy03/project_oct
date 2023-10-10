<template>
    <div>
      <span style="color: #9a9a9a;">我拿秋风下酒 半盏入我口半盏入他喉 莫问秋风何处走秋风亦识人间愁</span>
      <div>2023/10/08</div>
      <carousel class="hide-dots" :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="false">
        <slide v-for="item in items" :key="item.id">
          <el-card>{{ item.text }}</el-card>
        </slide>
      </carousel>
    </div>
  </template>
  <style scoped>
  .hide-dots .carousel-dots {
    display: none;
  }
  </style>
  <script>
  export default {
    data() {
      return {
        items: [
          { id: 1, text: 'Card 1' },
          { id: 2, text: 'Card 2' },
          { id: 3, text: 'Card 3' }
        ],
        someLocalProperty: 'yourLocalProperty' // 设置本地属性来控制导航到的位置
      };
    }
  };
  </script>

  <style>
.VueCarousel-dot-container, .VueCarousel-dot, .VueCarousel-dot--active {
    display: none;
}
</style>