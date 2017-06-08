export default (state = null, action) => {
	switch (action.type) {
		case 'select_library':
			return action.payload;
		case 'select_job':
			return action.payload;
		default:
			return state;
	}
}