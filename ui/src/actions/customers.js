
import axios from 'axios';
import { IN_DEVELOPMENT_MODE, isSSOEnabled, ROOT_URL } from '../config';
import Cookies from 'js-cookie';
import { getCustomerEndpoint } from './common';

// Get current user(me) from token in localStorage
export const VALIDATE_FROM_TOKEN = 'VALIDATE_FROM_TOKEN';
export const VALIDATE_FROM_TOKEN_RESPONSE = 'VALIDATE_FROM_TOKEN_RESPONSE';

// Get OIDC token
export const FETCH_OIDC_TOKEN = 'FETCH_OIDC_TOKEN';
export const FETCH_OIDC_TOKEN_RESPONSE = 'FETCH_OIDC_TOKEN_RESPONSE';

// Sign Up Customer
export const REGISTER = 'REGISTER';
export const REGISTER_RESPONSE = 'REGISTER_RESPONSE';

// Validate Customer registration
export const FETCH_PASSWORD_POLICY = 'FETCH_PASSWORD_POLICY';
export const FETCH_PASSWORD_POLICY_RESPONSE = 'FETCH_PASSWORD_POLICY_RESPONSE';

// Validate Customer registration
export const FETCH_ADMIN_NOTIFICATIONS = 'FETCH_ADMIN_NOTIFICATIONS';
export const FETCH_ADMIN_NOTIFICATIONS_RESPONSE = 'FETCH_ADMIN_NOTIFICATIONS_RESPONSE';

// Sign In Customer
export const LOGIN = 'LOGIN';
export const LOGIN_RESPONSE = 'LOGIN_RESPONSE';

export const RESET_CUSTOMER = 'RESET_CUSTOMER';

export const API_TOKEN_LOADING = 'API_TOKEN_LOADING';
export const API_TOKEN = 'API_TOKEN';
export const API_TOKEN_RESPONSE = 'API_TOKEN_RESPONSE';

// log out Customer
export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

// Update Customer Profile
export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const UPDATE_PROFILE_FAILURE = 'UPDATE_PROFILE_FAILURE';

// Update User Profile
export const UPDATE_USER_PROFILE = 'UPDATE_USER_PROFILE';
export const UPDATE_USER_PROFILE_SUCCESS = 'UPDATE_USER_PROFILE_SUCCESS';
export const UPDATE_USER_PROFILE_FAILURE = 'UPDATE_USER_PROFILE_FAILURE';

// Fetch User
export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

// Fetch Software Versions for Customer
export const FETCH_SOFTWARE_VERSIONS = 'FETCH_SOFTWARE_VERSIONS';
export const FETCH_SOFTWARE_VERSIONS_SUCCESS = 'FETCH_SOFTWARE_VERSIONS_SUCCESS';
export const FETCH_SOFTWARE_VERSIONS_FAILURE = 'FETCH_SOFTWARE_VERSIONS_FAILURE';

export const FETCH_DB_VERSIONS = 'FETCH_DB_VERSIONS';
export const FETCH_DB_VERSIONS_SUCCESS = 'FETCH_DB_VERSIONS_SUCCESS';
export const FETCH_DB_VERSIONS_FAILURE = 'FETCH_DB_VERSIONS_FAILURE';

export const FETCH_HOST_INFO = 'FETCH_HOST_INFO';
export const FETCH_HOST_INFO_SUCCESS = 'FETCH_HOST_INFO_SUCCESS';
export const FETCH_HOST_INFO_FAILURE = 'FETCH_HOST_INFO_FAILURE';

export const FETCH_CUSTOMER_COUNT = 'FETCH_CUSTOMER_COUNT';

export const GET_ALERTS = 'GET_ALERTS';
export const GET_ALERTS_SUCCESS = 'GET_ALERTS_SUCCESS';
export const GET_ALERTS_FAILURE = 'GET_ALERTS_FAILURE';

export const CREATE_ALERT_CHANNEL = 'CREATE_ALERT_CHANNEL';
export const CREATE_ALERT_CHANNEL_RESPONSE = 'CREATE_ALERT_CHANNEL_RESPONSE';
export const UPDATE_ALERT_CHANNEL = 'UPDATE_ALERT_CHANNEL';
export const DELETE_ALERT_CHANNEL = 'DELETE_ALERT_CHANNEL';

export const CREATE_ALERT_DESTINATION = 'CREATE_ALERT_DESTINATION';
export const CREATE_ALERT_DESTINATION_RESPONSE = 'CREATE_ALERT_DESTINATION_RESPONSE';

