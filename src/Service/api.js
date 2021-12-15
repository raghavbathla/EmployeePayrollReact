import axios from 'axios';

const usersUrl = 'http://localhost:3003/EmployeePayrollDB';


export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${usersUrl}/${id}`);
}
export const addUser = async (user) => {
    return await axios.post(usersUrl, user);
}
export const deleteUser = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);
}
export const edituser = async (id, user) => {
    return await axios.put(`${usersUrl}/${id}`, user)
}