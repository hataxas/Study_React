import * as axios from 'axios';

//! наш axios можно настроить чтобы не писать одни и те же вещи в каждом запросе. Для этого создаем переменную instance и прописываем в ней все повторяющиеся вещи:
// const instance = axios.create({
//   withCredentials: true,
//   baseURL: 'http://localhost:4567/api/',
//   headers: {
//     "API-KEY": "b177587-hu89- и т.д."
//   }
// })

//! и теперь мы можем возвращать не axios а настроенный нами instance
// export const getUsers = (currentPage = 1, pageSize = 5) => {
//   return instance.get(`users?page=${currentPage}&per_page=${pageSize}&count=21`)
//     .then(response => { return response.data });
// }


//? выносим наш запрос в отдельный файл и возвращать из него будем только data
//! если мы не получаем нужную информацию из пропсов то нам нужно передать ее в качестве параметров. Мы можем задать какими эти параметры будут по умолчанию, если не прийдет других значений.
export const getUsers = (currentPage = 1, pageSize = 5) => {
  return axios.get(`http://localhost:4567/api/users?page=${currentPage}&per_page=${pageSize}&count=21`)
}

export const getUserById = (userId) => {
  return axios.get(`http://localhost:4567/api/users/` + userId)
    .then(response => { return response.data });
}

//! делаем запрос на сервер залогинен пользователь или нет (нужно разобраться как делать этот запрос)
export const authAPI = {
  login(email, password) {
    return axios.post(`http://localhost:4567/api/session`, { session: { email, password } });
  },
  logout() {
    return axios.delete(`http://localhost:4567/api/session`);
  },
}
