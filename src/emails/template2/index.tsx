import React from 'react';
import { Html, Head, Body, Row, Column, Preview } from '@react-email/components';
import { DataProps, mockData } from './mock';
import i18nData from './i18n';

const bodyStyle: React.CSSProperties = {
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

const Template = ({ data, lang }: { data: DataProps; lang: string }) => {
	const i18n = i18nData[lang];

	return (
		<Html lang={lang}>
			<Head />
			<Preview>{i18n.preview}</Preview>
			<Body style={bodyStyle}>
				<div style={bodyStyle}>
					<Row style={{ width: '600px', margin: '0 auto', backgroundColor: '#fff' }}>
						<Column>
							<div style={title}>{data.title}</div>
							<div style={content}>{data.content}</div>
						</Column>
					</Row>
				</div>
			</Body>
		</Html>
	);
};

Template.PreviewProps = {
	data: mockData,
	lang: 'en',
};

export default Template;
