<template>
    <div>
        <el-card>
            <div>
                <!-- 歌名
                <span @click="play"><i class="el-icon-video-play"></i></span> -->
                <el-table
                    :data="tableData"
                    :row-key="row => row.id"
                    style="width: 305px">
                    <el-table-column
                    prop="name"
                    label="歌名">
                    </el-table-column>
                    <el-table-column
                    prop="operate"
                    label="操作">
                    <template slot-scope="scope">
                        <el-link type="info" style="font-size: 20px;" @click="playMusic(scope.row.id,scope.row.name,scope.row.artists[0].name)"><i class="el-icon-video-play"></i></el-link>
                        <!-- <el-link type="info" style="font-size: 20px;margin-left: 10px;" @click="playMV(scope.row.id)"><i class="el-icon-film"></i></el-link>
                        <el-link type="info" style="font-size: 20px;margin-left: 10px;" @click="message"><i class="el-icon-chat-line-round"></i></el-link> -->
                    </template>
                    </el-table-column>
                    <el-table-column
                    prop="artists[0].name"
                    label="歌手">
                    </el-table-column>
                    <!-- <el-table-column
                    prop="id"
                    label="id">
                    </el-table-column> -->
                </el-table>
                <!-- <el-link @click="search">搜索</el-link> -->
            </div>
        </el-card>
    </div>
</template>


<script>
export default {
    data() {
        return {
            tableData: []
        }
    },
    created() {
        this.search()
    },
    methods: {
        search() {
            var searchValue = localStorage.getItem('searchValue');
            // console.log(searchValue);
            fetch('http://song-api.ganxy03.cn/search?keywords=' + searchValue)
            .then(res => {
                if (res.status === 500) {
                    throw new Error('系统错误')
                }
                return res.json()
            })
            .then(res => {
                this.$notify.success('出不来刷新一下')
                this.tableData = res.result.songs;
                // console.log(res)
            })
            .catch(error => {
                this.$notify.error(error.message)
            })
        },
        playMusic(id,name,artistName) {
            // console.log("paly")
            // console.log(id)
            console.log(name)
            localStorage.setItem('musicName', name);
            console.log(artistName)
            localStorage.setItem('musicArtist', artistName);
            fetch('http://song-api.ganxy03.cn/song/url?id=' + id)
            .then(response => response.json())
            .then(data => {
                // console.log(data.data[0])
                localStorage.setItem('musicUrl', data.data[0].url);
            })
            .catch(error => {
                console.error(error);
            })
            location.reload()
        }
    }
}

</script>