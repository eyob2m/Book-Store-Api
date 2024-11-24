export const setError = (message,status) => {
    let error = new Error()
    error.status = status
    error.message = message
    
    return error;
}