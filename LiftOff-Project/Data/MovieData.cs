using LiftOff_Project.Models;

namespace LiftOff_Project.Data
{
    public interface MovieData
    {
        //Get the list of all the users
        List<Movie> GetMovies();
        Movie GetMovie(int id);
        Movie AddMovie(int id);
        // Delete the user.
        Movie DeleteMovie(Movie movie); 

        //User EditMovie(Movie movie);
        Movie EditMovie(Movie movie);
        //Edit the user data.
        //List<Movie> GetAllMovies();
        List<Movie> GetMoviesByTitle(string title);

    }
}
