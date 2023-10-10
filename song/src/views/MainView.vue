<!-- <template>
    <div>
        <el-card>
            <p id="hitokoto">
                <a id="hitokoto_text" target="_blank">:D 获取中...</a>
            </p>
        </el-card>
        <el-card style="margin-top: 10px;">
            <el-input v-model="input" placeholder="请输入搜索的音乐/歌手" v-enter="searchMusic"></el-input>
            <el-link type="primary" style="float: right;" @click="searchMusic">搜索</el-link>
            <el-divider content-position="left">操作歌单</el-divider>
            <el-table
                :data="tableData"
                :row-key="row => row.id">
                <el-table-column
                prop="name"
                label="歌名">
                </el-table-column>
                <el-table-column
                prop="operate"
                label="操作">
                <template slot-scope="scope">
                    <el-link type="info" style="font-size: 20px;" @click="playMusic(scope.row.id)"><i class="el-icon-video-play"></i></el-link>
                    <el-link type="info" style="font-size: 20px;margin-left: 10px;" @click="playMV(scope.row.id)"><i class="el-icon-film"></i></el-link>
                    <el-link type="info" style="font-size: 20px;margin-left: 10px;" @click="message"><i class="el-icon-chat-line-round"></i></el-link>
                </template>
                </el-table-column>
                <el-table-column
                prop="id"
                label="id">
                </el-table-column>
            </el-table>
        </el-card>
        <div class="myaudio">
            <img src="../img/1.jpg" alt="专辑封面" style="width: 30px;position: fixed;bottom: 0;">
            <audio ref='audio' :src="musicUrl" controls autoplay preload="auto" volume="0.6" controlsList="nodownload"></audio>
        </div>
        <div class="myaudio_con">
            <audio ref='audio' :src='musicUrl' @play="play" @pause="pause" controls autoplay loop
                class="myaudio "></audio>
        </div>
        <common-foot />
    </div>
</template> -->

<!-- <script>
import CommonFoot from '../components/CommonFoot.vue'
export default {
    data() {
        return {
            row: {
                
            },
            input: '',
            name: '',
            operate: '',
            tableData: 
            [
                // {
                //     name: '奢香夫人',
                //     operate: ''
                // }
            ],
            query: "",
            musicList: [],
            musicUrl: '',
            musicCover: "",
        }
    },
    methods: {
        yiyan() {
            fetch('https://v1.hitokoto.cn')
            .then(response => response.json())
            .then(data => {
            const hitokoto = document.querySelector('#hitokoto_text')
            hitokoto.href = `https://hitokoto.cn/?uuid=${data.uuid}`
            hitokoto.innerText = data.hitokoto
            })
            .catch(console.error)
        },
        searchMusic() {
            this.query = this.input
            fetch('https://autumnfish.cn/cloudsearch?keywords=' + this.query)
            .then(response => response.json())
            .then(data => {
                this.tableData = data.result.songs;
                // console.log(this.tableData)
                for (let i = 0; i < this.tableData.length; i++) {
                    // console.log(this.tableData[i].id);
                }
                // console.log(this.tableData[0].id)
            })
            .catch(error => {
                console.error(error);
            })
        },
        playMusic(id) {
            // console.log("播放音乐:" + id);
            fetch('https://autumnfish.cn/song/url?id=' + id) 
                .then(response => response.json())
                .then(data => {
                    // console.log(data.data[0])
                    // console.log(data.data[0].url)
                    this.musicUrl = data.data[0].url;
                    // console.log(this.musicUrl)
                })
                .catch(error => {
                    console.error(error);
                })
        },
        playMV(id) {
            // console.log(id)
            fetch('https://autumnfish.cn/mv/url?id=' + id) 
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                })
                .catch(error => {
                    console.error(error);
                })
        },
        message() {
            console.log("热评")
        }
    },
    created() {
        this.yiyan()
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
    components: {
        CommonFoot
    }
}
</script>

<style>
#hitokoto a {
    text-decoration: none;
    color: #333;
    margin: 10px 0;
}

.el-card__body {
    padding: 10px;
}

.el-card {
    opacity: 0.7;
}
.myaudio {
    position: fixed;
    width: 96%;
    bottom: 0;
}
audio {
    width: 100%;
}
</style> -->

<template>
    <div class="show-main">
        <el-aside v-if="shouldShowAside" style="height: 20%;float: left;width: 20%;">
            <common-side />
        </el-aside>
        <el-main style="float: left;">
            <router-view />
        </el-main>
        <div id="aplayer_bottom" style="text-align: left;"></div>
    </div>
</template>

