/**
 * Created by Rubel on 28/01/18.
 */
export const SAVE_TOKEN = "SAVE_TOKEN";
export const DELETE_TOKEN = "DELETE_TOKEN";

export function saveToken(token) {
    return {
        type: SAVE_TOKEN,
        payload: token
    }
}

export function deleteToken() {
    return {
        type: DELETE_TOKEN
    }
}