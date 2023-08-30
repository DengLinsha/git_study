// 富文本编辑器
// 创建编辑器函数，创建工具栏函数
const { createEditor, createToolbar } = window.wangEditor

// 编辑器配置对象
const editorConfig = {
    // 占位提示文字
    placeholder: '发布文章内容...',
    // 编辑器变化时的回调函数
    onChange(editor) {
      // 获取富文本内容
      const html = editor.getHtml()
    //   console.log('editor content', html)
      // 也可以同步到 <textarea>
      // 为后续快速收集整个表单内容做铺垫
      document.querySelector('.publish-content').value = html
    }
}

const editor = createEditor({
    // 将编辑器创建在id=editor-container标签里
    selector: '#editor-container',
    // 编辑器默认内容
    html: '<p><br></p>',
    // 配置项
    config: editorConfig,
    // 集成了wangEditor所有功能
    mode: 'default', // or 'simple'
})

// 工具栏配置对象
const toolbarConfig = {}

// 创建工具栏
const toolbar = createToolbar({
    // 为指定的编辑器创建工具栏
    editor,
    selector: '#toolbar-container',
    // 工具栏配置对象
    config: toolbarConfig,
    mode: 'default', // or 'simple'
})