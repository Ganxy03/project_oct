<template>
  <div>
    <!-- <h1>This is an about page</h1> -->
    <!-- <button @click="get_yiyan">测试</button> -->
    <p style="text-align: right;color: rgb(11, 167, 223);" @click="get_yiyan">刷新</p>
    <h2>{{ this.motto }}</h2>
    <p style="text-align: right;color: #9a9a9a;">----《{{ this.from }}》{{ this.creator }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      motto: '',
      from: '',
      creator: ''
    }
  },
  created() {
    this.get_yiyan()
  },
  methods: {
    get_yiyan() {
      fetch("http://yiyan.ganxy03.cn")
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        this.motto = data.hitokoto
        this.from = data.from
        // console.log(this.from)
        this.creator = data.creator
        // console.log(this.creator)
        
        // console.log(this.motto)
      })
    }
  }
}
</script>
