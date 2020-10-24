const loaderUtils = require("loader-utils");
// source为匹配文件的源码 返回为string/buffer类型
module.exports = function (source) {
  // 获取loader options配置项参数
  let opt = loaderUtils.getOptions(this);
  // 异步打包 延迟两秒去build
  const callback = this.async();
  console.log("opt", typeof opt, opt); // object { from: "loader"}
  let content = source.replace(/<p>/g, "<p class='name'>");

  setTimeout(() => {
    let s = `
    let style = document.createElement('style');
    style.innerHTML = '.name{color:green}'
    document.head.appendChild(style);
    document.body.innerHTML = ${content};
  `;
    callback(null, s);
  }, 2000);
};
