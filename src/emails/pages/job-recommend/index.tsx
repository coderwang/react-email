import { Html, Body, Img, Button, Row, Column } from '@react-email/components';
import React from 'react';
import Footer from '../../../components/Footer';
import ImgWithText from '../../../components/ImgWithText';
import BasicButton from '../../../components/BasicButton';

const userName: React.CSSProperties = {
	margin: '0 0 36px 0',
	color: '#171D26',
	fontFamily: 'SF Pro',
	fontSize: '16px',
	fontStyle: 'normal',
	fontWeight: 400,
	lineHeight: '24px',
};

const replyText: React.CSSProperties = {
	color: '#171D26',
	fontFamily: 'SF Pro',
	fontSize: '28px',
	fontStyle: 'normal',
	fontWeight: 600,
	lineHeight: '36px',
	textAlign: 'center' as const,
};

const replyContent: React.CSSProperties = {
	margin: '0 0 24px 0',
	color: '#207A74',
	fontFamily: 'SF Pro',
	fontSize: '18px',
	fontStyle: 'normal',
	fontWeight: 600,
	lineHeight: '24px',
	textAlign: 'center' as const,
};

const card: React.CSSProperties = {
	padding: '24px 20px',
	border: '1px solid #D8DDE3',
	borderRadius: '12px',
	backgroundColor: '#FBFBFC',
};

const companyName: React.CSSProperties = {
	color: '#171D26',
	fontFamily: 'SF Pro',
	fontSize: '18px',
	fontStyle: 'normal',
	fontWeight: 600,
	lineHeight: 'normal',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	display: '-webkit-box',
	lineClamp: 1,
	WebkitLineClamp: 1,
	WebkitBoxOrient: 'vertical' as const,
};

const contactName: React.CSSProperties = {
	display: 'inline-block',
	color: '#363F4D',
	fontFamily: 'SF Pro',
	fontSize: '16px',
	fontStyle: 'normal',
	fontWeight: 400,
	lineHeight: '19.5px',
};

const divider: React.CSSProperties = {
	display: 'inline-block',
	width: '1px',
	height: '12px',
	margin: '0 8px',
	backgroundColor: '#D8DDE3',
};

const contactTitle: React.CSSProperties = {
	display: 'inline-block',
	color: '#363F4D',
	fontFamily: 'SF Pro',
	fontSize: '16px',
	fontStyle: 'normal',
	fontWeight: 400,
	lineHeight: '19.5px',
};

const contactText: React.CSSProperties = {
	marginLeft: '20px',
	marginBottom: '24px',
	padding: '12px 16px',
	color: '#171D26',
	fontFamily: 'SF Pro',
	fontSize: '14px',
	fontStyle: 'normal',
	fontWeight: 400,
	lineHeight: '21px',
	background: '#C0EB5E',
	borderRadius: '0px 10px 10px 10px',
};

const unreadMsg: React.CSSProperties = {
	textAlign: 'center' as const,
};

const unreadCount: React.CSSProperties = {
	marginRight: '8px',
	color: '#4B5363',
	fontFamily: 'SF Pro',
	fontSize: '16px',
	fontStyle: 'normal',
	fontWeight: 510,
	lineHeight: '19.5px',
};

const unreadCheck: React.CSSProperties = {
	color: '#207A74',
	fontFamily: 'SF Pro',
	fontSize: '16px',
	fontStyle: 'normal',
	fontWeight: 510,
	lineHeight: '19.5px',
	textDecoration: 'underline',
};

const jobRecommend: React.CSSProperties = {
	display: 'inline-block',
	color: '#06605A',
	fontFamily: 'SF Pro',
	fontSize: '22px',
	fontStyle: 'normal',
	fontWeight: 600,
	lineHeight: '33px',
	verticalAlign: 'middle',
};

