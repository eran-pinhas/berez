module.exports = {
  chainWebpack: (config) => {

    // const svgRule = config.module.rule('svg');
 
    // console.log(svgRule.uses);
    // svgRule.uses.clear();
 
    // svgRule
    //   .use('vue-svg-loader')
    //   .loader('vue-svg-loader');

    return config.resolve.extensions.prepend(".mp3")
  }
};
