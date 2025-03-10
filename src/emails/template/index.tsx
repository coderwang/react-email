import React from 'react';
import { Html, Head, Body, Row, Column, Preview } from '@react-email/components';

const bodyStyle: React.CSSProperties = {
	fontFamily: `system-ui,-apple-system,BlinkMacSystemFont,'PingFang HK',Arial,'Microsoft Yahei',Roboto,'Segoe UI','Helvetica Neue','Noto Sans TC',sans-serif`,
	backgroundColor: '#f5f5f5',
	wordBreak: 'break-all',
};

const title: React.CSSProperties = {
	fontSize: '24px',
	fontWeight: 'bold',
	color: '#333',
	textAlign: 'center',
};

const content: React.CSSProperties = {
	height: '300px',
	fontSize: '16px',
	color: '#666',
	textAlign: 'center',
};

const Template = () => {
	return (
		<Html lang="en">
			<Head>
				<style>
					{`
            th, td {
              font-family: system-ui,-apple-system,BlinkMacSystemFont,PingFang HK,Arial,Microsoft Yahei,Roboto,Segoe UI,Helvetica Neue,Noto Sans TC,sans-serif !important;
            }
          `}
				</style>
			</Head>
			<Preview>Here is a preview text, you can see it in the email preview</Preview>
			<Body style={bodyStyle}>
				<div style={bodyStyle}>
					<Row style={{ width: '600px', margin: '0 auto', backgroundColor: '#fff' }}>
						<Column>
							<div style={title}>This is a template</div>
							<div style={content}>You can write your email content here</div>
						</Column>
					</Row>
				</div>
			</Body>
		</Html>
	);
};

Template.PreviewProps = {};

export default Template;
