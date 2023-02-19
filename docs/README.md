# Reed-D

## Usage

### Install dependencies

```
npm install
```

# 开始使用

## 通过 npm 安装

我们提供了 `reed-d/包名` npm 包，通过下面命令即可完成安装，`reed-d` 依赖于 与 `vue`，所以不要忘记安装依赖包。

```bash
npm i @reed-d/components -S
```

## 引入 reed-d/components

安装完成后，即可使用 `import` 或 `require` 使用。

完整引入 `reed-d/components`

```js
import Vue from 'vue';
import reed from 'reed-d/components';

Vue.use(reed)
```

按需引入 `@reed-d/components`

```js
import Vue from 'vue';
import { button } from '@sinokit/components'; // 引入单个组件，如 JsonEditor

Vue.component('button', JsonEditor);
```



> 持续迭代更新……

## License

MIT