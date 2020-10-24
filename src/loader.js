// source为匹配文件的源码 返回为string类型
module.exports = function (source) {
  let content = source.replace(/<p>/g, "<p class='name'>");
  let s = `
    let style = document.createElement('style');
    style.innerHTML = '.name{color:red}'
    document.head.appendChild(style);
    document.body.innerHTML = ${content};
  `;
  return s;
};
