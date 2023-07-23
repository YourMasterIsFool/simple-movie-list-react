import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import client from "../../../config/client";
import { act } from "react-dom/test-utils";
import MovieModel from "../model/movie_model";


export const fetchMovieList = createAsyncThunk('movieSlice/fetchMovieList',  async (params:any)  =>{
    try {
        const response = await client.get('/search/movie', params);
        console.log('print response'+ response);
       
        return [...response.data['results']]
    }   
    catch(e) {
        console.log(e);
    }
})

export const fetchMoviesPopuler = createAsyncThunk('movieSlice/fetchMoviesPopuler',  async ()  =>{
    try {
        const response = await client.get('/movie/popular');
        
        var result: MovieModel[] = []
        if(response.status == 200) {
            result = response.data['results'] as MovieModel[]
        }

        

        return result;
    }   
    catch(e) {
        console.log(e);
    }
})

export const fetchMoviesTopRated = createAsyncThunk('movieSlice/fetchMoviesTopRated',  async ()  =>{
    try {
        const response = await client.get('/movie/top_rated');
        
        var result: MovieModel[] = []
        if(response.status == 200) {
            result = response.data['results'] as MovieModel[]
        }

        

        return result;
    }   
    catch(e) {
        console.log(e);
    }
})

export const fetchMoviesUpcoming = createAsyncThunk('movieSlice/fetchMoviesUpcoming',  async ()  =>{
    try {
        const response = await client.get('/movie/upcoming');
        
        var result: MovieModel[] = []
        if(response.status == 200) {
            result = response.data['results'] as MovieModel[]
        }

        

        return result;
    }   
    catch(e) {
        console.log(e);
    }
})

export const fetchMovieDetail = createAsyncThunk('movie/fetchMovieDetail', async ({
    id
}: {
    id: string
}) => {
    try {
        const response = await client.get(`/movie/${id}`);
            var result: MovieModel | null = null;

        if(response.status == 200) {
            result = response.data
        }

        return result
    }
    catch(e) {
        console.log(e);
    }
}) 

export const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: {
        popularMovies: [] as MovieModel[],
        topRated: [] as MovieModel[],
        upcomingMovies: [] as MovieModel[],
        movies: [] as MovieModel[],
        count: 0,
        search: '' as String,
        detail: null as MovieModel| null ,
        loading: 'idle' as string,
    },
    reducers: {
        incrementHandler(state) {
            state.count++;
        },
        
        searchMovies(state, action) {
            state.search = action.payload ;
        }
        

    },
    extraReducers(builder) {
     

        builder.addCase(fetchMoviesPopuler.fulfilled, (state, action:any) => {
           if(state.loading == 'pending') {
            state.loading = 'idle'
            state.popularMovies = action.payload
           }
        })

        builder.addCase(fetchMoviesPopuler.pending, (state, action:any) => {
            if(state.loading == 'idle') {
                state.loading = 'pending'
            }
         })

        builder.addCase(fetchMoviesTopRated.fulfilled, (state, action:any) => {
            state.topRated = action.payload
         })

         builder.addCase(fetchMoviesUpcoming.fulfilled, (state, action:any) => {
            state.upcomingMovies = action.payload
         })


         builder.addCase(fetchMovieList.fulfilled, (state, action:any) => {
            state.movies = action.payload
         })
         builder.addCase(fetchMovieDetail.fulfilled, (state, action:any) => {
            if(state.loading == 'pending') {
                state.loading = 'idle'
                state.detail = action.payload
            }
         })

         builder.addCase(fetchMovieDetail.pending, (state, action:any) => {
            if(state.loading == 'idle') {
                state.loading = 'pending'
            }
         })
    }
})


export const {
    incrementHandler,
    searchMovies
} = movieSlice.actions


export default movieSlice.reducer