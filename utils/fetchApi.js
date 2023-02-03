import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'X-RapidAPI-Key': '76e9197c5cmsh4634bc212968f40p1d44b5jsn9edea1b2875b',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
},
  });
    
  return data;
}