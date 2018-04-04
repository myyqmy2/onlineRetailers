# zyumall

这是一个本人关于vue2.0学习之后，制作的基于vue2.0全家桶的电商小demo。
目前只实现了基本的商品选购和购物车交互，还有很多需要完善的地方，搭建过程中也遇到了很多问题，关于这些具体问题我会在我的个人博客中写一篇文章进行总结。
有兴趣的话可以来看看哦：[zyuyu's blog][1]
## 技术栈
> *element, vue-cli, vue-router, vuex ,axios* 
//使用element进行样式布局
//使用vue-router进行页面切换
//使用vuex存储购物车数据
//使用axios获取数据
//本地mock数据使用axios-mock-adapter构建

预计还会完善的功能：

 - 商品详情页
 - 购物车中关于商品数量变更的交互

其实本项目中还有我没有解决的两个问题，一个是关于重新安装依赖后图片解析失败，另一个是vuex中数据改变页面数据未重载导致的不能及时变更相关getters数据。待解决后我会将解决方法进行总结说明。

通过这个demo的搭建，让我对学习的vue2.0的相关知识以及项目的组件化开发有了更深入的认识和了解，希望能再后来的工作中继续进步。

顺便推销一下自己，一个热爱前端技术的新人coder，目前求职中，坐标深圳
联系邮箱383982493@qq.com

下面放几张预览图~
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


  [1]: https://myyqmy2.github.io