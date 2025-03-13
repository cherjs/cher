class ResponseError extends Error {

	constructor(
		response,
		message,
		...args
	) {
		super(
			(
				message
				?? (
					`HTTP ${
						response.status
						|| '<unknown-status>'
					} ${
						response.statusText
						|| ''
					}`
				)
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
