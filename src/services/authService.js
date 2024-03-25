import axiosInstance from '@/utils/axiosInstance'
import tokenMethod from '@/utils/token'

export const authService = {
    login(payload = {}) {
        return axiosInstance.post(`/customer/login`, payload)
    },
    register(payload = {}) {
        return axiosInstance.post(`/customer/register`, payload)
    },
    getProfiles() {
        return axiosInstance.get(`/customer/profiles`, {
            // headers: {
            //     Authorization: `Bearer ${tokenMethod.get()?.accessToken}`,
            // },
        })
    },
    updateProfile(payload = {}) {
        return axiosInstance.put(`/customer/profiles`, payload, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    },
}
