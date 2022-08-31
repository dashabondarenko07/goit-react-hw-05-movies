import ListTrendingMovies from "components/TrendingMoviesList/TrendingMoviesList";

export default function Home() {
  return (
    <>
      <div>
        <h1>Trending today</h1>
        <ListTrendingMovies />
      </div>
    </>
  );
}
