import React from 'react'
import axios from 'axios';


    export const IMG_BASE_URL = 'http://localhost:4000';
    export const API_BASE_URL = 'http://localhost/akshaya_api/';
    
    export const login = async (data,api) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/${api}`, data);
      console.log("api called");
      
            if (response.data.status === 200) {
                const { result } = response.data;
                return { success: true, user: result };
            } else {
                return { success: false, message: response.data.msg };
            }
        } catch (error) {
            if (error.response && error.response.data) {
                return {
                    success: false,
                    message: error.response.data.msg || 'Login failed',
                };
            }
            return {
                success: false,
                message: 'An unexpected error occurred',
            };
        }
      };