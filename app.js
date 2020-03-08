exports.handler = async (event) => {
	switch (event.type) {
		case 'all':
			return {data: 'All users'}

		case 'self':
			return {data: 'My user'}

		default:
			return {message: 'Failed to get user data'}
	}
};

