

export const validateUser = async (data) =>{
    let error = []

    if(!data?.name) {
        error.push('Name is required')
    }
    if(!data?.email) {
        error.push('Email is required')
    }
    if(!data?.password) {
        error.push('Password is required')
    }
    if(!data?.role) {
        error.push('Role is required')
    }

    if (error.length == 0) {
        return { valid: true }
    }

    else {

        return { valid: false, error: error }
    }
}