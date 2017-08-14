import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';

const firstAction = AppNavigator.router.getActionForPathAndParams('Welcome');
const initialNavState = AppNavigator.router.getStateForAction(firstAction);

function nav(state = initialNavState, action){
    let nextState;

    switch(action.type){
        case 'Back':
            nextState = AppNavigator.router.getStateForAction(NavigationActions.back() , state);
            break;
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }

    return nextState || state;
}

const AppReducer = combineReducers({
    nav
});

export default AppReducer;