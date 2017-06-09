export * from './AuthActions'
export * from './JobFormActions'

export const selectLibrary = (libraryId) => {
	return {
		type: 'select_library',
		payload: libraryId
	};
};

export const selectJob = (jobId) => {
	return {
		type: 'select_job',
		payload: jobId
	}
};


