# 一、启动

```bash
pnpm install

pnpm dev
```

# 二、注意事项

1、 单行文本显示省略号

> 方法一： `whiteSpace: 'nowrap'`  
> (1) 网页版网易邮箱，不生效（由于权重问题被覆盖）  
> (2) 网易邮箱大师，不生效（未知）
>
> 方法二：`whiteSpace: 'nowrap !important'`  
> (1) 网易邮箱大师，不生效（未知）  
> PS: table 布局下别用，文字超长会超出盒子
>
> 方法三：`display: '-webkit-box', lineClamp: 1, WebkitLineClamp: 1, WebkitBoxOrient: 'vertical' as const`  
> (1) gmail，不生效（会自动去掉 lineClamp、WebkitLineClamp、WebkitBoxOrient 等属性）  
> (2) outlook，不生效（会自动去掉 display: -webkit-box、lineClamp、WebkitLineClamp、WebkitBoxOrient 等属性）

2、多行文本显示省略号

> `display: '-webkit-box', lineClamp: 2, WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' as const`  
> (1) gmail，不生效（原因如上）  
> (2) outlook，不生效（原因如上）

3、gmail、outlook 不支持 transform 属性（translate、rotate、scale 都不支持）

4、gmail 对 webp 格式的透明图片支持的不是很好，可能需要你主动加一下圆角

5、css 尽量使用内联样式，使用类名有可能被覆盖或直接不支持

6、图片用 CDN

7、不要用 flex 布局，float 浮动，position 定位等

8、Button 内的文字想要垂直居中，需要将内部的文字用 span 包裹，否则在网易邮箱下面会出问题

9、outlook 不支持 calc 函数

10、手机端浏览器 gmail 和 outlook 不支持写 style 标签，会自动删除

11、Column 组件和它的最外层子元素不要写左右 margin，在手机端浏览器会失效

12、Button 组件内部包裹 div 的话，div 部分地方可能无法点击（可能是由于 div 内部又有一层 Button 组件）或出现一些奇奇怪怪的问题，需要把 div 再用 Section 组件包裹一下

13、Row 组件不要加 padding，否则在手机端浏览器下 outlook 会出现奇怪的问题，可以用 div 包裹 Row 组件，然后给 div 加 padding

14、要想手机端自动缩放，需要给 Row 加`style={{ width: '600px' }}`，目前仅手机端浏览器 gmail 不支持

15、别用`whiteSpace: 'pre-line | pre-wrap'`去换行，outlook 无效

16、在个别浏览器（qq、网易）下字体设置会被覆盖，需用 style 标签手动设置
