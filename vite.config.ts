import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  //加载环境变量，打包路由路径
  const env = loadEnv(mode, process.cwd(), '')
  return {
    base: env.VITE_BASEURL,
    plugins: [vue()],
    //添加快捷路径@
    // https://vitejs.dev/config/#resolve-alias
    resolve: {
      alias: {
        '@': join(__dirname, "src"),
      }
    },

    //  vite2打包出现警告，"@charset" must be the first, https://www.zhihu.com/question/498190531/answer/2219095376
    css: {
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove();
                }
              }
            }
          }
        ],
      },
    },
    //代理
    server: {
      https: true,
      proxy: {
        '/api': {
          // target: 'https://localhost:3003/api/',
          target: `https://localhost:${env.VITE_PORT}/api/`,
          changeOrigin: true,
          secure: false,//不检测https的合法性
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },
    build: {
      minify: 'terser', 
      terserOptions: {
        compress: {
          //生产环境时移除console
          drop_console: true,
          drop_debugger: true,
        },
      },
    }
  }
})


