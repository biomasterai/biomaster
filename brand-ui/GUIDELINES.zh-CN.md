# BioMaster 视觉与产品 UI 规范
版本 1.0.0 · 2026-09-11 · 适用产品 BioMaster 2.0

这是一套基于已定稿 Loop B 的视觉系统，供产品开发、官网、介绍页与宣传材料使用。中文规范面向设计与开发团队；产品界面和传播示例使用英文。交互手册入口为同目录 index.html。

本包是独立设计交付，尚未替换应用主题或发布到官网。所有工作台内容均为视觉示例，不调用模型，不运行科学分析。

## 1. 核心定位

**安静、精确、有温度的研究工作台。** 让问题、执行过程与结果可读，给持续的观察与修正留出空间。

| 层面 | 统一原则 | 具体做法 |
| --- | --- | --- |
| 品牌 | Loop B 是主要识别物 | 保留定稿形态，避免新增装饰符号 |
| 产品 | 工作内容占据最大的视觉面积 | 导航、主工作区、按需打开的上下文面板 |
| 宣传 | 品牌大于单次功能标题 | 大字 BioMaster、一个承诺、一个视觉主角 |
| 颜色 | 中性色为主，黄绿有节制 | 品牌色用于选择与关键操作，语义色用于状态 |
| 信息 | 执行、文件、复核有各自含义 | 不把“命令成功”写作“科学结论已验证” |
| 动效 | 解释变化 | 快速切换、展开、状态变化；不持续旋转品牌标记 |

不采用大面积科技蓝、紫色霓虹、玻璃卡片、装饰性数据大屏、无意义的渐变和发光。数据图表可以使用必要的类别色，但不能反过来改变整个品牌色调。

## 2. Logo 与名称

### 2.1 当前资产

| 文件 | 用途 | 原始规格 |
| --- | --- | --- |
| assets/loop-b-light.png | 浅色背景、宣传与文档 | 1254 × 1254，暖白底 PNG |
| assets/loop-b-app.png | 应用图标、深色背景与紧凑导航 | 1254 × 1254，黄绿色底 PNG |

两张文件均从 2026-09-07 定稿包原样复制。轮廓为粗线 B、上下两个回路、切角外沿、中部短小的 S 形负形回接。用户 2026-09-11 补充的参考图再次指向这一形态。

文件没有透明通道，也没有正式矢量版。不要用 CSS invert、mix-blend-mode、色彩滤镜或自动抠图改变标记。深色主题保留黄绿图标底板。模板 SVG 内嵌的是原 PNG；SVG 模板并不意味着 logo 已矢量化。

### 2.2 净空、尺寸与字标

- 令 U 为包含内置留白的完整原图边长。品牌独立展示时，外部净空建议不小于 0.25U。
- UI 紧凑导航使用组件自身的 8–12 px 图文间距，不叠加宣传用净空。图标建议槽位 32–40 px，应用主入口 48–64 px。
- 宣传标记建议不小于 96 px。16–24 px favicon 必须检查 S 形切口和双窗口是否可辨，不自动认为大图缩小后已经合格。
- 保持正方形原图比例，保留原图留白；不得横向压缩、倾斜、裁紧或把字放入图形。
- 目标平台可以给应用图标施加圆角遮罩，不能改变内部符号轮廓。
- 名称只写 **BioMaster**，不写 Biomaster、BIOMaster 或 bioMaster。正文用正常字距；独立字标用 Inter 600、约 −0.045em。
- 标记与字标垂直居中。版本作为独立辅助标签：BioMaster 2.0。视觉系统版本 1.0.0 与软件版本 2.0 是两件事。

后续正式矢量制作应描摹定稿轮廓并重新进行小尺寸验收。印刷时 1254 px 原图按 300 ppi 对应约 106 mm；超过这一尺寸需要评估输出质量。

## 3. 颜色系统

### 3.1 固定品牌色

| 名称 | HEX | 用途 |
| --- | --- | --- |
| Paper | #F7F7F2 | 品牌与阅读底色 |
| Ink | #181A18 | 主文字、深色背景、浅色主按钮 |
| Loop | #DCDE8D | 应用图标、当前选择、深色主操作 |

参考视觉面积为中性面约 90%、品牌色约 10%。这一比例适用于产品与大多数宣传页；完整黄绿封面可作为少量品牌强调页。它不是图表类别数量的限制。

现有 PNG 像素含细微色差；UI 使用上述标准 HEX，不能从任意一个图片像素反复取色建立新主题。

### 3.2 语义层

所有业务组件读取 --bm- 前缀语义变量；完整双主题数值见 TOKEN-REFERENCE.md。

