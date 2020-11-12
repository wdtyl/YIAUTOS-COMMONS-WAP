const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

const IS_LIB = process.env.VUE_APP_MODE === "library";
const BUILD_TYPE = process.env.VUE_APP_MODE;

const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const outputDirConfig = {
  document: 'document-dist',
  example: 'example-dist',
  library: 'output',
};

const config = {
  outputDir: outputDirConfig[BUILD_TYPE],
  productionSourceMap: false,
  filenameHashing: false,
  configureWebpack: config => {
    if (BUILD_TYPE === 'library') {
      //设置打包不进行代码分片,都打到一个js中
      config.plugins.push(new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }));
      config.plugins.push(new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            drop_debugger: true,
            drop_console: true,
          },
          sourceMap: false,
          parallel: true, // 多进程并行
        }
      }));
      // 为生产环境修改配置,打包时忽略第三方库
      return {
        externals: {
          vue: "vue",
          // lodash: 'lodash',
        }
      };
    } else {
      // 为开发环境修改配置...
      return {};
    }
  },
  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end()
  },
  parallel: require('os').cpus().length > 1
};

if (BUILD_TYPE === 'document') {
  config.publicPath = "./";
  config.pages = {
    index: {
      entry: "document/main.ts",
      template: "public/index.html",
      filename: "index.html",
      title: "宜买车Wap组件库文档"
    }
  };
} else if (BUILD_TYPE === 'example') {
  config.publicPath = "./";
  config.pages = {
    index: {
      entry: "example/main.ts",
      template: "public/mobile.html",
      filename: "index.html",
      title: "宜买车Wap组件库"
    }
  };
  config.css = {
    sourceMap: false,
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ['*']
          })
        ]
      },
      //覆盖vantUI的原始样式
      //参考 https://github.com/youzan/vant/blob/dev/src/style/var.less
      less: {
        modifyVars: {
        }
      }
    }
  }
} else {
  config.css = {
    sourceMap: false,
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ['*']
          })
        ]
      },
      //覆盖vantUI的原始样式
      //参考 https://github.com/youzan/vant/blob/dev/src/style/var.less
      less: {
        modifyVars: {
        }
      }
    }
  }
}

module.exports = config;
