import api from './api'; 

export const submitContactForm = async (formData) => {
    try {
        const response = await api.post('/contact', formData);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Server error' };
    }
};