| 变量 | 含义 | 使用边界 |
| --- | --- | --- |
| --bm-canvas | 整体底色 | 应用外壳、页面 |
| --bm-surface | 工作面 | 文档、表格、输入背景 |
| --bm-subtle | 次级面 | 工具输出、表头、悬停 |
| --bm-raised | 浮起层 | 弹窗、菜单 |
| --bm-text / secondary / muted | 正文 / 次级 / 辅助 | 正常信息最低 12 px；不要用 opacity 随意弱化 |
| --bm-line | 装饰分隔线 | 不是可操作组件的唯一边界 |
| --bm-control | 控件边界 | 输入框、选择器、可点工作卡 |
| --bm-accent / on-accent | 品牌强调底 / 前景 | 黄绿背景上只使用深字 |
| --bm-selected / accent-ink | 当前选择底 / 前景 | 导航、当前工作项；搭配文字、边线 |
| --bm-focus | 焦点轮廓 | 2 px outline、3 px offset |
| --bm-primary / on-primary | 主操作底 / 字色 | 浅色主题炭黑底，深色主题黄绿底 |
| --bm-success / success-bg | 成功语义 | 只表达有依据的成功 |
| --bm-warning / warning-bg | 注意语义 | 暂停、过时、待处理 |
| --bm-danger / danger-bg | 危险或失败 | 失败、缺失、破坏性操作 |
| --bm-info / info-bg | 信息 | 上下文高亮、复核中 |

黄绿浅底不作为白底上的小号正文颜色。链接用 accent-ink，悬停或正文链接搭配下划线。绿色状态不取代文本；代码 diff 同时保留 + / −，不能只用红绿区分。

### 3.3 深色模式

深色从 #181A18 开始，而非纯黑；工作面为 #20231F，主文字为 #F1F2EA。提升面通过明度区分，不靠大量投影。深色使用同名语义变量，不能简单反转浅色值。品牌图标仍为原黄绿底 PNG。

## 4. 字体与排版

- 英文 UI、品牌与营销：Inter；包内提供原有字体与官方 SIL OFL 许可。宣传模板在本机安装 Inter 后可保持排版一致。
- 中文：系统字体，macOS 使用苹方，Windows 使用微软雅黑；系统没有这些字体时正常回退到 sans-serif。
- 代码、文件名、运行编号：系统等宽，macOS SF Mono、Windows Consolas，Linux Liberation Mono。
- 所有数字统计使用 tabular-nums；不要把正文整体设为等宽。

| 层级 | 字号 | 字重 | 行高 | 字距 |
| --- | --- | --- | --- | --- |
| 品牌 Display | 80–116 px，移动端 56–80 | 600 | 1.0 | −0.06em |
| 营销 Section | 40–44 px，移动端 28–32 | 550/600 | 1.2–1.3 | −0.04em |
| 产品 Title | 24–28 px | 600 | 1.3 | −0.025em |
| 产品 Subtitle | 18–20 px | 500/600 | 1.4 | −0.015em |
| 长文 Reading | 16 px | 400 | 1.75–1.9 | 0 |
| 产品 Body | 14 px | 400 | 1.6 | 0 |
| 紧凑表格 | 13 px | 400/500 | 1.5 | 0 |
| 辅助 Caption | 12 px | 400/500 | 1.5 | 0 |
| 代码 | 12–13 px | 400 | 1.8 | 0 |

中文正文和表格不使用负字距。手册中的章节编号、坐标与装饰性页签可使用更小尺寸，但不能用它们承载唯一操作信息。宣传正文每行约 35–70 个英文字符或 20–35 个汉字。

## 5. 布局、间距与形状

- 基础网格：4 px；常用间距 4、8、12、16、24、32、48、64、96。
- UI：组件内 8–16；组间 24；工作区内边距 24–32。默认 row height 44–48，紧凑行 32–36，紧凑模式主要减少留白。
- 营销：段落间 64–96；最大内容宽 1280；桌面页面边距 48–56，移动端 20。
- 圆角：4 用于按钮/输入，8 用于组合编辑器与可操作工作卡，12 用于大型外壳与模态窗口。
- 边框：1 px。分隔线使用 line，可操作边界使用 control。
- 阴影：仅菜单、弹窗等浮层使用。默认工作区与宣传内容不要整片加阴影。
- 推荐浮层阴影：浅色 0 12px 36px #181A181A；深色 0 12px 36px #00000040。阴影不作为唯一层级线索。

### 5.1 应用框架

