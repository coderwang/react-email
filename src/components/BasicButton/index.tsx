import { Button } from '@react-email/components';
import React, { FC } from 'react';

interface BasicButtonProps {
	wrapperStyle?: React.CSSProperties;
	href: string;
	target?: '_blank' | '_self';
	children: string;
	textStyle?: React.CSSProperties;
}

/** 一个基本的文字水平垂直居中的按钮组件 */
const BasicButton: FC<BasicButtonProps> = (props) => {
	const { href, target = '_blank', children, wrapperStyle, textStyle } = props;

	return (
		<div style={{ textAlign: 'center', ...wrapperStyle }}>
			<Button href={href} target={target}>
				<span
					style={{
						display: 'inline-block',
						width: '240px',
						height: '48px',
						color: '#FFFFFF',
						fontFamily: 'SF Pro',
						fontSize: '16px',
						fontStyle: 'normal',
						fontWeight: 500,
						lineHeight: '48px',
						background: '#06605A',
						borderRadius: '8px',
						textAlign: 'center',
						...textStyle,
					}}
				>
					{children}
				</span>
			</Button>
		</div>
	);
};

export default BasicButton;
