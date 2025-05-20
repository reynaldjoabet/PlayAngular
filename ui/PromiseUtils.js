
import _ from 'lodash';
import { Enum } from 'enumify';

class PromiseState extends Enum {
    isSuccess() {
        return this === PromiseState.SUCCESS;
    }
    isError() {
        return this === PromiseState.ERROR;
    }
    isEmpty() {
        return this === PromiseState.EMPTY;
    }
    isLoading() {
        return this === PromiseState.LOADING;
    }
    isInit() {
        return this === PromiseState.INIT;
    }
}

PromiseState.initEnum(['INIT', 'SUCCESS', 'LOADING', 'ERROR', 'EMPTY']);

function setPromiseState(state, object, promiseState, data = null, error = null) {
    return Object.assign({}, state, {
        [object]: { data: data, promiseState: promiseState, error: error }
    });
}

export function setLoadingState(state, object, data = null) {
    if (data) {
        return setPromiseState(state, object, PromiseState.LOADING, data);
    } else {
        return Object.assign({}, state, {
            [object]: Object.assign({}, state[object], {
                promiseState: PromiseState.LOADING
            })
        });
    }
}

export function setSuccessState(state, object, data) {
    return setPromiseState(state, object, PromiseState.SUCCESS, data);
}

export function setFailureState(state, object, error, data = null) {
    return setPromiseState(state, object, PromiseState.ERROR, data, error);
}

export function getInitialState(data = null) {
    return { data: data, promiseState: PromiseState.INIT, error: null };
}

export function setInitialState(state, object, data = {}, error = null) {
    return setPromiseState(state, object, PromiseState.INIT, data, error);
}

export function getPromiseState(dataObject) {
    if (
        isDefinedNotNull(dataObject.data) &&
        (isNonEmptyArray(dataObject.data) || !isNullOrEmpty(dataObject.data))
    ) {
        if (dataObject.promiseState === PromiseState.LOADING) return PromiseState.LOADING;
        return PromiseState.SUCCESS;
    } else if (isDefinedNotNull(dataObject.promiseState) && dataObject.promiseState.isSuccess()) {
        return PromiseState.EMPTY;
    } else {
        return dataObject.promiseState;
    }
}

export function setPromiseResponse(state, object, response) {
    const {
        payload,
        payload: { data, status, isAxiosError }
    } = response;
    const objectState = _.omit(response, ['payload', 'type']);
    if (status !== 200 || isAxiosError || (isDefinedNotNull(data) && isDefinedNotNull(data.error))) {
        _.merge(objectState, {
            data: null,
            error:
                isDefinedNotNull(payload.response) && payload.response.data && payload.response.data.error,
            promiseState: PromiseState.ERROR
        });
    } else {
        _.merge(objectState, { data: data, error: null, promiseState: PromiseState.SUCCESS });
    }
    return Object.assign({}, state, { [object]: objectState });
}

export function get(obj, path, defaultValue) {
    return _.get(obj, path, defaultValue);
}

export function isDefinedNotNull(obj) {
    return typeof obj !== 'undefined' && obj !== null;
}

export function isEmptyArray(arr) {
    return _.isArray(arr) && arr.length === 0;
}

export function isNonEmptyArray(arr) {
    return _.isArray(arr) && arr.length > 0;
}

export function isNullOrEmpty(obj) {
    // eslint-disable-next-line eqeqeq
    if (obj == null) {
        return true;
    }
    return _.isObject(obj) && Object.keys(obj).length === 0;
}

export function isEmptyObject(obj) {
    if (typeof obj === 'undefined') {
        return true;
    }
    return _.isObject(obj) && Object.keys(obj).length === 0;
}

export function isNonEmptyObject(obj) {
    return _.isObject(obj) && Object.keys(obj).length > 0;
}

export function isNonEmptyString(str) {
    return _.isString(str) && str.trim().length > 0;
}

export function isEmptyString(str) {
    return _.isString(str) && str.trim().length === 0;
}

export function makeFirstLetterUpperCase(str) {
    return _.isString(str) && _.upperFirst(str);
}

export function removeNullProperties(obj) {
    for (const propName in obj) {
        if (obj[propName] === null || obj[propName] === undefined) {
            delete obj[propName];
        }
    }
}

// TODO: Move functions below to ArrayUtils.js?

export function sortByLengthOfArrayProperty(array, propertyName) {
    function arrayLengthComparator(item) {
        return item[propertyName] ? item[propertyName].length : 0;
    }

    return _.sortBy(array, arrayLengthComparator);
}

export function groupWithCounts(array) {
    const counts = {};
    array.forEach(function (item) {
        counts[item] = counts[item] || 0;
        counts[item]++;
    });
    return counts;
}

export function sortedGroupCounts(array) {
    const counts = groupWithCounts(array);
    return Object.keys(counts)
        .sort()
        .map(function (item) {
            return {
                value: item,
                count: counts[item]
            };
        });
}

export function pickArray(objects, propertyNames) {
    return _.map(objects, _.partialRight(_.pick, propertyNames));
}
