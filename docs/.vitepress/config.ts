import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "React Github Corner",
  description: "Show link github as icon",
  outDir: "docs",
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hunghg255/react-github-corners' }
    ]
  }
})
