import {
    LOAD_OVERVIEW
} from './actionTypes';

const loadOverview = overviewInfo => ({
    type: LOAD_OVERVIEW,
    payload: overviewInfo
});

export {
    loadOverview
};