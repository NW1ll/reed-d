
# Select 下拉选择框

## 使用方式



```javascript
import RdSelect from 'Reed-d';
Vue.use(RdSelect);
```

## 示例

### 常规用法
<rdselect></rdselect>



## API

### Attributes

|      参数       | 说明                                                                |   类型    | 默认值  |
| :-------------: | ------------------------------------------------------------------- | :-------: | :-----: |
|  `render-type`  | 数据渲染方式，有两种：`html` 、`json`                               | `String`  | `html`  |
|     `data`      | 渲染的时间数据                                                      | `Object`  |    -    |
|    `height`     | 滚动条 brush 的高度                                                 | `Number`  |  `14`   |
|    `margin`     | 文字和时间轴之间的 margin 距离                                      | `Number`  |  `19`   |
|  `orientation`  | 文字朝向                                                            | `String`  |  `top`  |
|    `tooltip`    | 悬浮在节点上的 tooltip 文字展示                                     | `String`  |    -    |
|    `nowrap`     | 是否换行，本质是限制 brush resize 拉长的限制                        | `Boolean` | `false` |
| `brushMaxWidth` | Brush 最大宽度（对应控制 timeline 缩小)，当 nowrap 为 true 时才生效 | `Number`  |  `500`  |
