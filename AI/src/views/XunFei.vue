<template>
    <div>
        <h1>AI-Gan</h1>
        <el-input v-model="input" placeholder="发消息给AI" @keyup.enter.native="test"></el-input>
        <el-button v-loading.fullscreen.lock="loading" @click="test">发送</el-button>
        <el-link @click="clear" style="margin-left: 10px;">clear</el-link>
        <!-- <div id="output"></div> -->
        <!-- v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)"  -->
        <el-card id="output" style="text-align: left;padding: 10px;"></el-card>
        <div v-if="htmlContent" style="font-size: 16px;color: #000;">
            <p>&copy;2023|Ganxy</p>
        </div>
    </div>
</template>

<script>
import { Buffer } from 'buffer';
import { marked } from 'marked';
window.Buffer = Buffer;
export default {
    data() {
        return {
            input: '',
            // markdownText: '# Hello, Markdown!',
            // parsedMarkdown: '',
            htmlContent: localStorage.getItem('htmlContent'),
            // fullscreenLoading: false
            loading: false
        }
    },
    mounted() {
        // this.parseMarkdown();
        const outputElement = document.getElementById('output');
        outputElement.innerHTML = localStorage.getItem('htmlContent');
    },
    methods: {
        clear() {
            localStorage.clear()
            location.reload()
        },
        parseMarkdown() {
            // this.parsedMarkdown = marked(this.markdownText);

            // const markdownText = '# demo';
            // const html = marked(markdownText);
            // console.log(html);

            // const html = marked.parse('# Marked in Node.js\n\nRendered by **marked**.');
        },
        test() {

            // this.fullscreenLoading = true;
            this.loading = true
            // const markdownText = `
            // # 标题1
            // 这是一个段落。
            // **粗体**文字和*斜体*文字。
            // - 列表项1
            // - 列表项2
            // - 列表项3
            // `;
            // const markdownContentElement = document.getElementById('markdown-content');
            // markdownContentElement.innerHTML = marked(markdownText);



            // const hmac = new Hmac();
            // axios.get('https://spark-api.xf-yun.com/v2.1/chat', {
            //     params: {
            //         authorization: 'YXBpX2tleT0iNjBmYTM3ZjI4ODJhOGQ0ODUyYTFmNDYyOTgzZjg3ZTYiLCBhbGdvcml0aG09ImhtYWMtc2hhMjU2IiwgaGVhZGVycz0iaG9zdCBkYXRlIHJlcXVlc3QtbGluZSIsIHNpZ25hdHVyZT0iSWp2OEd6VStyWTNtR0lwb0ExZ0U5eFI4MVdZNzNTU1VnbTlVb1cxMUpkQT0i',
            //         date: 'Wed, 04 Oct 2023 05:06:49 GMT',
            //         host: 'spark-api.xf-yun.com'
            //     }
            // })
            // .then(response => {
            //     console.log('请求成功:', response.data);
            //     // 处理返回的数据
            // })
            // .catch(error => {
            //     console.error('请求发生错误:', error);
            //     // 处理请求发生的错误
            // });
            if(this.input === null) {
                this.$message('不能为空');
                return
            }
            const formData = {
                header: {
                    app_id: "b21ac0c9",
                    uid: "12345"
                },
                parameter: {
                    chat: {
                    domain: "generalv2",
                    temperature: 0.5,
                    max_tokens: 1024
                    }
                },
                payload: {
                    message: {
                        text: [
                            { role: "user", content: this.input },
                        ]
                    }
                }
            };
            const crypto = require('crypto');
            // const urlencode = require('urlencode');
            const apiKey = 'your_apikey'; // 替换为控制台获取的APIKey
            const apiSecret = 'your_apisecret'; // 替换为控制台获取的APISecret
            const host = 'spark-api.xf-yun.com'; // 请求的主机名，根据具体接口替换
            const path = '/v2.1/chat'; // 请求的路径，根据具体接口替换
            // 生成date参数
            const date = new Date().toUTCString();
            // 生成authorization参数
            const tmp = `host: ${host}\ndate: ${date}\nGET ${path} HTTP/1.1`;
            const tmpSha = crypto.createHmac('sha256', apiSecret).update(tmp).digest();
            const signature = Buffer.from(tmpSha).toString('base64');
            const authorizationOrigin = `api_key="${apiKey}", algorithm="hmac-sha256", headers="host date request-line", signature="${signature}"`;
            const authorization = Buffer.from(authorizationOrigin).toString('base64');
            // 生成最终的URL
            const params = {
                authorization: authorization,
                date: date,
                host: host
            };
            // console.log(urlencode.stringify(params))
            // console.log(this.input)
            const searchParams = new URLSearchParams(params).toString();
            // const socket = new WebSocket('wss://spark-api.xf-yun.com/v2.1/chat?authorization=YXBpX2tleT0iNjBmYTM3ZjI4ODJhOGQ0ODUyYTFmNDYyOTgzZjg3ZTYiLCBhbGdvcml0aG09ImhtYWMtc2hhMjU2IiwgaGVhZGVycz0iaG9zdCBkYXRlIHJlcXVlc3QtbGluZSIsIHNpZ25hdHVyZT0id1RRSFRHd0R5UUpDSktSVk5rNCtHZjg3V0V1U1ZRd0FTMXR2OUFnRHEvcz0i&date=Wed%2C%2004%20Oct%202023%2005%3A13%3A00%20GMT&host=spark-api.xf-yun.com');
            const socket = new WebSocket(`wss://spark-api.xf-yun.com/v2.1/chat?${searchParams}`);
            socket.onopen = () => {
                console.log('WebSocket连接已打开');
                // 在连接打开后可以向服务器发送消息
                // socket.send('Hello server!');
                socket.send(JSON.stringify(formData));
            };
            let sentence = '';
            socket.onmessage = (event) => {
                // console.log('收到服务器的消息:', event.data);


                // const data = JSON.parse(event.data);
                // const content = data.payload.choices.text[0].content;
                // console.log('收到服务器的消息:', content);

                const data = JSON.parse(event.data);
                const texts = data.payload.choices.text.map(x => x.content);
                sentence += texts.join(' ');
                // 处理从服务器接收到的消息
                // const responseData = JSON.parse(event.data);
                // const textContent = responseData.payload.choices.text[0].content;
                // console.log('提取到的内容:', textContent);


                // const responseData = JSON.parse(event.data);
                // const textContent = responseData.payload.choices.text[0].content;
                // // console.log('提取到的内容:', textContent);
                // const contentArray = [];
                // contentArray.push(textContent);
                // if (responseData.payload.choices.status === 2) {
                //     const mergedContent = contentArray.join('');
                //     console.log('合并后的内容:', mergedContent);
                //     // 对合并后的内容进行处理
                // }
            };
            socket.onclose = () => {
                console.log('WebSocket连接已关闭');
                // 在连接关闭后的操作
                // console.log('合成一句话:', sentence);
                console.log('收到服务器的消息:', sentence);
                // const outputElement = document.getElementById('output');
                // outputElement.textContent = sentence;

                const markdownText = sentence;
                const html = marked(markdownText);
                console.log(html)
                // const outputElement = document.getElementById('output');
                // outputElement.textContent = html;
                // outputElement.innerHTML = html;

                
                localStorage.setItem('htmlContent', html);
                this.loading = false
                location.reload()
                // this.fullscreenLoading = false;
                // const outputElement = document.getElementById('output');
                // localStorage.setItem('htmlContent', html);
                // outputElement.innerHTML = localStorage.getItem('htmlContent');

                // const markdownText = '# demo';
                // const html = marked(markdownText);
                // console.log(html);
            };
            socket.onerror = (error) => {
                console.error('WebSocket发生错误:', error);
                // 处理WebSocket发生的错误
            };
        }
    }
}
</script>