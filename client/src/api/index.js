import axios from 'axios'

const server='http://localhost:5000'

//   const API = axios.create({ baseURL: 'http://localhost:5000'})
//  const API = axios.create({ baseURL: process.env.REACT_APP_API})

// API.interceptors.request.use((req) => {
//     if(localStorage.getItem('profile')) {
//         req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
//     }

//     return req
// })

// export const fetchInvoices =() => API.get('/invoices')
export const fetchInvoice =async (id) =>await axios.get(`${server}/invoices/${id}`)
export const addInvoice =async ( invoice ) =>await axios.post(`${server}/invoices`, invoice)
export const updateInvoice =async  (id, updatedInvoice) =>await axios.patch(`${server}/invoices/${id}`, updatedInvoice)
export const deleteInvoice =async  (id) => await axios.delete(`${server}/invoices/${id}`)
export const fetchInvoicesByUser =async  (searchQuery) => await axios.get(`${server}/invoices?searchQuery=${searchQuery.search}`);

export const fetchClient =async  (id) => await axios.get(`${server}/clients/${id}`);
export const fetchClients =async  (page) => await axios.get(`${server}/clients?page=${page}`);
export const addClient =async  ( client ) => await axios.post(`${server}/clients`, client)
export const updateClient =async  (id, updatedClient) => await axios.patch(`${server}/clients/${id}`, updatedClient)
export const deleteClient =async  (id) => await axios.delete(`${server}/clients/${id}`)
export const fetchClientsByUser =async  (searchQuery) =>await axios.get(`${server}/clients/user?searchQuery=${searchQuery.search}`);


export const signIn = async (formData)=> await axios.post(`${server}/users/signin`, formData)
export const signUp =async (formData)=> await axios.post(`${server}/users/signup`, formData)
export const forgot =async  (formData) => await axios.post(`${server}/users/forgot`, formData);
export const reset =async  (formData) => await axios.post(`${server}/users/reset`, formData);

export const fetchProfilesBySearch =async  (searchQuery) => await axios.get(`${server}/profiles/search?searchQuery=${searchQuery.search || searchQuery.year || 'none'}`);
export const fetchProfile =async  (id) =>await axios.get(`${server}/profiles/${id}`)
export const fetchProfiles =async  () =>await axios.get(`${server}/profiles`);
export const fetchProfilesByUser =async  (searchQuery) => await axios.get(`${server}/profiles?searchQuery=${searchQuery.search}`)
export const createProfile =async  (newProfile) => await axios.post(`${server}/profiles`, newProfile);
export const updateProfile =async  (id, updatedProfile) => await axios.patch(`${server}/profiles/${id}`, updatedProfile);
export const deleteProfile =async  (id) => await axios.delete(`${server}/profiles/${id}`);