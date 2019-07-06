module.exports = {
    title: 'Monet\'s Garden UI',
    description: '每个人心中都有一个花园。',
    markdown: {
        lineNumbers: true ,// 代码块显示行号
    },
    themeConfig: {
        sidebar: [
            '/install/',
            '/get-started/',
            {
                title:'组件',
                children:['/components/button',
                          '/components/input',
                          '/components/toast']
            }

        ]
    }
}