export const CREATE_ALERT_CONFIG = 'CREATE_ALERT_CONFIG';
export const CREATE_ALERT_CONFIG_RESPONSE = 'CREATE_ALERT_CONFIG_RESPONSE';

export const UPDATE_ALERT_CONFIG = 'UPDATE_ALERT_CONFIG';
export const UPDATE_ALERT_CONFIG_RESPONSE = 'UPDATE_ALERT_CONFIG_RESPONSE';

export const UPDATE_ALERT_DESTINATION = 'UPDATE_ALERT_DESTINATION';
export const UPDATE_ALERT_DESTINATION_RESPONSE = 'UPDATE_ALERT_DESTINATION_RESPONSE';

export const DELETE_ALERT_DESTINATION = 'DELETE_ALERT_DESTINATION';
export const DELETE_ALERT_CONFIG = 'DELETE_ALERT_CONFIG';

export const GET_ALERT_CHANNELS = 'GET_ALERT_CHANNELS';
export const GET_ALERT_CHANNELS_SUCCESS = 'GET_ALERT_CHANNELS_SUCCESS';
export const GET_ALERT_CHANNELS_FAILURE = 'GET_ALERT_CHANNELS_FAILURE';

export const GET_ALERT_CONFIGS = 'GET_ALERT_CONFIGS';
export const GET_ALERT_DESTINATIONS = 'GET_ALERT_DESTINATIONS';
export const GET_ALERT_TEMPLATES = 'GET_ALERT_TEMPLATES';

export const FETCH_YUGAWARE_VERSION = 'FETCH_YUGAWARE_VERSION';
export const FETCH_YUGAWARE_VERSION_RESPONSE = 'FETCH_YUGAWARE_VERSION_RESPONSE';

export const ADD_CUSTOMER_CONFIG = 'ADD_CUSTOMER_CONFIG';
export const ADD_CUSTOMER_CONFIG_RESPONSE = 'ADD_CUSTOMER_CONFIG_RESPONSE';

export const SET_INITIAL_VALUES = 'SET_INITIAL_VALUES';

export const EDIT_CUSTOMER_CONFIG = 'EDIT_CUSTOMER_CONFIG';
export const EDIT_CUSTOMER_CONFIG_RESPONSE = 'EDIT_CUSTOMER_CONFIG_RESPONSE';

export const DELETE_CUSTOMER_CONFIG = 'DELETE_CUSTOMER_CONFIG';
export const DELETE_CUSTOMER_CONFIG_RESPONSE = 'DELETE_CUSTOMER_CONFIG_RESPONSE';

export const FETCH_CUSTOMER_CONFIGS = 'FETCH_CUSTOMER_CONFIGS';
export const FETCH_CUSTOMER_CONFIGS_RESPONSE = 'FETCH_CUSTOMER_CONFIGS_RESPONSE';

export const FETCH_RUNTIME_CONFIGS = 'FETCH_RUNTIME_CONFIGS';
export const FETCH_RUNTIME_CONFIGS_RESPONSE = 'FETCH_RUNTIME_CONFIGS_RESPONSE';

export const FETCH_RUNTIME_CONFIGS_KEY_INFO = 'FETCH_RUNTIME_CONFIGS_KEY_INFO';
export const FETCH_RUNTIME_CONFIGS_KEY_INFO_RESPONSE = 'FETCH_RUNTIME_CONFIGS_KEY_INFO_RESPONSE';

export const FETCH_CUSTOMER_RUNTIME_CONFIGS = 'FETCH_CUSTOMER_RUNTIME_CONFIGS';
export const FETCH_CUSTOMER_RUNTIME_CONFIGS_RESPONSE = 'FETCH_CUSTOMER_RUNTIME_CONFIGS_RESPONSE';

export const FETCH_PROVIDER_RUNTIME_CONFIGS = 'FETCH_PROVIDER_RUNTIME_CONFIGS';
export const FETCH_PROVIDER_RUNTIME_CONFIGS_RESPONSE = 'FETCH_PROVIDER_RUNTIME_CONFIGS_RESPONSE';

export const GET_RUNTIME_CONFIG_KEY = 'GET_RUNTIME_CONFIG_KEY';
export const GET_RUNTIME_CONFIG_KEY_RESPONSE = 'GET_RUNTIME_CONFIG_KEY_RESPONSE';

export const SET_RUNTIME_CONFIG = 'SET_RUNTIME_CONFIG';
export const SET_RUNTIME_CONFIG_RESPONSE = 'SET_RUNTIME_CONFIG_RESPONSE';

