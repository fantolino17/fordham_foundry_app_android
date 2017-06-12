export * from './AuthActions'
export * from './JobFormActions'

export const selectInfo = (infoId) => {
	return {
		type: 'select_info',
		payload: infoId
	};
};

export const selectJob = (jobId) => {
	return {
		type: 'select_job',
		payload: jobId
	}
};