const jobRecommendDesc: React.CSSProperties = {
	marginBottom: '24px',
	color: '#8D97A6',
	fontFamily: 'SF Pro',
	fontSize: '16px',
	fontStyle: 'normal',
	fontWeight: 400,
	lineHeight: '24px',
	textAlign: 'center' as const,
};

const jobTitle: React.CSSProperties = {
	marginBottom: '8px',
	color: '#171D26',
	fontFamily: 'SF Pro',
	fontSize: '18px',
	fontStyle: 'normal',
	fontWeight: 590,
	lineHeight: 'normal',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	display: '-webkit-box',
	lineClamp: 2,
	WebkitLineClamp: 2,
	WebkitBoxOrient: 'vertical' as const,
};

const jobCompany: React.CSSProperties = {
	color: '#363F4D',
	fontFamily: 'SF Pro',
	fontSize: '16px',
	fontStyle: 'normal',
	fontWeight: 400,
	lineHeight: '19.5px',
};

const label: React.CSSProperties = {
	paddingRight: '16px',
	color: '#666',
	fontSize: '14px',
	fontStyle: 'normal',
	fontWeight: 500,
	lineHeight: '21px',
};

const commonDesc: React.CSSProperties = {
	color: '#363F4D',
	fontFamily: 'SF Pro',
	fontSize: '14px',
	fontStyle: 'normal',
	fontWeight: 400,
	lineHeight: '20px',
};

const applyButtonText: React.CSSProperties = {
	display: 'inline-block',
	width: '137px',
	height: '36px',
	color: '#171D26',
	fontFamily: 'PingFang SC',
	fontSize: '14px',
	fontStyle: 'normal',
	fontWeight: 500,
	lineHeight: '36px',
	background: '#C0EB5E',
	borderRadius: '24px',
	textAlign: 'center' as const,
};

const moreJobsBtn: React.CSSProperties = {
	height: '48px',
	padding: '0 20px',
	borderRadius: '24px',
	background: '#06605A',
};

const moreJobsText: React.CSSProperties = {
	color: '#FFFFFF',
	fontFamily: 'PingFang SC',
	fontSize: '16px',
	fontStyle: 'normal',
	fontWeight: 600,
	lineHeight: '48px',
	verticalAlign: 'middle',
};

const greeting: React.CSSProperties = {
	color: '#171D26',
	fontFamily: 'SF Pro',
	fontSize: '16px',
	fontStyle: 'normal',
	fontWeight: 400,
	lineHeight: '24px',
};

