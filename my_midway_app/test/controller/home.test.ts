import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework, Application } from '@midwayjs/koa';
import * as assert from 'assert';
import { HomeController } from '../../src/controller/home.controller';

describe('test/controller/home.test.ts', () => {


  it('should GET /', async () => {

    const app = await createApp<Framework>();

    // 根据依赖注入 class 获取实例
    const homeController = await app.getApplicationContext().getAsync<HomeController>(HomeController);
    
    const res = homeController.main();
    console.log('res', res)
    // assert.strictEqual(res, '//www.baidu.com/img/flexible/logo/pc/index.png')

    // close app
    await close(app);
  });

});

