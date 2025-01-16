import React from 'react';
import { Html, Head, Body, Row, Column, Preview } from '@react-email/components';
import { DataProps, mockData } from './mock';

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

const Template = ({ data }: { data: DataProps }) => {
	return (
		<Html>
			<Head />
			<Preview>Here is a preview text, you can see it in the email preview</Preview>
			<Body style={{ backgroundColor: '#f5f5f5' }}>
				<div style={{ backgroundColor: '#f5f5f5', width: '100%' }}>
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
};

export default Template;
