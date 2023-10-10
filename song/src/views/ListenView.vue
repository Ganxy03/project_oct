<template>
    <div>
        <span style="font-size: 13px;color: #9a9a9a;">遇到乱版刷新一下</span>&nbsp;<span @click="reflush" style="color: #08b5ee;font-size: 13px;">刷新</span><br>
        <span style="font-size: 13px;color: #9a9a9a;">能力有限做的不是很好 见谅</span>
        <div id="aplayer" style="text-align: left;"></div>
    </div>
</template>

<script>
import 'aplayer/dist/APlayer.min.css';
import APlayer from 'aplayer';
export default {
    data() {
        return {
            // songurl01: 'http://m801.music.126.net/20231005132630/dfa09f2d82f56ee9b291ca688823cf09/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28558883702/df8f/e7d3/3bd8/d41b2c646f161030483eb9086e577d76.flac',
            // songurl02: 'http://m701.music.126.net/20231005162908/5608b349473c617949cc44139c8b97f6/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28481792479/eb8e/f4ff/de6e/e51e226b51457ef81685d6c0ed80e9f7.mp3',
            search_id01: '',
            search_id02: '',
            audio: [
                {
                    name: '篝火旁',
                    artist: '吕大叶',
                    url: '',
                    // url: 'http://m801.music.126.net/20231005132630/dfa09f2d82f56ee9b291ca688823cf09/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28558883702/df8f/e7d3/3bd8/d41b2c646f161030483eb9086e577d76.flac',
                    cover: 'http://p1.music.126.net/sN5dTpmeJO1DhxIj1ogMLg==/109951163416453597.jpg',
                    lrc: 'http://124.221.138.245:5500/篝火旁.lrc'
                },
                {
                    name: '原来',
                    artist: '南征北战NZBZ',
                    url: '',
                    // url: 'http://m701.music.126.net/20231005162908/5608b349473c617949cc44139c8b97f6/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28481792479/eb8e/f4ff/de6e/e51e226b51457ef81685d6c0ed80e9f7.mp3',
                    cover: 'http://p1.music.126.net/v0LaYOX44ZiJjC1bzZbKOg==/109951163884032084.jpg',
                    lrc: 'http://124.221.138.245:5500/原来.lrc'
                }
            ],
            info: {
                fixed: false, // 不开启吸底模式
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
    methods: {
        reflush() {
            location.reload()
        },
        initAudio() {
            //search01
            // // geturl
            // fetch('https://autumnfish.cn/song/url?id=' + '518725853')
            // // console.log(this.search_id01)
            // // fetch('https://autumnfish.cn/song/url?id=' + this.search_id01)
            // .then(response => response.json())
            // .then(data => {
            //     // console.log(data.data[0])
            //     console.log(data.data[0].url)
            //     this.audio[0].url = data.data[0].url
            //     // eslint-disable-next-line no-unused-vars
            //     const ap = new APlayer({
            //         container: document.getElementById("aplayer"),
            //         audio: this.audio,
            //         ...this.info,
            //     });
            //     // this.musicUrl = data.data[0].url;
            //     // console.log(this.musicUrl)
            // })
            // .catch(error => {
            //     console.error(error);
            // })

            fetch('https://autumnfish.cn/cloudsearch?keywords=' + `篝火旁`)
            .then(response => response.json())
            .then(data => {
            // this.tableData = data.result.songs;
            // console.log(this.tableData)
            // console.log(data.result.songs[0].id)
            this.search_id01 = data.result.songs[0].id
            // geturl
            // fetch('https://autumnfish.cn/song/url?id=' + '518725853')
            // console.log(this.search_id01)
            fetch('https://autumnfish.cn/song/url?id=' + this.search_id01)
            .then(response => response.json())
            .then(data => {
                // console.log(data.data[0])
                // console.log(data.data[0].url)
                this.audio[0].url = data.data[0].url
                // this.musicUrl = data.data[0].url;
                // console.log(this.musicUrl)
                // eslint-disable-next-line no-unused-vars
                const ap = new APlayer({
                    container: document.getElementById("aplayer"),
                    audio: this.audio,
                    ...this.info,
                });
                // this.musicUrl = data.data[0].url;
                // console.log(this.musicUrl)
                })
                .catch(error => {
                    console.error(error);
                })
            })
            .catch(error => {
                console.error(error);
            })

            fetch('https://autumnfish.cn/cloudsearch?keywords=' + `原来`)
            .then(response => response.json())
            .then(data => {
            // this.tableData = data.result.songs;
            // console.log(this.tableData)
            // console.log(data.result.songs[0].id)
            this.search_id02 = data.result.songs[0].id
            // geturl
            // fetch('https://autumnfish.cn/song/url?id=' + '518725853')
            // console.log(this.search_id01)
            fetch('https://autumnfish.cn/song/url?id=' + this.search_id02)
            .then(response => response.json())
            .then(data => {
                // console.log(data.data[0])
                // console.log(data.data[0].url)
                this.audio[1].url = data.data[0].url
                // this.musicUrl = data.data[0].url;
                // console.log(this.musicUrl)
                // eslint-disable-next-line no-unused-vars
                const ap = new APlayer({
                    container: document.getElementById("aplayer"),
                    audio: this.audio,
                    ...this.info,
                });
                // this.musicUrl = data.data[0].url;
                // console.log(this.musicUrl)
                })
                .catch(error => {
                    console.error(error);
                })
            })
            .catch(error => {
                console.error(error);
            })
        


            //search02
            // fetch('https://autumnfish.cn/cloudsearch?keywords=' + `原来`)
            // .then(response => response.json())
            // .then(data => {
            //     // this.tableData = data.result.songs;
            //     // console.log(this.tableData)
            //     // console.log(data.result.songs[0].id)
            //     this.search_id02 = data.result.songs[0].id
            //     // geturl
            //     // fetch('https://autumnfish.cn/song/url?id=' + '518725853')
            //     // console.log(this.search_id01)
            //     fetch('https://autumnfish.cn/song/url?id=' + this.search_id02)
            //     .then(response => response.json())
            //     .then(data => {
            //         // console.log(data.data[0])
            //         console.log(data.data[0].url)
            //         this.audio[1].url = data.data[0].url
            //         // this.musicUrl = data.data[0].url;
            //         // console.log(this.musicUrl)
            //     })
            //     .catch(error => {
            //         console.error(error);
            //     })
            // })
            // .catch(error => {
            //     console.error(error);
            // })



            // this.audio[0].url = this.songurl01
            // this.audio[1].url = this.songurl02
            // eslint-disable-next-line no-unused-vars
            // const ap = new APlayer({
            //     container: document.getElementById("aplayer"),
            //     audio: this.audio,
            //     ...this.info,
            // });
            // console.log(this.audio[0])
        },
    }
}

</script>

<style>
#aplayer {
    width: 480px; 
}

.el-main {
    overflow-x: hidden;
}

@media screen and (max-width: 768px) {
    #aplayer {
        width: 320px; 
    }
}
</style>