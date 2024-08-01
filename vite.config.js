import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// 配置自动导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            imports: [
                'vue',
            ],
            // 配置需要将哪些后缀类型的文件进行自动按需引入，默认为vue
            extensions: ['vue'],
            // 生成auto-import.d.ts声明文件
            dts: 'src/types/auto-import.d.ts',
        }),
        Components({
            // 解析组件
            resolvers: [ElementPlusResolver()],
            // dirs 指定组件所在位置，默认为 src/components
            dirs: ['src/components/'],
            // 配置需要将哪些后缀类型的文件进行自动按需引入，默认为vue
            extensions: ['vue'],
            // 生成components.d.ts
            dts: 'src/types/components.d.ts',
            // 遍历子目录
            deep: true
        })
    ],
})
