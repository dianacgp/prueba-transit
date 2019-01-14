const asyncActionType = (type) => ({
	PENDING: `${type}_PENDING`,
	SUCCESS: `${type}_SUCCESS`,
	FAILURE: `${type}_FAILURE`,
})

export const API = 'API'
export const SET_ROUTES = 'SET_ROUTES'
export const SET_ROUTE = 'SET_ROUTE'