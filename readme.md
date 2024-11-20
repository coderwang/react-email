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
>
> 方法三：`display: '-webkit-box' lineClamp: 1,WebkitLineClamp: 1,WebkitBoxOrient: 'vertical' as const`  
> (1) gmail，不生效（会自动去掉 lineClamp、WebkitLineClamp、WebkitBoxOrient 等属性）  
> (2) outlook，不生效（会自动去掉 display: -webkit-box、lineClamp、WebkitLineClamp、WebkitBoxOrient 等属性）

2、多行文本显示省略号

> `display: '-webkit-box' lineClamp: 2,WebkitLineClamp: 2,WebkitBoxOrient: 'vertical' as const`  
> (1) gmail，不生效（原因如上）  
> (2) outlook，不生效（原因如上）

3、gmail、outlook 不支持 transform 属性（translate、rotate、scale 都不支持）

4、gmail 对 webp 格式的透明图片支持的不是很好，可能需要你主动加一下圆角

5、css 尽量使用内联样式，使用类名有可能被覆盖或直接不支持

6、图片用 CDN

7、不要用 flex 布局，float 浮动，position 定位等

8、Button 内的文字想要垂直居中，需要将内部的文字用 span 包裹

9、outlook 不支持 calc 函数

10、图片和文字垂直居中对齐

```jsx
<div style={{ fontSize: '0px', marginBottom: '28px' }}>
	<Img
		style={{
			display: 'inline-block',
			marginRight: '10px',
			verticalAlign: 'middle',
		}}
		src="/static/otd_logo.png"
		alt="logo"
		width="32"
		height="32"
	/>
	<div
		style={{
			color: '#222222',
			fontFamily: 'D-DIN',
			fontSize: '21px',
			fontStyle: 'normal',
			fontWeight: 700,
			verticalAlign: 'middle',
		}}
	>
		OfferToday
	</div>
</div>
```

(1) 必须同时设置图片和文字的 verticalAlign: 'middle'  
(2) 如果文字使用 div 标签，则还需要设置它的父元素的 fontSize: '0px'（解决空白符问题）以及它自身 display: 'inline-block'（防止换行）  
(3) 如果文字使用 div 标签，则不需要额外设置
