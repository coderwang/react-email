import { Img } from '@react-email/components';
import React, { FC } from 'react';

interface ImgWithTextProps {
	wrapperStyle?: React.CSSProperties;
	imgStyle?: React.CSSProperties;
	textStyle?: React.CSSProperties;
	imgSrc?: string;
	imgAlt?: string;
	text?: string;
}

/** 图片和文字垂直居中组件 */
const ImgWithText: FC<ImgWithTextProps> = (props) => {
	const { imgSrc, imgAlt, wrapperStyle, imgStyle, textStyle, text } = props;

	return (
		<div style={wrapperStyle}>
			<Img
				style={{
					display: 'inline-block',
					marginRight: '10px',
					verticalAlign: 'middle',
					borderRadius: '8px',
					...imgStyle,
				}}
				src={
					imgSrc || 'https://img.offertoday.com/static/file/2024/de2kzz41jv1715073903979.png.webp'
				}
				alt={imgAlt || 'logo'}
				width="32"
				height="32"
			/>
			<span
				style={{
					color: '#222222',
					fontFamily: 'D-DIN',
					fontSize: '21px',
					fontStyle: 'normal',
					fontWeight: 700,
					verticalAlign: 'middle',
					...textStyle,
				}}
			>
				{text || 'OfferToday'}
			</span>
		</div>
	);
};

export default ImgWithText;
