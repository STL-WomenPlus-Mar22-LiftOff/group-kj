using LiftOff_Project.Models;

namespace LiftOff_Project.Data
{
    public class ImplementData: MovieData
    {
        private readonly NWDbContext _context;
        public ImplementData(NWDbContext context)
        {
            _context = context;
        }

        public Movie AddMovie(int id)
        {
            throw new NotImplementedException();
        }

        public Movie DeleteMovie(Movie movie)
        {
            throw new NotImplementedException();
        }

        public Movie EditMovie(Movie movie)
        {
            throw new NotImplementedException();
        }

        public Movie GetMovie(int id)
        {
            throw new NotImplementedException();
        }
        public List<Movie> GetMoviesByTitle(string title)
        {
            //throw new NotImplementedException();
            return _context.Movies.ToList();
        }

        public List<Movie> GetMovies()
        {
            //throw new NotImplementedException();
            return _context.Movies.ToList();
        }

    }
    
}
