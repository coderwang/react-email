import { render } from '@react-email/render';
import React from 'react';
import path from 'path';
import fs from 'fs';

// 获取命令行参数
const entryArg = process.argv.find((arg) => arg.startsWith('--entry='));
if (!entryArg) {
	console.error(
		'\x1b[41m FAIL \x1b[0m \x1b[31m请指定 --entry 参数，例如: --entry=job-recommend\x1b[0m\n',
	);
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
			console.info('\x1b[43m INFO \x1b[0m \x1b[33m未检测到mock文件，表明这是一个静态模板\x1b[0m\n');
		}

		let isSingleLang = true;

		try {
			await import(`${templatePath}/i18n`);
			isSingleLang = false;
		} catch (error) {
			console.info(
				'\x1b[43m INFO \x1b[0m \x1b[33m未检测到i18n文件，表明这是一个单语言模板\x1b[0m\n',
			);
		}

		let html = '';
		let enHtml = '';
		let zhHtml = '';

		// render
		if (isSingleLang) {
			html = await render(<Template {...templateProps} />, {
				pretty: true,
			});
		} else {
			enHtml = await render(<Template {...templateProps} lang="en" />, {
				pretty: true,
			});
			zhHtml = await render(<Template {...templateProps} lang="zh" />, {
				pretty: true,
			});
		}

		// 创建输出目录
		const outputDir = path.join(__dirname, '../output', entryName);
		await fs.promises.mkdir(outputDir, { recursive: true });

		// 导出文件
		if (isSingleLang) {
			await fs.promises.writeFile(path.join(outputDir, 'index.html'), html, 'utf-8');
		} else {
			await fs.promises.writeFile(path.join(outputDir, 'en.html'), enHtml, 'utf-8');
			await fs.promises.writeFile(path.join(outputDir, 'zh.html'), zhHtml, 'utf-8');
		}

		console.log(`\x1b[42m SUCCESS \x1b[0m \x1b[32m文件已保存到: ${outputDir} 目录下\x1b[0m\n`);
	} catch (error) {
		console.error(`\x1b[41m FAIL \x1b[0m \x1b[31m导出失败: ${error.message}\x1b[0m\n`);
		process.exit(1);
	}
})();
