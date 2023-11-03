/*
cron "25 2,10 * * *" script-path=jd_bean_home.js, tag=领京豆升级任务
 */

const axios = require('axios');
const qs = require('qs');
let data = qs.stringify({

});

let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://jdshop.yili.com/api/user/daily/sign?exParams=true',
    headers: {
        'host': 'jdshop.yili.com',
        'accesstoken': 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI0MzExNjkzIiwiaWF0IjoxNjk4OTg5NDMxLCJzdWIiOiJkc2tqMiIsImlzcyI6ImRza2oxIiwiZXhwIjoxNzAxNTgxNDMxfQ.6hSbyfkdLnu4PJ6T96spim3j4rQ3io81JGYd0zg3t-k',
        'scene': '1089',
        'xweb_xhr': '1',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/6.8.0(0x16080000) NetType/WIFI MiniProgramEnv/Mac MacWechat/WMPF MacWechat/3.8.4(0x13080414)XWEB/31011',
        'content-type': 'application/x-www-form-urlencoded',
        'accept': '*/*',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://servicewechat.com/wxf32616183fb4511e/519/page-frame.html',
        'accept-language': 'zh-CN,zh;q=0.9'
    },
    data : data
};

axios.request(config)
    .then((response) => {
        console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
        console.log(error);
    });
