# Artemis - 音乐播放器

单文件网页音乐播放器（`index.html`），同时附带 Electron 桌面壳。

## 功能

- 网易云歌曲搜索、播放、歌词
- 歌单分享链接导入、保存（localStorage）
- 顺序 / 单曲 / 随机播放模式
- 自定义背景（预设色、选色器、图片上传）
- 主色 / 辅色主题自定义
- 无边框窗口（仅 Electron）

## 后端

所有数据走 `https://moe-music-player.onrender.com`（NeteaseCloudMusicApi 部署在 Render）。

## Web 部署（Render 静态站点）

1. 把本仓库推送到 GitHub
2. 打开 [dashboard.render.com](https://dashboard.render.com) → **New** → **Blueprint**
3. 选择本仓库，Render 自动读取 `render.yaml` 并创建静态站点
4. 部署完成后获得 `https://<服务名>.onrender.com` 访问地址

也可手动创建：**New** → **Static Site** → 选仓库 → Build Command 留空 → Publish Directory 填 `.`

> 注意：Render 免费实例 15 分钟无流量会休眠，首次访问冷启动约 60 秒。

## 本地运行

Web 版：直接用浏览器打开 `index.html`，或起本地服务器：

```
npx serve .
```

Electron 版：

```
npm install
npm start
```

## 打包桌面版

```
npm run build
```

产物在 `release/` 目录。
