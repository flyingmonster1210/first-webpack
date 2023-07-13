# first-webpack
some basic functionalities of build tool: webpack

# npx webpack
自动打包，打包到dist文件夹，并会对源代码进行改进

# webpack.config.js
配置webpack

# 加载其他loader
### .css文件的loader
要想webpack分析打包.css文件，必须添加loader： style-loader & css-loader，然后在webpack.config.js的module中配置

### 图片匹配
使用webpack内置图片loader，但需要在webpack.config.js的module中配置

### 新版本.js兼容旧版本所需要的loader
babel-loader, @babel/core, @babel/preset-env

### 压缩优化代码
terser-webpack-plugin
压缩最后build出来的代码，其实就是dist中的代码，也就是最后需要的部署的production mode的代码

### 修改后自动打包
webpack-dev-server
修改js代码后自动build并刷新页面，不需要再次通过npx webpack来更新

### 压缩路径
直接添加配置resolve，其中添加alias属性
有时.js文件嵌套太深，需要压缩import的文件路径

### 可视化打包分析工具
webpack-bundle-analyzer


