import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unimport from 'unimport/unplugin'

export default defineConfig({
  plugins: [
    vue(),
    Unimport.vite({
      addons: {
        vueTemplate: true
      },
      imports: [{ name: 'push', from: 'notivue' }]
    })
  ],
  meteor: {
    clientEntry: 'imports/ui/main.js',
  },
  optimizeDeps: {
    exclude: ['vue-meteor-tracker'],
  },
})
