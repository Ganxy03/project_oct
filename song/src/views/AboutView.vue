<!-- <template>
  <div class="about">
    <el-card shadow="always">
    <h2>开发日志</h2>
    </el-card>
    <el-card style="margin-top: 10px;">
      <div class="block">
        <div class="radio">
          排序：
          <el-radio-group v-model="reverse">
            <el-radio :label="true">倒序</el-radio>
            <el-radio :label="false">正序</el-radio>
          </el-radio-group>
        </div>

        <el-timeline :reverse="reverse">
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :timestamp="activity.timestamp">
            {{activity.content}}
          </el-timeline-item>
        </el-timeline>
      </div>
    </el-card>
    <div style="margin: 10px 0">
      <el-input type="textarea" placeholder="请输入评论" v-model="comment.content" v-enter="submit"></el-input>
      <div style="text-align: right;margin: 10px 0">
        <el-button type="primary" @click="submit">发布</el-button>
      </div>
    </div>
    <div style="margin: 20px 0">
      <div style="margin: 10px 0;font-size: 24px;padding: 10px;border-bottom: 2px solid #ccc;text-align: left;color: #fff;">评论列表</div>

      <div style="margin: 20px 0;text-align: left;">
        <div style="padding: 10px;" v-for="item in comments" :key="item.id">
          <div style="display: flex">
            <div style="width: 80px;">
              <el-avatar :size="50" :src="'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'"></el-avatar>
            </div>
            <div style="flex: 1">
              <div style="color: #fff;">{{ item.nickname }} <span>{{ item.create_time }}</span></div>
              <div style="margin-top: 10px;color: #fff">{{ item.content }}</div>
              <span style="float: right;color: #fff">{{ item.create_ip }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //
      reverse: true,
      activities: [
        {
          content: '构思项目',
          timestamp: '2023-09-12'
        },
        {
          content: '乐库1.0版本',
          timestamp: '2023-09-14'
        },
      ],
      comments: [],
      comment: {
        content: '',
        nickname: ''
      },
      replyComment: {},
    }
  },
  created() {
    this.load()
  },
  methods: {
    load() {
      fetch('http://raku-api.ganxy03.cn/comment?foreignId=1').then(res => {
        if (res.status == 500) {
          this.$notify.error('系统错误')
          return {
            
          }
        }
        return res.json()
      }).then(res => {
        this.comments = res.comments
      })
    },
    submit() {
      this.comment.foreignId = 1
      // console.log("发布")
      // console.log(this.comment.content)
      fetch('http://localhost:23913/comment', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(this.comment)
      }).then(res => {
        if (res.status == 200) {
          this.$notify.success('成功')
          this.load();
          this.comment = {}
        }
      })
    }
  },
  directives: {
    enter: {
        bind: function(el, binding, vnode) {
        el.addEventListener('keydown', function(event) {
            if (event.keyCode === 13) {
              vnode.context[binding.expression]();
            }
        });
        }
    }
  },
}
</script>

<style>
.el-card__body {
  padding: 5px;
}
.el-card__body h1 {
  margin: 10px;
}

.el-card {
  opacity: 0.7;
  border-radius: 10px;
}

.el-timeline-item__wrapper {
  text-align: left;
  margin-top: 10px;
}
</style> -->

<template>
  <div>
    <!-- <el-link @click="test">测试</el-link> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      comments: []
    }
  },
  created() {
    this.test()
  },
  methods: {
    test() {
      fetch('http://raku-api.ganxy03.cn/comment?foreignId=1')
      .then(res => {
        if (res.status === 500) {
          throw new Error('系统错误')
        }
        return res.json()
      })
      .then(res => {
        this.$notify.success('请求成功')
        this.comments = res.comments
        console.log(this.comments)
      })
      .catch(error => {
        this.$notify.error(error.message)
      })
      // console.log("log")
    }
  }

}

</script>