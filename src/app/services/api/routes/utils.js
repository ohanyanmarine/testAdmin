import api from ".."

export const getCategoriesRequest = async () => {
    //utils/doctor-category/?limit=20&offset=0
    try {
        const responce = await api.get(`utils/doctor-category/?limit=20&offset=0&timestamp=${new Date().getTime()}`)
        return responce.data
    } catch (error) {
        if (error.response) {
            throw error.response.data;
        }
        throw error
    }
}
export const deleteCategoryRequest = async (id) => {
    //utils/doctor-category/?limit=20&offset=0
    try {
        const responce = await api.delete(`utils/doctor-category/${id}/`)
        return responce.data
    } catch (error) {
        if (error.response) {
            throw error.response.data;
        }
        throw error
    }
}