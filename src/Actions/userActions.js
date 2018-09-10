export function setName(name) {
    return dispatch => {
        // call api 
        setTimeout(() => {
            dispatch({
                type: "SET_NAME",
                payload: name
            })
        }, 2000)
    }
}
export function setAge(age) {
    return {
        type: "SET_AGE",
        payload: age
    }
}