桌面：左侧导航建议 224 px，中间主工作区弹性伸展、建议至少 560 px，右侧上下文 256–288 px。顶部路径栏 56 px。实际余量不足时优先收起上下文，不无限挤压正文。

- ≥ 1200 px：三栏。
- 960–1199 px：导航 + 主工作区，上下文以抽屉打开。
- < 960 px：主内容优先，导航与上下文可按需打开。
- < 700 px：单列、44 px 触控区；表格横向滚动限定在表格容器内。
- 长文件名可换行或截断并提供完整值；主操作名称不能省略到不可辨。
- 样机在窄屏收起侧栏用于观察主内容排版；完整产品仍需实现对应的打开入口、抽屉焦点管理与返回行为。

### 5.2 三种项目类型

**Chat**：目标/消息 → 可展开的工具记录 → 当前工作状态 → 输入与执行控制；右侧按需呈现计划和产物。工具摘要优先告诉用户做了什么、结果与耗时，详细命令展开查看。

**Notebook**：Markdown、Python、Bash、Prompt 使用共享网格；靠单元标签与内容区分。输入与输出属于同一单元，不把每一行代码拆成独立卡片。Prompt 上下文高亮显示本次实际使用的上游单元，不能高亮未来内容。

**Team**：目标在上，Issue 工作在中，选中项显示工作记录、负责人和复核状态。卡片可点击、可选择，所以可以使用边框与圆角；不要把每条日志都做成卡片。

这三种类型是独立项目工作方式。对比样机的 Tab 不表示真实产品能在创建后任意转换项目类型。

## 6. 组件行为

| 组件 | 基础规格 | 必须覆盖的状态 |
| --- | --- | --- |
| Button | 40 高，水平 16，4 圆角；大 48、小 32 | default、hover、focus、pressed、disabled、loading |
| Input | 40–44 高，12 内边距，4 圆角，外置 label | empty、filled、focus、invalid、disabled |
| Tabs | 44 高，底线 2，选中有文字对比 | selected、unselected、focus；左右键/Home/End |
| Tool row | 摘要 + 状态 + 耗时，展开详细输出 | collapsed、expanded、running、failed、interrupted |
| Table | 表头 12、正文 13、行分隔 | empty、loading、selection、missing value |
| Issue | 8 圆角、16–20 内边距 | selected、unselected、focus；负责人和状态可读 |
| Alert | 状态底色、3 px 左线、16 内边距 | warning、error、info；具体对象和后续动作 |
| Dialog/Drawer | 12 圆角、24 内边距、视口内滚动 | autofocus、Esc/关闭、焦点返回、背景不可操作 |

本包可交互展示按钮说明、表单错误、Tabs、工具展开、运行暂停/继续、Prompt 上下文和 Issue 选择。Dialog/Drawer、真正异步 loading 和应用导航是实现规格，未提供完整生产组件。

单一区域一个主操作；次操作描边，取消用 ghost。点击危险操作前按产品已有权限流程说明目标与影响；不要把 Pause 设计成红色破坏性操作。重复提交与真实加载中防止重复触发，保留具体执行状态。

## 7. 执行、文件与复核

| 维度 | 值 | 可表达的含义 |
| --- | --- | --- |
| Execution | Queued / Running / Paused / Completed / Failed | 当前执行过程状态 |
| Artifact | Current / Outdated / Missing | 文件与记录版本之间的关系 |
| Review | Not reviewed / In review / Passed / Changes requested | 对具体对象与版本的复核状态 |

完成的命令可以生成过时或不合格的文件；最新文件也可能尚未复核。三者不能共享同一个“全局完成”绿勾。所有状态都使用文字并至少附加形状或图标，不只改变颜色。

错误提示写明“哪个操作失败、能保留什么、下一步如何处理”。避免笼统的 Something went wrong。空态写清楚内容用途与入口；数据尚未加载不能表现成“没有数据”。

## 8. 图标、数据与动效

### 8.1 功能图标

采用一套 20 × 20 viewBox、1.5 px stroke 的线性图标；展示尺寸 16/20，常用按钮点击区域 40/44。端点和转角统一。图标旁有可见文字时，图标 aria-hidden；纯图标按钮必须提供准确 aria-label 与悬停说明。

本包样机的勾、圆、暂停等字符用于显示状态形状。生产界面应替换为项目现有统一图标组件，而不是混用系统 emoji。Logo 不作为 spinner，也不重复出现在每条工具日志里。

### 8.2 数据可视化

