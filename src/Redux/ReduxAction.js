import { ADD, DELETE } from "./ReduxType"

export const addition = function (id) {
    return {
        type:ADD,
        payload:id,
    };
};

export const deletion = function (id) {
    return {
        type:DELETE,
        payload:id,
    };
};