# react cli


## 集成了哪些特性
1. react17、readux、saga、router、antd
2. eslint 本地运行时 + 编译时
3. babel （除了个别提案感觉用起来会坑队友，基本都添加了）
4. webpack5
5. CICD (自动化部署这一步暂时没空搞，最好还是jekins，不然需要中间服务管理tag)
6. docker
7. css module
8. env（参考cra）
9. ts + js (可以混合开发，喜欢用啥不强制要求)
11. 热更新
12. 待补充...

### `yarn start`

启动项目

### `yarn build`
打包

参数

名称 | 描述
---|---
--stats | 是否写构建信息（主要还是给BundleAnalyzerPlugin用，不过没做主动启动这个服务）
--profile | webpack分析打包

### `yarn lint`
eslint检测

### `yarn image`
构建镜像

参数

名称 | 描述
---|---
--tag \ --t | 镜像tag
--d | 镜像描述

==*备注：CICD或许是clone镜像方式问题，脚本.git文件不一致，所以不在cicd自动构建镜像*==

### `yarn bnp`
打包+构建镜像
参数同上

### `yarn test` 
暂未添加，正经前端搞啥自动化测试，是需求不够多吗

### 备注


### 待处理事件



## 相关文档链接
 [Create React App](https://github.com/facebook/create-react-app)
 
 [babel](https://www.babeljs.cn/docs/)
 
 [WEBPACK 5.X](https://webpack.docschina.org/guides/getting-started/#creating-a-bundle).