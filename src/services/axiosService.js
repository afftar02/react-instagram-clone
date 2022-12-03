import axios from 'axios';

const axiosInstance = axios.create();

const getSessionFromStorage = () => JSON.parse(localStorage.getItem('tokens'));

const baseUrl = 'http://localhost:4444/api';

// фабрика создания запросов
export const request = async ({
  headers = {},
  method = 'GET',
  url,
  data,
  params,
}) => {
  // получили токен
  const { accessToken, refreshToken } = getSessionFromStorage() || {};

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
    url: baseUrl + url,
  };

  try {
    // выполняем запрос
    const result = await axiosInstance(options);

    return result;
  } catch (error) {
    if (error.response.status === 401 && refreshToken) {
      options.headers.Authorization = `Bearer ${refreshToken}`;
      options.method = 'POST';
      options.url = baseUrl + '/auth/refresh';

      const refreshResponse = await axiosInstance(options);
      localStorage.setItem('tokens', JSON.stringify({ accessToken: refreshResponse.data.accessToken, refreshToken: refreshToken }));

      const finalResponse = await request({ headers, method, url, data, params });

      return finalResponse;
    }

    throw error;
  }
};

