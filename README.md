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

## Use Component

Install all the components:

```javascript
import Vue from 'vue'
import BlockUI from 'vue-blockui'

Vue.use(BlockUI)
```


**
⚠️ If You see some errors during webpack compilation, you might be missing the right configuration for loading css in your <b>webpack.config.js</b>.
**

Under "rules", you should have below configuration: 
```
    {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
    }
```

* Be aware that you should have configured style-loader and css-loader in your package.json to support above rule.

```
npm install style-loader css-loader --save-dev    
```


**⚠️ You might need to configure your bundler to support `.vue` files.** More info [in the official documentation](https://vuejs.org/v2/guide/single-file-components.html).

I would recommend you to create your VUE project using vue-cli, then it should included vue-loader in webpack by default.

# Usage

| Prop Name  | Description |
| ------------- | ------------- |
| message  | Message to be shown in loading screen  |
| url  | <b>Optional Field</b>, image including svg/gif/png/jpg etc, you can use any animated/static image supported by img tag.  Please be aware that you'd better import the image resource then use it instead of directly using relative image path. Example can be found in this document. If <b>url</b> attribute presents and not empty, it will ignore <b>html</b> attribute|
| html | (Deprecated, suggest to use [slot] option instead), <b>Optional Field</b>, you can insert html template to icon area, this enables you to utilize external animated fonts/css libaries. eg. [fontawesome](http://fontawesome.io/examples/) or [Spinkit](https://github.com/tobiasahlin/SpinKit) etc.  <b>Don't forget to import related css & fonts into project by yourself</b>
| [slot] | Directly use any html template or other Vue Component, it will replace the icon part, see examples in readme.

Then, you can combine with <b>v-if</b>/<b>v-show</b> to show or hide the BlockUI.


## In your Code
Please be aware, if you are using webpack and with file-loader to add finger print to your asserts,
You can not add relative image resouce path directly in BlockUI component.
Please use import to get the image, then pass it to the directive.
```
import Vue from 'vue'
import BlockUI from 'vue-blockui'
import loadingImage from './assets/logo.png'

Vue.use(BlockUI)
```
```
<BlockUI :message="msg" :url="url"></BlockUI>

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
or
```
<BlockUI :message="msg" :html="html"></BlockUI>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      html: '<i class="fa fa-cog fa-spin fa-3x fa-fw"></i>',  //this line demostrate how to use fontawesome animation icon 
    }
  }
}
```

Or using inline html or component **[slot example]**
```
<BlockUI :message="msg">
  <i class="fa fa-cog fa-spin fa-3x fa-fw"></i>
</BlockUI>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  }
}
```

## Styling Customization
You can override BlockUI sytlings based on your needs.
Check the class defined for BlockUI using develop tool in your favorite browser for more details.

The layout hierarchy desmostrated in below, I did not use simple class like "label" due to the risk of being polluted by other external css.
```
.loading-container {
  .loading-backdrop {
    //the backdrop falls in here, you can override the opacity etc.
  }
  .loading {
    .loading-icon {
      //the image or inserted html will be put here
    }
    .loading-label {
      //the label showing on loading screen
    }
  }
}

```

# Demo Screens
Check below screenshots (More to come):

Below screen is using animated gif/svg
![Sample used animated gif/svg](https://raw.githubusercontent.com/realdah/vue-blockui/master/samples/sample1.jpg)

Below screen is using font awesome css animation
![Sample used css animation](https://raw.githubusercontent.com/realdah/vue-blockui/master/samples/sample2.png)

Below screen is using spinkit css animation
![Sample used css animation](https://raw.githubusercontent.com/realdah/vue-blockui/master/samples/sample3.png)

Sample config for using spinkit css animation:
```
<BlockUI :message="msg">
  <div class="sk-wave">
    <div class="sk-rect sk-rect1"></div>
    <div class="sk-rect sk-rect2"></div>
    <div class="sk-rect sk-rect3"></div>
    <div class="sk-rect sk-rect4"></div>
    <div class="sk-rect sk-rect5"></div>
  </div>
</BlockUI>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  }
}
```


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
