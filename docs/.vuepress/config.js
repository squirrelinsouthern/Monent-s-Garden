module.exports = {
    title: 'Monet\'s Garden UI',
    base:"/Monet-s-Garden/",
    head:[
        ['link', { rel: 'icon', href: '/favorite.png'}]
    ],
    description: '每个人心中都有一个花园。',
    // markdown: {
    //     lineNumbers: true ,// 代码块显示行号
    // },
    themeConfig: {
        logo: '/favorite.png',
        sidebar: [
            '/install/',
            '/get-started/',
            {
                title:'组件',
                children:['/components/button',
                          '/components/input.md',
                          '/components/toast.md',
                          '/components/tabs',
                          '/components/layout',
                          '/components/grid',
                          '/components/response',
                          '/components/font'


                ]
            }

        ]
    }


}