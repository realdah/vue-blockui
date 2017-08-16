# vue-blockui

[![npm](https://img.shields.io/npm/v/vue-blockui.svg) ![npm](https://img.shields.io/npm/dm/vue-blockui.svg)](https://www.npmjs.com/package/vue-blockui)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

BlockUI for vue 2, similiar to jquery blockUI, can be used for loading screen.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Demo Screens](#demo-screens)

# Installation

```
npm install --save vue-blockui
```

## Default import (Recommended)

Install all the components:

```javascript
import Vue from 'vue'
import BlockUI from 'vue-blockui'

Vue.use(BlockUI)
```

Use specific components:

```javascript
import Vue from 'vue'
import { Test } from 'vue-blockui'

Vue.component('test', Test)
```

## Distribution import

Install all the components:

```javascript
import Vue from 'vue'
import 'vue-blockui/dist/vue-blockui.css'
import BlockUI from 'vue-blockui/dist/vue-blockui.common'

Vue.use(BlockUI)
```

Use specific components:

```javascript
import Vue from 'vue'
import 'vue-blockui/dist/vue-blockui.css'
import { Test } from 'vue-blockui/dist/vue-blockui.common'

Vue.component('test', Test)
```

**⚠️ You may have to setup your bundler to embed the css file in your page.**

If you are using distribution import, You might have to include below configurations in your webpack config if you see errors related to css loading.

```
    {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
    }
```

* Be aware that you might to install style-loader and css-loader through npm install if they are not there in your package.json.

```
npm install style-loader css-loader --save-dev    
```

## Browser

```html
<link rel="stylesheet" href="vue-blockui/dist/vue-blockui.css"/>

<script src="vue.js"></script>
<script src="vue-blockui/dist/vue-blockui.browser.js"></script>
```

The plugin should be auto-installed. If not, you can install it manually with the instructions below.

Install all the components:

```javascript
Vue.use(BlockUI)
```

Use specific components:

```javascript
Vue.component('test', BlockUI.Test)
```

## Source import

Install all the components:

```javascript
import Vue from 'vue'
import BlockUI from 'vue-blockui/src'

Vue.use(BlockUI)
```

Use specific components:

```javascript
import Vue from 'vue'
import { Test } from 'vue-blockui/src'

Vue.component('test', Test)
```

**⚠️ You need to configure your bundler to compile `.vue` files.** More info [in the official documentation](https://vuejs.org/v2/guide/single-file-components.html).

I would recommend you to create your VUE project using vue-cli, then it should included vue-loader in webpack.

# Usage

| Prop Name  | Description |
| ------------- | ------------- |
| message  | Message to be shown in loading screen  |
| url  | <b>Optional Field</b>, image including svg/gif/png/jpg etc, you can use any animated/static image supported by img tag. |

Then, you can combine with <b>v-if</b>/<b>v-show</b> to show or hide the BlockUI.

## In your template
```
<BlockUI message="Loading..." :url="url"></BlockUI>
```

## In your Code
Please be aware, if you are using webpack and with file-loader to add finger print to your asserts,
You can not add relative image resouce path directly in BlockUI component.
Please use import to get the image, then pass it to the directive.
```
import Vue from 'vue'
import BlockUI from 'vue-blockui'
import loadingImage from './assets/logo.png'

Vue.use(BlockUI)

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      url : loadingImage   //It is important to import the loading image then use here
    }
  }
}
```

## Styling Customizatoin
You can override BlockUI sytlings based on your needs.
Check the class defined for BlockUI using develop tool in your favorite browser.


# Demo Screens
Check below screenshots (More to come):

![alt text](https://raw.githubusercontent.com/realdah/vue-blockui/master/samples/sample1.jpg)

# Plugin Development

## Installation

The first time you create or clone your plugin, you need to install the default dependencies:

```
npm install
```

## Watch and compile

This will run webpack in watching mode and output the compiled files in the `dist` folder.

```
npm run dev
```

## Use it in another project

While developping, you can follow the install instructions of your plugin and link it into the project that uses it.

In the plugin folder:

```
npm link
```

In the other project folder:

```
npm link vue-blockui
```

This will install it in the dependencies as a symlink, so that it gets any modifications made to the plugin.

## Publish to npm

You may have to login to npm before, with `npm adduser`. The plugin will be built in production mode before getting published on npm.

```
npm publish
```

## Manual build

This will build the plugin into the `dist` folder in production mode.

```
npm run build
```

---

## License

[MIT](http://opensource.org/licenses/MIT)
