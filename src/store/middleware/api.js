export const apiMiddleware = ({dispatch, getState}) => next => action => {
	return next(action)
}