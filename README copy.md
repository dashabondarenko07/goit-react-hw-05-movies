Open Home
Navigation Home
-Home
-Movies


Home
{Title
List of popular movies: -Movies/MoviesDetails}

Movies
{Form{
   Input $API
   Bnt}
{[]&& (Not list)}
{List{
   Title: -Movies/MoviesDetails}
   }
}
/MoviesDetails{
   -Bnt(Go back)
   -Img | Title-movies, User-Score, Overview, Overview-text, Genres, Genres-text
   -Additional information{
      Title
      -Cast
      -Reviews
   }
}

Movies/Cast{
   List{
      -Img
      -Title
      -Text
   }
}
Movies/Reviews{
   {[]&& Text}
   {List{
      -Title
      -Text
   }}
}