export const DELETE_RUNTIME_CONFIG = 'DELETE_RUNTIME_CONFIG';
export const DELETE_RUNTIME_CONFIG_RESPONSE = 'DELETE_RUNTIME_CONFIG_RESPONSE';

export const INVALID_CUSTOMER_TOKEN = 'INVALID_CUSTOMER_TOKEN';
export const RESET_TOKEN_ERROR = 'RESET_TOKEN_ERROR';

export const GET_LOGS = 'GET_LOGS';
export const GET_LOGS_SUCCESS = 'GET_LOGS_SUCCESS';
export const GET_LOGS_FAILURE = 'GET_LOGS_FAILURE';
export const LOGS_FETCHING = 'LOGS_FETCHING';

export const GET_RELEASES = 'GET_RELEASES';
export const GET_RELEASES_RESPONSE = 'GET_RELEASES_RESPONSE';

export const FETCH_TLS_CERTS = 'FETCH_TLS_CERTS';
export const FETCH_TLS_CERTS_RESPONSE = 'FETCH_TLS_CERTS_RESPONSE';
export const ADD_TLS_CERT_RESET = 'ADD_TLS_CERT_RESET';

export const ADD_TLS_CERT = 'ADD_TLS_CERT';
export const ADD_TLS_CERT_RESPONSE = 'ADD_TLS_CERT_RESPONSE';

export const UPDATE_CERT = 'UPDATE_CERT';
export const UPDATE_CERT_RESPONSE = 'UPDATE_CERT_RESPONSE';

export const FETCH_CLIENT_CERT = 'FETCH_CLIENT_CERT';

export const REFRESH_RELEASES = 'REFRESH_RELEASES';
export const REFRESH_RELEASES_RESPONSE = 'REFRESH_RELEASES_RESPONSE';

export const IMPORT_RELEASE = 'IMPORT_RELEASE';
export const IMPORT_RELEASE_RESPONSE = 'IMPORT_RELEASE_RESPONSE';

export const UPDATE_RELEASE = 'UPDATE_RELEASE';
export const UPDATE_RELEASE_RESPONSE = 'UPDATE_RELEASE_RESPONSE';

export const GET_CUSTOMER_USERS = 'GET_CUSTOMER_USERS';
export const GET_CUSTOMER_USERS_SUCCESS = 'GET_CUSTOMER_USERS_SUCCESS';
export const GET_CUSTOMER_USERS_FAILURE = 'GET_CUSTOMER_USERS_FAILURE';

export const GET_SCHEDULES = 'GET_SCHEDULES';
export const GET_SCHEDULES_RESPONSE = 'GET_SCHEDULES_RESPONSE';
export const DELETE_SCHEDULE = 'DELETE_SCHEDULE';
export const DELETE_SCHEDULE_RESPONSE = 'DELETE_SCHEDULE_RESPONSE';

export const CREATE_USER = 'CREATE_USER';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';

export const DELETE_USER = 'DELETE_USER';
export const DELETE_USER_RESPONSE = 'DELETE_USER_RESPONSE';

export const CHANGE_USER_ROLE = 'CHANGE_USER_ROLE';

export const UPDATE_TLS = 'UPDATE_TLS';

export const RESET_RUNTIME_CONFIGS = 'RESET_RUNTIME_CONFIGS';

export const DEFAULT_RUNTIME_GLOBAL_SCOPE = '00000000-0000-0000-0000-000000000000';

export function validateToken() {
    let cUUID = Cookies.get('customerId');
    if (cUUID) {
        localStorage.setItem('customerId', cUUID);
    } else {
        cUUID = localStorage.getItem('customerId');
    }

    // we support both sso and user login together
    const authToken = Cookies.get('authToken') ?? localStorage.getItem('authToken');
    if (authToken && authToken !== '') {
        axios.defaults.headers.common['X-AUTH-TOKEN'] = authToken;
    }
    const apiToken = Cookies.get('apiToken') ?? localStorage.getItem('apiToken');
    if (apiToken && apiToken !== '') {
        axios.defaults.headers.common['X-AUTH-API-TOKEN'] = apiToken;


        // in dev mode UI and API usually run on different hosts, so need to include cookies for cross-domain requests
        if (IN_DEVELOPMENT_MODE) {
            axios.defaults.withCredentials = true;
        }
        if (!IN_DEVELOPMENT_MODE || !process.env.REACT_APP_API_URL) {
            axios.defaults.headers.common['Csrf-Token'] = Cookies.get('csrfCookie');
        }

        const request = axios(`${ROOT_URL}/customers/${cUUID}`);
        return {
            type: VALIDATE_FROM_TOKEN,
            payload: request
        };
    }
}

