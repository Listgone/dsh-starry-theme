/**
 * dsh-starry-theme — host half (client-only feature).
 *
 * 主题完全在客户端实现（CSS 变量覆盖 + localStorage 持久化），宿主侧只声明插件身份；
 * 「设置 → 主题」面板与样式注入由 ./client.js 承担。
 *
 * 装配：通过 profile 的 package.json（dependencies + bundles）或
 * `dsh plugin --profile <name> add dsh-starry-theme` 安装，重启与升级后依然生效。
 */

/** Stable Cordis plugin name. */
export const name = "dsh-starry-theme";

/**
 * Host apply. The theme feature is browser-side, so there is nothing to wire on
 * the host: no routes, no services.
 * @param ctx - Host context.
 */
export function apply(ctx) {
	// Intentionally empty: all behavior lives in the client bundle.
	// @ts-expect-error - ctx is retained for clarity / future host features.
	void ctx;
}
