import { render } from '@react-email/render';
import JobRecommend from '../src/emails/pages/job-recommend';
import React from 'react';
import { mockData } from '../src/emails/pages/job-recommend/mock';

(async () => {
	const html = await render(<JobRecommend data={mockData} />, {
		pretty: true,
	});

	console.log(html);
})();