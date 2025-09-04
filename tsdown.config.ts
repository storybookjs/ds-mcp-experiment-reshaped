import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/bin.ts'],
  loader: {
    '.md': 'text'
  }
})
