const rules = {
    name: "【花火论坛】： ",
    url: "https://www.sayhuahuo.com/dsu_paulsign-sign.html", //用于获取formhash的链接
    cookie: config.huahuo.cookie,
    formhash: 'formhash=(.+)"', //formhash正则
    verify: "您需要先登录才能继续本操作", //验证cookie状态
    op: [{
        name: "签到",
        method: "post", //签到请求方式 get/post
        ua: "pc",
        url: "https://www.sayhuahuo.com/plugin.php?id=dsu_paulsign:sign&operation=qiandao&infloat=1&inajax=1", //签到链接
        data: "formhash=@formhash&qdxq=kx&qmode=3&todaysay=&fastreply=0"
    }]
};

async function shuahuo() {
    const template = require("../Template");
    return rules.name + await template(rules)
}
module.exports = shuahuo