- 图表背景使用 surface；网格使用 line；坐标和图例至少 12 px。
- 四组基础类别色见 plot-1…4。固定类别在同一文档保持颜色一致。
- 折线除颜色外使用实线/虚线、圆点/方点；条形使用直接标签。
- 需要更多类别时优先分面或直接标签；不要用黄绿渐变假装多个类别。
- 图表声明单位、样本数和数据来源；样机必须标 Example data。
- 连续值可用单色明度序列；有自然中心点的差值使用双向序列，明确 0。
- missing 值不画成 0；图表轴范围与归一化必须清楚，不能靠裁轴夸大效果。
- 导出科研图以正式绘图工具为准，字体、单位和线型继承本规范。手册示意图不是可发表科研结果。

### 8.3 动效

120 ms 用于 hover/press；180 ms 用于 Tab、展开；320 ms 用于新区域进入。缓动 cubic-bezier(.22,1,.36,1)。位移通常 4–12 px。不要给常规按钮点击叠加弹簧回弹。

长任务不显示无依据的百分比。运行提示以真实状态为准，允许暂停或取消时应有明确入口。Reduced motion 下去除位移与持续脉冲，保留文字反馈。用户离开日志底部后，不强制自动滚回底部。

## 9. 官网与宣传模板

### 9.1 官网构图

品牌与一个承诺占据首屏；用原版 logo 做主要视觉。正文保持短句。后续顺序：研究证据 → Loop 原理 → 工作方式 → 贡献者 → 获取产品。

首屏不要堆四张功能卡片、无来源统计数字、合作方 logo 墙。UI 图应展示一个具体工作场景；示意图标记 illustration，正式产品截图保留真实状态。

主品牌文案：
- Research moves in loops.
- A workbench for computational research.
- Think. Execute. Observe. Refine.
- AI Coding for Computational Experiments.

产品内使用任务语言，如 Inspect the dataset、View context、Continue run。营销口号不进入操作栏。

### 9.2 本包可编辑素材

| 文件 | 尺寸 | 场景 |
| --- | --- | --- |
| templates/social-1200x630.svg | 1200 × 630 | 社交分享、产品介绍横封面 |
| templates/slide-1600x900.svg | 1600 × 900 | 16:9 演示文稿封面 |
| templates/square-1080x1080.svg | 1080 × 1080 | 方形海报与社交配图 |

使用统一标题与字标，边距约 64–80 px。每页一个主要观点。下载模板中没有虚构发布日期、公开下载地址或产品性能指标。通过编辑 SVG 文字可以替换文案；PNG logo 为原样内嵌，不受文本编辑影响。

印刷前使用实际印刷 ICC 配置打样，不把 RGB 色值机械换成未经验证的 CMYK 标准。

### 9.3 Patterns 与版本边界

已确认的论文属于 BioMaster 1.0。官网可展示官方封面、日期、期刊与论文链接，并明确与 BioMaster 2.0 区分。正确表述：BioMaster 1.0 was featured on the cover of Patterns.

不能写成 Patterns endorses BioMaster 2.0，不能沿用 1.0 论文效果作为未经测试的 2.0 性能证据。官方封面使用现有 website/SOURCES.md 中的来源，不能用投稿草图替代。

未来 GitHub 分发编译产品与插件，不把它呈现为应用源代码仓库；实际下载尚不可用时显示准备状态。

贡献者继续按软件版本列出职责，同时独立标记当前或前成员；Yanlin Zhang 使用 Assistant Professor。Houcheng Su 在 2.0 的职责文案为 Some agentic flows in Chat mode。

## 10. 开发接入

### 10.1 文件与单一来源

- build.py：颜色与基础尺寸的唯一编辑入口，同时生成三个 SVG 宣传模板。
- tokens.json：分组 token 数据，不声明兼容 DTCG/Figma 导入格式。
- tokens.css：生成的 CSS 自定义属性与字体注册。
- tokens-data.js：供离线交互手册使用的数据；避免 file:// 下 fetch 限制。
- components.css：可独立复制的无框架组件样式。
- handbook.css / handbook.js / index.html：规范手册及行为示例。
- contrast-report.json：由实际 token 计算的 62 组配色检查。

修改 build.py 后在本目录运行 python3 build.py。不要分别编辑三个生成文件造成漂移。手册布局和示例不要求加入现有应用依赖。

### 10.2 最小使用

引入 tokens.css 后再引入 components.css，把 class="bm-scope" 放在容器或 body。使用 data-theme="light" 或 data-theme="dark" 选择主题；用户偏好选择应由应用已有设置层管理。本包不持久化示例偏好。

业务组件例如：
.button-primary { background: var(--bm-primary); color: var(--bm-on-primary); }
.editor { background: var(--bm-surface); border-color: var(--bm-control); }
.caption { color: var(--bm-muted); font-size: var(--bm-font-caption); }

