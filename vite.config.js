import { splitVendorChunkPlugin, defineConfig } from 'vite'
import { dependencies } from './package.json'

import path from 'path'

function renderChunks(deps) {
  let chunks = {}
  Object.keys(deps).forEach(key => {
    if ([].includes(key)) return
    chunks[key] = [key]
  })
  return chunks
}

export default defineConfig({
  plugins: [splitVendorChunkPlugin()],
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [],
          ...renderChunks(dependencies)
        }
      }
    }
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src/app')
    }
  }
})