<script>
import CommonSide from '@/components/CommonSide.vue';
import 'aplayer/dist/APlayer.min.css';
import APlayer from 'aplayer';
export default {
    data() {
        return {
            // music:{
            //     url: 'http://m801.music.126.net/20231005132630/dfa09f2d82f56ee9b291ca688823cf09/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28558883702/df8f/e7d3/3bd8/d41b2c646f161030483eb9086e577d76.flac'
            // },
            // musicUrl: 'http://m801.music.126.net/20231005132630/dfa09f2d82f56ee9b291ca688823cf09/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28558883702/df8f/e7d3/3bd8/d41b2c646f161030483eb9086e577d76.flac',
            search_id01: '',
            search_id02: '',
            windowWidth: window.innerWidth,
            audio: 
            {
                name: '',
                // name: '篝火旁',
                artist: '',
                // artist: '吕大叶',
                url: '',
                // url: 'http://m802.music.126.net/20231009021130/bd9f06011b839701ea4f67144a0a026f/jd-musicrep-ts/a906/dfc2/ebee/6c5de145143d215d5ce207db22623cef.mp3',
                cover: '',
                // cover: 'http://p1.music.126.net/sN5dTpmeJO1DhxIj1ogMLg==/109951163416453597.jpg',
                lrc: ''
                // lrc: 'http://124.221.138.245:5500/篝火旁.lrc'
            },
            info_bottom: {
                fixed: true, // 不开启吸底模式
                listFolded: true, // 折叠歌曲列表
                autoplay: true, // 开启自动播放
                preload: "auto", // 自动预加载歌曲
                loop: "all", // 播放循环模式、all全部循环 one单曲循环 none只播放一次
                order: "list", //  播放模式，list列表播放, random随机播放
                lrcType: 3,
            },
        }
    },
    mounted() {
        this.initAudio();
    },
    created() {
        window.addEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.windowWidth = window.innerWidth;
        },
        initAudio() {
            this.audio.name = localStorage.getItem('musicName');
            this.audio.artist = localStorage.getItem('musicArtist');
            this.audio.url = localStorage.getItem('musicUrl');
            console.log(this.audio.name)
            console.log(this.audio.artist)
            // console.log(this.audio.url)
            // var searchValue = localStorage.getItem('searchValue');
            // eslint-disable-next-line no-unused-vars
            const ap = new APlayer({
                container: document.getElementById("aplayer_bottom"),
                audio: this.audio, // 音乐信息
                ...this.info_bottom, // 其他配置信息
            });

            // var searchValue = localStorage.getItem('searchValue');
            // fetch('http://localhost:3000/search?keywords=' + "可能")
            // .then(res => {
            //     if (res.status === 500) {
            //     throw new Error('系统错误')
            //     }
            //     return res.json()
            // })
            // .then(res => {
            //     // this.$notify.success('请求成功')
            //     console.log(res)
            // })
            // .catch(error => {
            //     this.$notify.error(error.message)
            // })
        }
        // initAudio() {
        //     // eslint-disable-next-line no-unused-vars
        //     const ap = new APlayer({
        //         container: document.getElementById("aplayer_bottom"),
        //         audio: this.audio, // 音乐信息
        //         ...this.info_bottom, // 其他配置信息
        //     });
            
        //     // var searchValue = localStorage.getItem('searchValue');
        //     // fetch('http://localhost:3000/search?keywords=' + searchValue)
        //     // .then(response => response.json())
        //     // .then(data => {
        //     //     console.log(data)


        //     // // this.tableData = data.result.songs;
        //     // // console.log(this.tableData)
        //     // // console.log(data.result.songs[0].id)
        //     // // this.search_id01 = data.result.songs[0].id
        //     // // geturl
        //     // // fetch('https://autumnfish.cn/song/url?id=' + '518725853')
        //     // // console.log(this.search_id01)


        //     // // fetch('https://autumnfish.cn/song/url?id=' + this.search_id01)
        //     // // .then(response => response.json())
        //     // // .then(data => {
        //     // //     // console.log(data.data[0])
        //     // //     // console.log(data.data[0].url)
        //     // //     this.audio[0].url = data.data[0].url
        //     // //     // this.musicUrl = data.data[0].url;
        //     // //     // console.log(this.musicUrl)
        //     // //     // eslint-disable-next-line no-unused-vars
        //     // //     const ap_bottom = new APlayer({
        //     // //         container: document.getElementById("aplayer_bottom"),
        //     // //         audio: this.audio, // 音乐信息
        //     // //         ...this.info_bottom, // 其他配置信息
        //     // //     });
        //     // //     // this.musicUrl = data.data[0].url;
        //     // //     // console.log(this.musicUrl)
        //     // //     })
        //     // //     .catch(error => {
        //     // //         console.error(error);
        //     // //     })

            

        //     // })
        //     // .catch(error => {
        //     //     console.error(error);
        //     // })

        //     // fetch('https://autumnfish.cn/cloudsearch?keywords=' + `原来`)
        //     // .then(response => response.json())
        //     // .then(data => {
        //     // // this.tableData = data.result.songs;
        //     // // console.log(this.tableData)
        //     // // console.log(data.result.songs[0].id)
        //     // this.search_id02 = data.result.songs[0].id
        //     // // geturl
        //     // // fetch('https://autumnfish.cn/song/url?id=' + '518725853')
        //     // // console.log(this.search_id01)
        //     // fetch('https://autumnfish.cn/song/url?id=' + this.search_id02)
        //     // .then(response => response.json())
        //     // .then(data => {
        //     //     // console.log(data.data[0])
        //     //     // console.log(data.data[0].url)
        //     //     this.audio[1].url = data.data[0].url
        //     //     // this.musicUrl = data.data[0].url;
        //     //     // console.log(this.musicUrl)
        //     //     // eslint-disable-next-line no-unused-vars
        //     //     const ap_bottom = new APlayer({
        //     //         container: document.getElementById("aplayer_bottom"),
        //     //         audio: this.audio, // 音乐信息
        //     //         ...this.info_bottom, // 其他配置信息
        //     //     });
        //     //     // this.musicUrl = data.data[0].url;
        //     //     // console.log(this.musicUrl)
        //     //     })
        //     //     .catch(error => {
        //     //         console.error(error);
        //     //     })
        //     // })
        //     // .catch(error => {
        //     //     console.error(error);
        //     // })

        //     // const ap_bottom = new APlayer({
        //     //     container: document.getElementById("aplayer_bottom"),
        //     //     audio: this.audio, // 音乐信息
        //     //     ...this.info_bottom, // 其他配置信息
        //     // });
        // },
    },
    computed: {
        shouldShowAside() {
            return this.windowWidth > 938;
        }
    },
    components: {
        CommonSide
    }
}
</script>

<style>
.show-main {
    width: 72%;
    margin: 0 auto;
}

@media screen and (max-width: 768px) {
    .show-main {
        width: 100%;
    }
}
</style>