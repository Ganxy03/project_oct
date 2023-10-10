<template>
    <div>
        <div class="hitok_big">
            <el-link @click="test" style="color: #17a2b8;float: right;">刷新</el-link>
            <p id="hitokoto_text" style="color: #9a9a9a;">D:获取中...</p>
            <span style="color: #9a9a9a;float: right;">--{{ author }} 《{{ from }}》</span>
            <!-- <span @click="test" style="color: #17a2b8;float: right;">刷新</span> -->
        </div>
        <!-- <el-link @click="demo">测试</el-link> -->
        <!-- {{ message }}
        <br><span style="color: #9a9a9a;float: right;">--{{ author }} 《{{ from }}》</span> -->
        <!-- <el-button type="primary" @click="test">获取</el-button> -->
    </div>
</template>

<script>

export default {
    data() {
        return {
            message: '',
            author: '',
            from: ''
        }
    },
    mounted() {
        this.test()
    },
    methods: {
        clush() {
            location.reload()
        },
        test() {
            fetch('https://v1.hitokoto.cn')
            .then(response => response.json())
            .then(data => {
                const hitokoto = document.querySelector('#hitokoto_text')
                // const hitokoto = document.querySelector('#hitokoto_text')
                // // hitokoto.href = `https://hitokoto.cn/?uuid=${data.uuid}`
                // hitokoto.innerText = data.hitokoto
                // console.log(hitokoto)
                hitokoto.innerText = data.hitokoto
                // console.log(hitokoto)
                console.log(data)
                this.message = data.hitokoto
                this.author = data.creator
                this.from = data.from
            })
            .catch(console.error)
        },
        // demo() {
        //     fetch('http://localhost:3000/search?keywords=' + "如果当时")
        //     .then(res => {
        //         if (res.status === 500) {
        //         throw new Error('系统错误')
        //         }
        //         return res.json()
        //     })
        //     .then(res => {
        //         // this.$notify.success('请求成功')
        //         console.log(res)
        //     })
        //     .catch(error => {
        //         this.$notify.error(error.message)
        //     })
        // }

    }
}
</script>

<style>
.hitok_big {
    /* background-color: blueviolet; */
    width: 600px;
    height: 50px;
}

@media screen and (max-width: 768px) {
    .hitok_big {
        width: 340px;
        height: 80px;
    }
}

</style>