module.exports = {
    // 页面标题
    title: 'easy-dimension',
    // 网页描述
    description: '基于canvas对元素进行标注',
    themeConfig: {
        sidebar: [
            {
              title: '介绍',   // 必要的
              path: '/introduction',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
              collapsable: false, // 可选的, 默认值是 true,
              sidebarDepth: 0,    // 可选的, 默认值是 1\
            },
            {
              title: '点',
              path: '/dot/',
              collapsable: false, // 可选的, 默认值是 true,
              sidebarDepth: 0,    // 可选的, 默认值是 1\
              children: [
                  '/',
              ]
            },
            {
              title: '线',
              path: '/line/',
              collapsable: false, // 可选的, 默认值是 true,
              sidebarDepth: 0,    // 可选的, 默认值是 1\
              children: [
                  {
                    title: '线段',
                    path: '/line/line'
                  },
                  {
                    title: '曲线',
                    path: '/line/cure'
                  }
              ]
            },
            {
              title: '面',
              path: '/surface/',
              collapsable: false, // 可选的, 默认值是 true,
              sidebarDepth: 0,    // 可选的, 默认值是 1\
              children: [
                {
                  title: '任意多边形',
                  path: '/surface/polyGon'
                },
                {
                  title: '正多边形',
                  path: '/surface/eqlPolyGon'
                },
              ]
            }
        ]
    }
}