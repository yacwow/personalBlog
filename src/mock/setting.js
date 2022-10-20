import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "http://www.duyiedu.com/source/img/logo.png",
    siteTitle: "my-blog",
    github: "https://github.com/yacwow",
    qq: "364090225",
    qqQrCode:
      "",
    wechat: "firstday20140528",
    // weixinQrCode:
    //   "",
    mail: "haochenbc@gmail.com",
    // icp: "黑ICP备17001719号",
    githubName: "yacwow",
    favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
  },
});
