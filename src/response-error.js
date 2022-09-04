class ResponseError extends Error {

	constructor(
		response,
		message,
		...args
	) {
		super(
			(
				message == null
				? (
					`HTTP ${
						response.status
						|| '<unknown-status>'
					} ${
						response.statusText
						|| ''
					}`
				)
				: message
			),
			...args,
		);

		if (Error.captureStackTrace) {
			Error.captureStackTrace(
				this,
				ResponseError,
			);
		}

		this.name = 'ResponseError';
		this.response = response;
	}

}

export default ResponseError;
