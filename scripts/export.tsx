import { render } from '@react-email/render';
import React from 'react';
import path from 'path';
import fs from 'fs';

// 获取命令行参数
const entryArg = process.argv.find((arg) => arg.startsWith('--entry='));
if (!entryArg) {
	console.error('请指定 --entry 参数，例如: --entry=job-recommend');
	process.exit(1);
}

const entryName = entryArg.split('=')[1];

(async () => {
	try {
		// 动态导入对应的邮件模板
		const templatePath = `../src/emails/${entryName}`;
		const { default: Template } = await import(templatePath);
		const templateProps: {
			data?: Record<string, any>;
		} = {};
		try {
			const { mockData } = await import(`${templatePath}/mock`);
			templateProps.data = mockData;
		} catch (error) {
			console.info('🚀🚀🚀 ~ 未检测到mock文件，表明这是一个静态模板');
		}

		const html = await render(<Template {...templateProps} />, {
			pretty: true,
		});

		// 创建输出目录
		const outputDir = path.join(__dirname, '../output', entryName);
		await fs.promises.mkdir(outputDir, { recursive: true });

		// 保存 HTML 文件
		const outputPath = path.join(outputDir, 'index.html');
		await fs.promises.writeFile(outputPath, html, 'utf-8');

		console.log(`HTML 文件已保存到: ${outputPath}`);
	} catch (error) {
		console.error(`导出失败: ${error.message}`);
		process.exit(1);
	}
})();
