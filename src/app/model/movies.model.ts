export class APIResposta {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number

  constructor(page: number, results: Movie[], total_pages: number, total_results: number) {
    this.page = page;
    this.results = results;
    this.total_pages = total_pages;
    this.total_results = total_results;
  }
}

export class Movie {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}