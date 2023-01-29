# Space

设置组件之间的间距

## 何时使用

避免组件紧贴在一起，拉开统一空间

## 基本用法

<code src="./demo/basic.tsx"></code>

## 垂直间距

<code src="./demo/vertical.tsx"></code>

## 间距尺寸

内置四个尺寸 mini small medium large

<code src="./demo/size.tsx"></code>

## 改变对齐方式

内置四种对其方式 start center end baseline，在水平模式下默认为 start
<code src="./demo/align.tsx"></code>

## 环绕间距

环绕类型的间距，四周都有间距，一般用于换行的场景，配置 size 为[‘small’,'large']分别表示水平、垂直间距。
<code src="./demo/around.tsx"></code>

## Api

| 成员      | 说明                                                                    | 类型                                             | 默认值       | 版本  |
| --------- | ----------------------------------------------------------------------- | ------------------------------------------------ | ------------ | ----- |
| direction | 方向                                                                    | `horizontal` \| `vertical`                       | `horizontal` | 0.0.1 |
| size      | 间隔大小，内置四个大小。或者使用数组形式同时设置 `[水平间距, 垂直间距]` | `mini` \| `small` \| `medium`\| `small` \| Array | `small`      | 0.0.1 |
| align     | 排列方式                                                                | `start` \| `end` \| `center` \|`baseline`        | `start`      | 0.0.1 |
| wrap      | 是否自动换行                                                            | boolean                                          | true         | 0.0.1 |
