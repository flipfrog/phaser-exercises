import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  if (command === 'build') {
    return {
      // build 固有の設定
      base: '/frontend/',
    }
  } else {
    // command === 'serve'
    return {
      // dev 固有の設定
    }
  }
})