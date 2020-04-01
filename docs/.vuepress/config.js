module.exports = {
  title: "panda-mall",
  description: "手把手教你搭建vue小商城",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  base: "/test/",
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: true, // 文档更新时间：每个文件git最后提交的时间
    nav: [
      { text: "前端算法", link: "/algorithm/" }, // 内部链接 以docs为根目录
      { text: "博客", link: "http://obkoro1.com/" }, // 外部链接
      // 下拉列表
      {
        text: "GitHub",
        items: [
          { text: "GitHub地址", link: "https://github.com/OBKoro1" },
          {
            text: "算法仓库",
            link: "https://github.com/OBKoro1/Brush_algorithm"
          }
        ]
      }
    ],
    sidebar: [
      {
        title: "基础",
        collapsable: false,
        sidebarDepth: 0,
        children: [
          "/Vue/",
          "/Vue/Vuex.md",
          {
            title: "title",
            sidebarDepth: 0,
            children: ["/Vue/", "/Vue/Vuex.md"]
          }
        ]
      },
      {
        title: "进阶",
        collapsable: false,
        sidebarDepth: 0,
        children: ["/Vue/", "/Vue/Vuex.md", "/Vue/Vue-router.md"]
      }
    ]
  }
};