只有展示色样、宣传原稿或配置 token 时才直接写 HEX。

### 10.3 与当前仓库主题层的映射建议

已读取 packages/ui/src/styles/theme.css、packages/ui/src/v2/styles/theme.css 和 packages/ui/src/theme/types.ts。当前存在传统变量和 v2 语义变量两层，因此不能只改一个 accent 值就视为完整主题迁移。

| 当前变量示例 | BioMaster token |
| --- | --- |
| --background-base | --bm-canvas |
| --background-strong | --bm-surface |
| --text-strong | --bm-text |
| --text-base | --bm-secondary |
| --text-weak | --bm-muted |
| --v2-background-bg-base | --bm-surface |
| --v2-background-bg-deep | --bm-canvas |
| --v2-background-bg-layer-01 | --bm-subtle |
| --v2-text-text-base | --bm-text |
| --v2-text-text-muted | --bm-secondary |
| --v2-text-text-faint | --bm-muted |
| --v2-border-border-base | --bm-line |
| --v2-border-border-strong | --bm-control |
| --v2-border-border-focus | --bm-focus |
| --v2-state-fg-success / bg-success | --bm-success / success-bg |
| --v2-state-fg-warning / bg-warning | --bm-warning / warning-bg |
| --v2-state-fg-danger / bg-danger | --bm-danger / danger-bg |
| --v2-state-fg-info / bg-info | --bm-info / info-bg |

这些是基于当前源码命名的映射建议，不是已经验证可直接导入的桌面主题 JSON。颜色生成器、Portal 浮层的继承、运行时主题覆盖顺序、v2Overrides 及旧组件需要单独验证。优先从一个 Chat 页面纵向迁移，再扩展到 Notebook/Team。

### 10.4 交给开发 Agent 的简短指令

请使用 BioMaster Visual System 1.0.0：保持原 Loop B PNG，不重画；tokens.css 与 components.css 为参考；只在语义层选色。保留 Chat/Notebook/Team 三种独立项目模型。产品正文 14 px，辅助 12 px，4 px 网格，4/8/12 圆角。实现浅深色、键盘焦点、空/错/加载/禁用状态。区分执行状态、文件时效和复核结果。不要加入未经验证的性能声明或改变运行时行为。按本规范的映射建议接入现有主题层并进行真实页面验收。

## 11. 可读性与验收

普通文字对比度目标至少 4.5:1，大字至少 3:1；关键非文字边界和状态图形目标至少 3:1。62 组基础配色实际计算见 contrast-report.json。分隔线是装饰组织线，不属于本次 3:1 配对；控件使用 control。基础配色通过不代表完整界面已取得 WCAG 合规认证。

- 双主题下正文、辅助、状态与按钮可读。
- 320/390、768、1280/1440 宽度无整页横向溢出；表格允许局部滚动。
- Tab 键按视觉顺序移动，焦点可见；Tabs 支持方向键、Home、End。
- 图标按钮具有准确可访问名称，输入框有 label，错误关联字段。
- 触控主要操作目标 44 px；这是 BioMaster 的设计目标，较 W3C 2.5.8 的 24 px 最低尺寸（含例外）更保守。
- 不使用颜色作为唯一线索，图表补充类别文本与点形。
- 减少动态效果时保留操作与状态可读性。
- 长文件名、错误文本、空列表、部分结果、暂停与未复核场景均可正常阅读。
- 真实运行状态来自产品数据，不能依靠动画或模型自述推断完成。
- 宣传图片使用原版 logo，截图与示例有清楚标识；论文与软件版本对应。
- 复制与下载动作真实有效；本地打开不需要依赖 CDN。

## 12. 来源与资产

- 原始标记：output/brand/biomaster-loop-b-final-20260907；两个原图原样复制，校验记录见 QA.md。
- 产品语义：当前仓库 README.BIOMASTER.zh-CN.md。
- 现有官网：website/DESIGN.md、website/styles.css、website/SOURCES.md；新的规范在现有暖白/炭黑/黄绿方向上扩展。
- Inter：当前仓库 packages/ui/src/assets/fonts/Inter.ttf；官方许可随包，来源 https://raw.githubusercontent.com/rsms/inter/master/LICENSE.txt 。
- W3C 文字对比度：https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
- W3C 非文字对比度：https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html
- W3C 目标尺寸：https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html

原始 logo、期刊封面与字体各自保留已有权利归属。本包不把期刊封面授权与软件源码发布范围混为一谈。

