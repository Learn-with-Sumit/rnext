import { actions } from "../actions";

const initialState = {
    posts: [],
    loading: false,
    error: null,
};

const postReducer = (state, action) => {
    switch (action.type) {
        case actions.post.DATA_FETCHING: {
            return {
                ...state,
                loading: true,
            };
        }

        case actions.post.DATA_FETCHED: {
            return {
                ...state,
                posts: action.data,
                loading: false,
            };
        }

        case actions.post.DATA_FETCH_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        }

        case actions.post.DATA_EDITED: {
            return {
                ...state,
                loading: false,
                user: action.data,
            };
        }

        case actions.post.POST_COMMENTED: {
            return {
                ...state,
                loading: false,
                user: {
                    ...state.user,
                    avatar: action.data.avatar,
                },
            };
        }

        case actions.post.POST_LIKED: {
            return {
                ...state,
                loading: false,
                user: {
                    ...state.user,
                    avatar: action.data.avatar,
                },
            };
        }

        default: {
            return state;
        }
    }
};

export { initialState, postReducer };
