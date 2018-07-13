## 使用 vueAdmin-template 的构建流程，不使用 VUEX，不使用它的MOCK，不使用它的AJAX，自己封装了AJAX

```
# Clone project
git clone https://github.com/40kb/qing.git

# Install dependencies
npm install

# 建议不要用cnpm  安装有各种诡异的bug 可以通过如下操作解决npm速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# serve with hot reload at localhost:9528
npm run dev

# build for production with minification
npm run build

# 启用本地mock
npm run mock

# build for production and view the bundle analyzer report
npm run build --report
```

## 新增页面编辑 router/index.js，指向对应的 `src/views/**.vue` 文件


## 接口请求（默认为 POST）可以通过传参数形式改为 GET，请求的封装在 utils/http.js(使用jquery ajax)
```js
  // API 请求
  // 1. 在src/api/api.js 里创建一条记录
  // 2. data 下创建一个对应的 JSON 数据 (src/api/index.js 会处理映射关系)
  // 3. 任何 VUE 实例/组件 能直接访问到所有的 API

  // 例如：（看 views/dashboard/index.vue）
    created() {
      this.API.getUser({
        data: {
          admin: 1,
          pwd: 2
        }
      }).then((res) => {
        console.log('====== API RESPONSE ======')
        console.log(res)
        console.log('====== END API RESPONSE ======')
      })
    }
```

## 开启本地 mock 需要新开一个窗口 `npm run mock`

Employee 员工管理
Customer 客户管理
Cash 提现管理
Order 订单管理
Overview 平台概况
Commission 佣金管理
运营设置
Logs 后台日志管理
organize 组织架构管理
sys系统管理
