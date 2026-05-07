import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const githubPagesBase = process.env.GITHUB_PAGES === 'true' ? '/depth-survey-lite/' : '/';

export default defineConfig({
  plugins: [react()],
  base: githubPagesBase,
});
