import { mapValues } from 'lodash';
import { TOGGLE_FEATURE } from '../actions/feature';

const initialStateFeatureInTest = {
  
};

const initialStateFeatureReleased = {
  
};

export const testFeatureFlagsLocalStorageKey = 'featureFlags-test';

//Get feature flags from the local storage
const featureFlagsInLocalStorage = JSON.parse(
    localStorage.getItem(testFeatureFlagsLocalStorageKey) ?? '{}'
);

//Rather than directly utilizing the values stored in the local storage, we opt to map them to the test feature flag.
//This approach ensures that we do not overwrite any newly added values in the test feature flag
const testFeatureFlags = mapValues(
    initialStateFeatureInTest,
    (val, key) => featureFlagsInLocalStorage[key] ?? val
);

export const FeatureFlag = (
    state = {
        test: { ...testFeatureFlags, ...initialStateFeatureReleased },
        released: initialStateFeatureReleased
    },
    action
) => {
    switch (action.type) {
        case TOGGLE_FEATURE:
            if (!state.released[action.feature]) {
                state.test[action.feature] = !state.test[action.feature];
            }
            localStorage.setItem(testFeatureFlagsLocalStorageKey, JSON.stringify(state.test));
            return { ...state, test: { ...state.test } };
        default:
            return state;
    }
};