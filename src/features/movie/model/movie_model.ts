interface MovieModel{
    adult: Boolean,
      backdrop_path:String|null,
      genre_ids: any[],
      id: Number,
      original_language: String|null,
      original_title: String|null,
      overview: String|null,
      popularity: Number,
      poster_path: String|null,
      release_date: Date | undefined,
      title: String|null,
      video: Boolean | false,
      vote_average: Number | null,
      vote_count: Number|null
    
}

export default MovieModel