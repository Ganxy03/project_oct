<template>
  <div>
    <div class="block">
      <el-carousel class="custom-carousel" arrow="never">
        <el-carousel-item v-for="item in 1" :key="item">
          <!-- <h3 class="small">{{ item }}</h3> -->
          <!-- <img :src="require('@/assets/img/' + item + '.png')" alt="Image" style="width: 100%;object-fit: contain;"> -->
          <div class="carousel-item-wrapper">
            <!-- <img :src="require('@/assets/img/' + item + '.png')" alt="Image"> -->
            <img :src="require('@/assets/img/' + item + '.png')" alt="Image" style="width: 100%;object-fit: contain;">
          </div>
        </el-carousel-item>
      </el-carousel>
      <div v-if="shouldShowAside" class="home-title">
        <span class="font-weight-bold">推荐专辑</span>
        <small class="float-right more">
          <a href="#">
            更多 >>
          </a>
        </small>
      </div>
      <div v-if="shouldShowAside" class="album-list">
        <div class="card-deck">
          <div class="card">
            <img src="http://p2.music.126.net/VItodGe7KwC9LHBZzjMa4Q==/109951164773618965.jpg" alt="" class="card-img-top">
          </div>
          <div class="card">
            <img src="http://p1.music.126.net/1z08VOcRw7mSkeoqJw7dWw==/109951163370791536.jpg" alt="" class="card-img-top">
          </div>
          <div class="card">
            <img src="http://p2.music.126.net/zfGDNoTflQRfwNMkVRh_oQ==/109951163511610086.jpg" alt="" class="card-img-top">
          </div>
          <div class="card">
            <img src="http://p2.music.126.net/Y294AUEZGV-Syr3SH8ykkQ==/109951163409354204.jpg" alt="" class="card-img-top">
          </div>
        </div>
      </div>
      <div class="home-title">
        <span class="font-weight-bold">热门曲目</span>
        <small class="float-right more">
          <a href="#">
            更多 >>
          </a>
        </small>
      </div>
      <div class="shadow-sm p-3 mb-5 bg-white rounded">
        <div class="row songs-list">
          <ul class="align-ul">
            <li>
              <a href="#">《시간을 거슬러》 - 아뜰리에</a>
            </li>
            <li>
              <a href="#">《come》 - 左右乐队</a>
            </li>
            <li>
              <a href="#">《燕尾蝶（翻自 sakura） 》 - 缦珠莎桦</a>
            </li>
            <li>
              <a href="#">《娱乐》 - 苏苏</a>
            </li>
            <li>
              <a href="#">《Dancing In The Moonlight》 - King Har</a>
            </li>
            <li>
              <a href="#">《Summertime Sadness (Cedric Gervai</a>
            </li>
            <li>
              <a href="#">《万象霜天》 - 公子欢喜</a>
            </li>
            <li>
              <a href="#">《Stronger》 - EXO</a>
            </li>
            <li>
              <a href="#">《红杏枝头春意闹》 - 王俊雄</a>
            </li>
          </ul>
        </div>
      </div>
      <div style="width: 100%;text-align: left;color: #9d9d9d;font-size: 13px;padding-bottom: 10px;border-bottom: 1px solid #e3e3e3;">
        友情链接：
        <span>
          <a href="#">网易云音乐</a>
        </span>
        <span>
          <a href="#">QQ音乐</a>
        </span>
        <span>
          <a href="#">酷狗音乐</a>
        </span>
        <span>
          <a href="#">酷我音乐</a>
        </span>
      </div>
      <div style="text-align: left;color: #9d9d9d;font-size: 13px;padding-top: 10px;">
        <div style="width: 48%;display: inline-block;">&copy;2023|Ganxy 浙ICP备2022019862号</div>
        <div style="width: 48%;margin-left: 4%;display: inline-block;">
          <span>
            <a href="#">关于我们</a>
          </span>
          <span>
            <a href="#">意见反馈</a>
          </span>
          <span>
            <a href="#">广告</a>
          </span>
          <span>
            <a href="#">免责声明</a>
          </span>
        </div>
      </div>
      <div style="color: #9d9d9d;">
          <!-- &copy;2023|Ganxy -->
          <div>本站已安全运行{{ siteDays }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        windowWidth: window.innerWidth,
        siteDays: ''
    }
  },
  mounted() {
    this.calculateSiteDays();
    setInterval(() => {
      this.calculateSiteDays();
    }, 1000);
  },
  created() {
    window.addEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
        this.windowWidth = window.innerWidth;
    },
    calculateSiteDays() {
      const startDate = new Date('2023/09/12 18:44:04');
      const currentDate = new Date();
      const diff = currentDate.getTime() - startDate.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      this.siteDays = `${days}天${hours}时${minutes}分${seconds}秒`;
    }
  },
  computed: {
    shouldShowAside() {
        return this.windowWidth > 938;
    }
  },
}
</script>

<style>
.custom-carousel {
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  overflow-y: hidden;
}
.carousel-item-wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }

  .el-main {
    width: 60%;
    overflow-y: hidden;
  }

  .home-title {
    line-height: 30px;
    font-size: 17px;
    color: #222;
    text-align: left;
    margin-top: 20px;
    border-bottom: 2px solid #02A682;
  }

  .font-weight-bold {
    font-weight: 700!important;
  }

  .float-right {
    float: right!important;
  }

  .more a {
    text-decoration: none;
    color: #02A682;
  }

  .more :hover{
    color: #fff;
    background-color: #02A682;
  }

  .album-list {
    height: 100px;
    background: #F5F7F8;
    padding: 20px 20px;
  }

  .card-deck {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    margin-right: -15px;
    margin-left: -15px;
  }

  .card {
    flex: 1 0 0%;
    margin-right: 15px;
    margin-bottom: 0;
    margin-left: 15px;
  }

  .card-img, .card-img-bottom, .card-img-top {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 100%;
  }

  img {
      vertical-align: middle;
      border-style: none;
  }

  .p-3 {
    padding: 1rem!important;
  }

  .mb-5, .my-5 {
    margin-bottom: 3rem!important;
  }
  .shadow-sm {
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
  }
  .rounded {
    border-radius: 0.25rem!important;
  }
  .bg-white {
    background-color: #fff!important;
  }
  .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  ul li a {
    text-decoration: none;
    color: #42b983;
  }

  .align-ul {
    text-align: center;
  }

  .align-ul li :hover {
    color: #fff;
    background-color: #02A682;
  }

  span a {
    text-decoration: none;
    color: #9d9d9d;
    padding: 5px;
  }

  span a:hover {
    color: #f48c0c;
  }

  @media screen and (max-width: 938px){
    .el-main {
      width: 100%;
    }
    .align-ul {
      text-align: left;
    }
  }

</style>
