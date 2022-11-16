import axios from 'axios';

const axiosInstance = axios.create();

const getSessionFromStorage = () => localStorage.getItem('tokens');

// фабрика создания запросов
export const request = async ({
    headers = {},
    method = 'GET',
    url,
    data,
    params,
  }) => {
    // получили токен
    const { accessToken } = getSessionFromStorage() || {};
  
    // если есть токен то добавили его в header
    if (accessToken) {
      headers.Authorization = `Bearer ${accessToken}`;
    }
  
    // формируем параметры запроса
    const options = {
      headers,
      method,
      data,
      params,
      url,
    };
  
    try {
      // выполняем запрос
      const result = await axiosInstance(options);
  
      return result;
    } catch (error) {
      console.error(error);
  
      throw error;
    }
  };

  