export function validateFromTokenResponse(response) {
    return {
        type: VALIDATE_FROM_TOKEN_RESPONSE,
        payload: response
    };
}

export function register(formValues) {
    const request = axios.post(`${ROOT_URL}/register`, formValues);
    return {
        type: REGISTER,
        payload: request
    };
}

export function registerResponse(response) {
    return {
        type: REGISTER_RESPONSE,
        payload: response
    };
}

export function fetchPasswordPolicy() {
    const cUUID = localStorage.getItem('customerId') ?? DEFAULT_RUNTIME_GLOBAL_SCOPE;
    const request = axios.get(`${ROOT_URL}/customers/${cUUID}/password_policy`);
    return {
        type: FETCH_PASSWORD_POLICY,
        payload: request
    };
}

export function fetchPasswordPolicyResponse(response) {
    return {
        type: FETCH_PASSWORD_POLICY_RESPONSE,
        payload: response
    };
}

export function fetchAdminNotifications() {
    const cUUID = localStorage.getItem('customerId');
    const request = axios.get(`${ROOT_URL}/customers/${cUUID}/admin_notifications`);
    return {
        type: FETCH_ADMIN_NOTIFICATIONS,
        payload: request
    };
}

export function fetchAdminNotificationsResponse(response) {
    return {
        type: FETCH_ADMIN_NOTIFICATIONS_RESPONSE,
        payload: response
    };
}

export function login(formValues) {
    const request = axios.post(`${ROOT_URL}/login`, formValues);
    return {
        type: LOGIN,
        payload: request
    };
}

export function loginResponse(response) {
    return {
        type: LOGIN_RESPONSE,
        payload: response
    };
}

export function logout() {
    const logout_url = `${ROOT_URL}/logout`;
    const request = axios.get(logout_url);

    if (isSSOEnabled()) {
        const sso_logout = `${ROOT_URL}/third_party_logout`;
        axios.get(sso_logout);
    }

    return {
        type: LOGOUT,
        payload: request
    };
}

export function logoutSuccess() {
    return {
        type: LOGOUT_SUCCESS
    };
}

export function logoutFailure(error) {
    return {
        type: LOGOUT_FAILURE,
        payload: error
    };
}

export function getApiTokenLoading() {
    return {
        type: API_TOKEN_LOADING
    };
}

export function getApiToken(authToken) {
    const cUUID = localStorage.getItem('customerId');
    const request = axios.put(`${ROOT_URL}/customers/${cUUID}/api_token`, {}, authToken);
    return {
        type: API_TOKEN,
        payload: request
    };
}

export function getApiTokenResponse(response) {
    return {
        type: API_TOKEN_RESPONSE,
        payload: response
    };
}

export function resetCustomer() {
    return {
        type: RESET_CUSTOMER
    };
}

export function customerTokenError() {
    return {
        type: INVALID_CUSTOMER_TOKEN
    };
}

export function resetCustomerError() {
    return {
        type: RESET_TOKEN_ERROR
    };
}

export function updateProfile(values) {
    const cUUID = localStorage.getItem('customerId');
    const request = axios.put(`${ROOT_URL}/customers/${cUUID}`, values);
    return {
        type: UPDATE_PROFILE,
        payload: request
    };
}

export function updateProfileSuccess(response) {
    return {
        type: UPDATE_PROFILE_SUCCESS,
        payload: response
    };
}

export function updateProfileFailure(error) {
    return {
        type: UPDATE_PROFILE_FAILURE,
        payload: error
    };
}

export function updatePassword(_user, values) {
    const cUUID = localStorage.getItem('customerId');
    const data = {
        ...values
    };
    return axios.put(`${ROOT_URL}/customers/${cUUID}/reset_password`, data);
}

export function updateUserProfile(user, values) {
    const cUUID = localStorage.getItem('customerId');
    const userUUID = user.uuid;
    const data = {
        ...values,
        role: user.role
    };
    const request = axios.put(
        `${ROOT_URL}/customers/${cUUID}/users/${userUUID}/update_profile`,
        data
    );
    return {
        type: UPDATE_USER_PROFILE,
        payload: request
    };
}

export function updateUserProfileSuccess(response) {
    return {
        type: UPDATE_USER_PROFILE_SUCCESS,
        payload: response
    };
}

export function updateUserProfileFailure(error) {
    return {
        type: UPDATE_USER_PROFILE_FAILURE,
        payload: error
    };
}