import { Injectable } from '@angular/core';
import { compose } from '@ngrx/core/compose';
import { ActionReducer, combineReducers } from '@ngrx/store';

@Injectable()
export class StateService {

    public appReducers = {

    };

    public getRootReducer(): ActionReducer<any> {

            return compose(combineReducers)(this.appReducers);

    }

    public createReducer(initialState: any, handlers: any) {
        return function reducer(state = initialState, action: any) {
            if (handlers.hasOwnProperty(action.type)) {
                return handlers[action.type](state, action);
            } else {
                return state;
            }
        };
    }

}
