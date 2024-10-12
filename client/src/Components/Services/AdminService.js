import {API_BASE_URL} from './BaseURL'
import {IMG_BASE_URL} from './BaseURL'
import axios from 'axios';

    export const viewCount = async (api) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/${api}`);
      console.log("api called",response);
      
            if (response.data.status === 200) {
                return { success: true, user: response.data.data};
            } else {
                return { success: false, message: response.data.msg };
            }
        } catch (error) {
            console.log(error);
            
            if (error.response && error.response.data) {
                return {
                    success: false,
                    message: error.response.data.msg || 'view failed',
                };
            }
            return {
                success: false,
                message: 'An unexpected error occurred',
            };
        }
      };