import { Column, Row } from '@react-email/components';

// 空白占位符，用这种结构可以让邮件在 Gmail 中不触发自动放大页面
// 仅安卓客户端有效，ios客户端还需使用其他方式
export const Placeholder = ({ height }: { height: number }) => {
	return (
		<Row>
			<Column align="left">
				<div style={{ width: '260px', height }}></div>
			</Column>
			<Column align="right">
				<div style={{ width: '260px', height }}></div>
			</Column>
		</Row>
	);
};
