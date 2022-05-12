import { Controller, Get } from '@midwayjs/decorator';


@Controller('/')
export class HomeController {
  @Get('/')
  async main(): Promise<string> {
    // return 'Hello Midwayjs!';
    
    // return 'Hello Midwayjs!';

        // 加载https模块
        const https = require('https');
        // Cheerio 是一个Node.js的库， 它可以从html的片断中构建DOM结构，然后提供像jquery一样的css选择器查询
        const cheerio = require('cheerio');

        // 定义百度网站
        const url = 'https://www.baidu.com';

        var img_href = '';

        https.get(url, function(res) {
            var html = '';
            // 获取页面数据
            res.on('data', function(data) {
                html += data;
            });

            // 数据获取结束
            res.on('end', function() {
                // 定义 $ 
                var $ = cheerio.load(html);
                // 根据div标签的 id=lg 获取图片所在div
                var imgDiv = $('div[id = lg]');
                // 获取img标签的src属性
                img_href = imgDiv.find('img').attr('src');
                
                // 打印信息
                console.log(img_href);
            });
        }).on('error', function() {
            console.log('获取数据出错！');
        });
        return img_href;

  }

}

