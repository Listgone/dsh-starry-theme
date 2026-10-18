# dsh-starry-theme · 星空蓝主题

给 DeepSeek Harness 加一套「星空蓝」主题：深蓝夜空、星点、海浪，加一只虎鲸水印。装在「设置 → 主题」里，随时可切回默认。

界面预览可以直接看仓库里的 `preview.html`。

## 装

需要 DSH `0.2.x`（已在 `0.2.1-rc.2` 上验证）。

### 方式一：从 GitHub 装（推荐，不需要 npm 账号）

```powershell
dsh plugin --profile web add github:Listgone/dsh-starry-theme
```

桌面端把 `web` 换成 `desktop`。

### 方式二：下载 Release 里的压缩包

从 [Releases](https://github.com/Listgone/dsh-starry-theme/releases) 下载 `dsh-starry-theme-*.tgz`，解压到任意目录，然后在该目录执行：

```powershell
dsh plugin --profile web add ./dsh-starry-theme
```

装完重启一次 DSH，打开「设置 → 主题」即可看到「星空蓝」。

## 用

- **星空蓝**：整屏深蓝夜空 + 星点 + 底部海浪 + 一只虎鲸水印；面板、气泡、代码块、输入框一并换成夜空配色。
- **默认主题**：不加任何东西，保持原生外观。
- 选择记在本机，重启后保留；切回默认会立刻还原原生配色。

界面里会有一只小鲸鱼自己游；打开设置时会再出现一只在设置窗口里游。切回默认主题时两只一起消失。

## 主题都改了什么

只覆盖颜色类 token，间距、圆角、字体不动：

- 画布与面板底色（含 `bg-base / bg-layer-* / bg-l*`、侧边栏、气泡、输入框、菜单、选择器）；
- 文字与边框（高对比冷白、淡蓝描边）；
- 强调色（蓝 / 青 / 琥珀）；
- 代码块与行内代码底色；
- 官方深色中性色阶（750–950）整体换成夜空蓝，避免出现灰色块。

深色是主题的一部分：选中星空蓝会强制切到深色，避免浅色面板和夜空底打架。

## 鲸鱼从哪来

从 DSH 应用图标里抠出虎鲸轮廓（保留腹部与眼斑留白），重新染成星蓝，转成带透明通道的 WebP 内联在样式里，不依赖外部图片。

## 目录里各是什么

| 文件 | 给谁用 | 干什么 |
|---|---|---|
| `lib/client.js` | 浏览器端 | 星空背景、海浪、鲸鱼、全局配色、设置面板 |
| `lib/index.js` | 宿主端 | 只声明插件身份；主题逻辑全在客户端 |
| `cordis.patch.yml` | 装配 | 把插件挂进 profile |
| `preview.html` | 预览 | 独立页面，可切「默认 / 星空蓝」检查效果 |
| `package.json` | 清单 | 名称、版本、描述、客户端入口声明 |

## 卸载

```powershell
dsh plugin --profile web remove dsh-starry-theme
```

或直接在「设置 → 插件」里停用。

## 已知边界

- 只适配 `0.2.x` 的界面结构；DSH 大版本改动后可能需要跟进。
- 主题强制深色，浅色模式下不生效。
- 鲸鱼动效在系统开启「减少动态效果」时会停下。

## 许可

MIT

## 截图

![星空蓝主题](preview.html 的效果见下)

界面预览请直接在浏览器打开仓库里的 `preview.html`；或在装好插件后到「设置 → 主题」切换对比。
