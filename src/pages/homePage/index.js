import { useQuery } from "@tanstack/react-query"
import { Api } from "apis"
import { MOVIE_QUERY_KEY } from "consts/queryKey"

const HomePage = () => {

    const {data : movieList} = useQuery({
        queryKey: [MOVIE_QUERY_KEY.POPULAR_MOVIE_LIST],
        queryFn: Api.getMovieList,
      })

      movieList && console.log(movieList.data.results)

    return (
        movieList && (
            movieList.data.results.map((movie) => {
                return (<div key={movie.id}>{movie.title}</div>)
            })
        )
    )
}

export default HomePage