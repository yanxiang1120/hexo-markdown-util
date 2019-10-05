# hexo-markdown-util

hexo markdown 插件，兼容markdown图片和toc语法。

## 开始使用

```bash
npm install https://github.com/yanxiang1120/hexo-markdown-util.git --save
# clean当前项目
hexo clean 
# 重新生成静态文件
hexo g
```

## 转换结果

`![img1](img/img1.png)` -> `{% asset_img img1.png img1 %}`

`![img2](img2.png)` -> `{% asset_img img2.png img2 %}`

`![img3](http://www.example/img3.png)` -> `{% asset_img http://www.example/img3.png img3 %}`

`[TOC]` -> `<!-- toc -->`
