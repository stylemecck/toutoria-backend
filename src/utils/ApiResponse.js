class ApiResponse {
    constructor(statusCode, message = 'success', data){
        this.statusCode = statusCode
        this.message = message
        this.data = data
        this.success = statusCode < 400 // status code less than 400 hi hona chaiye 
    }
}

export {ApiResponse}