import { readFileSync } from 'node:fs'
import { env } from 'node:process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const packageJson = JSON.parse(
  readFileSync(new URL('./package.json', import.meta.url), 'utf-8'),
)

const repositoryName =
  env.GITHUB_REPOSITORY?.split('/')[1] ?? packageJson.name

export default defineConfig({
  plugins: [react()],
  base: env.NODE_ENV === 'production' ? `/${repositoryName}/` : '/',
})
