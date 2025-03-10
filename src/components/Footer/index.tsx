import { Img } from '@react-email/components';
import React from 'react';

const Footer = () => {
	return (
		<div
			style={{
				padding: '40px 0',
				background:
					'url(https://img.offertoday.com/static/file/2024/3fx5ywoa3j1723699957225.png) no-repeat center/100% 100%',
			}}
		>
			<div
				style={{
					width: '319px',
					margin: '0 auto 40px',
					color: '#FFFFFF',
					fontSize: '14px',
					fontStyle: 'normal',
					fontWeight: 510,
					lineHeight: '21px',
					letterSpacing: '0.14px',
					textAlign: 'center',
				}}
			>
				Gateway to a vast pool of professionals. Unlock the untapped potential of Mainland China and
				Hong Kong with OfferToday!
			</div>
			<div style={{ marginBottom: '40px', fontSize: '0px', textAlign: 'center' }}>
				<Img
					style={{ display: 'inline-block', verticalAlign: 'middle' }}
					src="https://img.offertoday.com/static/file/2024/al89a26mq61723703712120.png"
					alt="logo"
					width="35"
					height="35"
				/>
				<div
					style={{
						display: 'inline-block',
						width: '1px',
						height: '22px',
						margin: '0 15px',
						backgroundColor: '#FFFFFF',
						verticalAlign: 'middle',
					}}
				/>
				<Img
					style={{ display: 'inline-block', verticalAlign: 'middle' }}
					src="https://img.offertoday.com/static/file/2024/lwu9mdmyo91723700323220.png"
					alt="logo"
					width="35"
					height="35"
				/>
			</div>
			<div
				style={{
					color: '#FFFFFF',
					fontSize: '12px',
					fontStyle: 'normal',
					fontWeight: 400,
					lineHeight: '18px',
					textAlign: 'center',
				}}
			>
				<div style={{ display: 'inline-block' }}>Privacy</div>
				<div
					style={{
						display: 'inline-block',
						width: '1px',
						height: '10px',
						backgroundColor: '#FFFFFF',
						margin: '0 8px',
					}}
				/>
				<div style={{ display: 'inline-block' }}>Policy</div>
				<div
					style={{
						display: 'inline-block',
						width: '1px',
						height: '10px',
						backgroundColor: '#FFFFFF',
						margin: '0 8px',
					}}
				/>
				<div style={{ display: 'inline-block' }}>Terms and Conditions </div>
			</div>
		</div>
	);
};

export default Footer;
