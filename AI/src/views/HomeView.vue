<template>
  <div>
    <h1>欢迎来到AI-Ganxy 2023-10-04</h1>
    <!-- <h4>线路1</h4> -->
    <!-- <a href="#/about">
      <el-button type="primary" style="margin: 0;"><i class="el-icon-s-promotion"></i>开始</el-button>
    </a> -->
    <a href="#/xunfei" style="color: rgb(19, 92, 237);">线路1</a>

    <!-- <h4>线路2</h4> -->
    <!-- <a href="#/about">
      <el-button type="primary" style="margin: 0;"><i class="el-icon-s-promotion"></i>开始</el-button>
    </a> -->
    <a href="#" style="color: rgb(19, 92, 237);" @click="tip">线路2</a>
    <el-divider style="margin: 0;"></el-divider>
    <div style="font-size: 16px;color: #000;">
      <p>&copy;2023|Ganxy</p>
    </div>
    <div>建站{{ siteDays }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      siteDays: ''
    };
  },
  mounted() {
    this.calculateSiteDays();
    setInterval(() => {
      this.calculateSiteDays();
    }, 1000);
  },
  methods: {
    tip() {
      this.$message('正在开发中');
    },
    calculateSiteDays() {
      const startDate = new Date('2023/10/04 12:00:00');
      const currentDate = new Date();
      const diff = currentDate.getTime() - startDate.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      this.siteDays = `${days}天${hours}时${minutes}分${seconds}秒`;
    }
  }
  // computed: {
  //   siteDays() {
  //      // 获取建站日期
  //     const startDate = new Date('2023/10/04 12:00:00');
  //     // 获取当前日期
  //     const currentDate = new Date();
  //     // 计算相差的毫秒数
  //     const diff = currentDate.getTime() - startDate.getTime();
  //     // 计算相差的天数、小时数、分钟数、秒数
  //     const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  //     const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //     const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  //     const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  //     // 返回格式化后的时长
  //     return `${days}天${hours}小时${minutes}分${seconds}秒`;
  //   }
  // }
}
</script>
