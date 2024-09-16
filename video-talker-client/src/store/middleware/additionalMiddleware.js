const additionalMiddleware = store => next => action => {
    if (action.type === 'DASHBOARD_SET_USERNAME') {
        console.log('Special action detected:', action);
    }
    if(action.type === 'DASHBOARD_SET_ACTIVE_USERS') {
        console.log('Special action detected:', action);
    }
    return next(action);
    
};

export default additionalMiddleware;
