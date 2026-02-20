# Vertex Horizon Inc. Company Homepage

基于 React + Vite 构建的公司官网单页，风格定位为炫酷、大气、高级，核心主题是 AI 驱动的人机交互创新。

## 本地开发

```bash
npm install
npm run dev
```

默认地址：`http://localhost:5173`

## 构建生产版本

```bash
npm run build
npm run preview
```

## 部署到 GitHub Pages

项目已内置 GitHub Actions 工作流：`/.github/workflows/deploy.yml`。

1. 将代码推送到 GitHub 仓库 `main` 分支。
2. 打开仓库设置：`Settings -> Pages`。
3. 在 `Build and deployment` 中选择 `Source: GitHub Actions`。
4. 之后每次 push 到 `main` 都会自动发布。

发布地址格式通常为：

`https://<你的GitHub用户名>.github.io/<仓库名>/`

## 说明

- Vite 的 `base` 会在生产构建时自动按仓库名生成（优先读取 GitHub Actions 的 `GITHUB_REPOSITORY`）。
- 如需本地离线发布到自定义路径，可在 `vite.config.js` 里手动调整 `base`。
