import axios, { Axios } from "axios";


const options:any = {
    method: 'GET',
    url: 'https://unogs-unogs-v1.p.rapidapi.com',
    headers: {
      'X-RapidAPI-Key': '3268ea8543msh718c930abd7dc87p113650jsn4a3b00258a6e',
      
    }
  };

const client = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        accept: 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTFkMDQ0YjMyY2VmZmJiMWM2NTNmMjY3ZmQwMDExNCIsInN1YiI6IjY0Yjk4MzY5MzAwOWFhMDEzOTY3ZGUyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qYplOe-0qN6htZocXUizYZ_AVSKRVr-y4JIWBRnm5QI'
      }
})

export default client;