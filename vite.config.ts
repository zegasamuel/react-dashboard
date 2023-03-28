import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        chunkSizeWarningLimit: 1600,
    },
    plugins: [react()],
    server: {
        port: 3001,
    },
    preview:{
      port:3001
    }
})