const JobRecommend = () => {
	return (
		<Html>
			<Body style={{ backgroundColor: '#f5f5f5' }}>
				<div style={{ backgroundColor: '#f5f5f5', width: '100%' }}>
					<div style={{ width: '600px', margin: '0 auto', backgroundColor: '#fff' }}>
						<div style={{ height: '8px', marginBottom: '20px', backgroundColor: '#06605A' }}></div>
						<div style={{ padding: '0 16px' }}>
							<ImgWithText wrapperStyle={{ marginBottom: '28px' }} />
							<div style={userName}>Dear, recevier name</div>
							<div style={replyText}>You got a new reply</div>
							<div style={replyContent}>
								"Product Manager Product Manager Product Manager Produc..."
							</div>
							<div style={{ ...card, marginBottom: '36px' }}>
								<Row style={{ marginBottom: '12px' }}>
									<Column style={{ verticalAlign: 'middle', width: '54px' }}>
										<Img
											style={{
												borderRadius: '50%',
											}}
											src="https://pic.offertodayhk.com/server/avatar/20240820/cc3b12d6f96645f18d8d1a4aa8b37d4a_s.jpeg.webp"
											alt="company logo"
											width="40"
											height="40"
										/>
									</Column>
									<Column>
										<div style={companyName}>
											OfferToday OfferToday OfferToday OfferToday OfferToday OfferToday OfferToday
											OfferToday OfferToday
										</div>
										<div>
											<div style={contactName}>OfferToday</div>
											<div style={divider} />
											<div style={contactTitle}>OfferToday</div>
										</div>
									</Column>
								</Row>
								<div style={contactText}>
									Hello, your profile aligns well with our position. Could you please provide your
									contact information and resume?
								</div>
								<BasicButton
									wrapperStyle={{
										marginBottom: '21px',
									}}
									href="https://baidu.com"
								>
									Reply
								</BasicButton>
								<div style={unreadMsg}>
									<span style={unreadCount}>Unread messages (999+)</span>
									<Button href="https://baidu.com" target="_blank">
										<span style={unreadCheck}>Check Now</span>
									</Button>
								</div>
							</div>
							<div style={{ fontSize: '0px', textAlign: 'center' }}>
								<Img
									style={{
										display: 'inline-block',
										marginRight: '8px',
										verticalAlign: 'middle',
									}}
									src="https://img.offertoday.com/static/file/2024/wxsrdx6ej61728899325301.png"
									alt="logo"
									width="26"
									height="26"
								/>
								<div style={jobRecommend}>Job Recommendations</div>
							</div>
							<div style={jobRecommendDesc}>Apply now and land your dream job!</div>
							<div style={card}>
								<Row
									style={{
										marginBottom: '12px',
									}}
								>
									<Column>
										<div
											style={{
												marginRight: '28px',
											}}
										>
											<div style={jobTitle}>
												Product Manager Lead1 Product Manager Lead2 Product Manager Lead3 Product
												Manager Lead4 Product Manager Lead5
											</div>
											<div style={jobCompany}>
												Tesla1 Tesla2 Tesla3 Tesla4 Tesla5 Tesla6 Tesla7 Tesla8 Tesla9 Tesla10
											</div>
										</div>
									</Column>
									<Column style={{ verticalAlign: 'top', width: '40px' }}>
										<Img
											style={{
												borderRadius: '6px',
											}}
											src="https://pic.offertodayhk.com/server/avatar/20240820/8c374c40ed34453f864d1d94c44ff3f0_s.jpg.webp"
											alt="company logo"
											width="40"
											height="40"
										/>
									</Column>
								</Row>
								<Row
									style={{
										marginBottom: '12px',
									}}
								>
									<Column
										style={{
											width: '21px',
											verticalAlign: 'top',
										}}
									>
										<div
											style={{
												width: '15px',
												height: '15px',
												padding: '2.5px 0',
											}}
										>
											<Img
												style={{ borderRadius: '50%' }}
												src="https://img.offertoday.com/static/file/2024/l9xbn9tykp1728725429370.png.webp"
												alt="salary"
												width="15"
												height="15"
											/>
										</div>
									</Column>
									<Column>
										<div style={commonDesc}>
											HK $20K-50K/Monthly·Salary negotiable or HK $300-800/Daily·Salary negotiable
										</div>
									</Column>
								</Row>

								<Row>
									<Column
										style={{
											width: '21px',
											verticalAlign: 'top',
										}}
									>
										<div
											style={{
												width: '15px',
												height: '4px',
												padding: '8px 0',
												textAlign: 'center',
											}}
										>
											<div
												style={{
													width: '4px',
													height: '4px',
													margin: '0 auto',
													backgroundColor: '#D8DDE3',
													borderRadius: '50%',
												}}
											/>
										</div>
									</Column>
									<Column>
										<div style={commonDesc}>
											Opportunities for creative development Opportunities for creative development
										</div>
									</Column>
								</Row>

								<Row>
									<Column
										style={{
											width: '21px',
											verticalAlign: 'top',
										}}
									>
										<div
											style={{
												width: '15px',
												height: '4px',
												padding: '8px 0',
												textAlign: 'center',
											}}
										>
											<div
												style={{
													width: '4px',
													height: '4px',
													margin: '0 auto',
													backgroundColor: '#D8DDE3',
													borderRadius: '50%',
												}}
											/>
										</div>
									</Column>
									<Column>
										<div style={commonDesc}>Creative development</div>
									</Column>
								</Row>

								<Button style={{ marginTop: '12px' }} href="https://baidu.com" target="_blank">
									<span style={applyButtonText}>Apply</span>
								</Button>
							</div>
							<div style={{ height: '12px' }} />
							<div style={card}>
								<Row
									style={{
										marginBottom: '12px',
									}}
								>
									<Column>
										<div
											style={{
												marginRight: '28px',
											}}
										>
											<div style={jobTitle}>Product Manager Lead</div>
											<div style={jobCompany}>Tesla</div>
										</div>
									</Column>
									<Column style={{ verticalAlign: 'top', width: '40px' }}>
										<Img
											style={{
												borderRadius: '6px',
											}}
											src="https://pic.offertodayhk.com/server/avatar/20240822/714cfb40e4f94d02b2a30f4cc3924c4c_s.jpg.webp"
											alt="company logo"
											width="40"
											height="40"
										/>
									</Column>
								</Row>

								<div style={{ fontSize: '0px' }}>
									<div
										style={{
											display: 'inline-block',
											width: '263px',
											padding: '4px 0',
											verticalAlign: 'middle',
										}}
									>
										<Row>
											<Column style={{ width: '24px' }}>
												<Img
													src="https://img.offertodayhk.com/static/file/2024/cpb8o8fz4g1734071214862.png"
													alt="logo"
													width={16}
													height={16}
												/>
											</Column>
											<Column style={label}>15 years of experience</Column>
										</Row>
									</div>
									<div
										style={{
											display: 'inline-block',
											width: '263px',
											padding: '4px 0',
											verticalAlign: 'middle',
										}}
									>
										<Row>
											<Column style={{ width: '24px' }}>
												<Img
													src="https://img.offertodayhk.com/static/file/2024/cpb8o8fz4g1734071214862.png"
													alt="logo"
													width={16}
													height={16}
												/>
											</Column>
											<Column style={label}>Master</Column>
										</Row>
									</div>
									<div
										style={{
											display: 'inline-block',
											width: '263px',
											padding: '4px 0',
											verticalAlign: 'middle',
										}}
									>
										<Row>
											<Column style={{ width: '24px' }}>
												<Img
													src="https://img.offertodayhk.com/static/file/2024/cpb8o8fz4g1734071214862.png"
													alt="logo"
													width={16}
													height={16}
												/>
											</Column>
											<Column style={label}>HK $20K-30K/Month</Column>
										</Row>
									</div>
									<div
										style={{
											display: 'inline-block',
											width: '263px',
											padding: '4px 0',
											verticalAlign: 'middle',
										}}
									>
										<Row>
											<Column style={{ width: '24px' }}>
												<Img
													src="https://img.offertodayhk.com/static/file/2024/cpb8o8fz4g1734071214862.png"
													alt="logo"
													width={16}
													height={16}
												/>
											</Column>
											<Column style={label}>Hong Kong Resident</Column>
										</Row>
									</div>
								</div>

								<Button style={{ marginTop: '12px' }} href="https://baidu.com" target="_blank">
									<span style={applyButtonText}>Apply</span>
								</Button>
							</div>
							<div style={{ textAlign: 'center', marginTop: '24px', marginBottom: '36px' }}>
								<Button href="https://baidu.com" target="_blank">
									<div style={moreJobsBtn}>
										<span style={moreJobsText}>View More Jobs</span>
										<Img
											style={{
												display: 'inline-block',
												marginLeft: '8px',
												verticalAlign: 'middle',
											}}
											src="https://img.offertoday.com/static/file/2024/ik1ig5frwf1723699419099.png"
											alt="arrow right"
											width="12"
											height="12"
										/>
									</div>
								</Button>
							</div>
							<div style={greeting}>Sincerely yours, </div>
							<div style={{ ...greeting, marginBottom: '40px' }}>OfferToday Team</div>
							<Footer />
						</div>
					</div>
				</div>
			</Body>
		</Html>
	);
};

export default JobRecommend;
