namespace LiftOff_Project.Models
{
    public class WatchListMovieId
    {
        //added id field
        public int Id { get; set; }
        public int MovieId { get; set; }
        public Movie Movie { get; set; }

        public int WatchListId { get; set; }
        public WatchList WatchList { get; set; }
        public WatchListMovieId()
        {
        }
        /*
        public WatchListMovieId(int id, int movieId, Movie movie, int watchlistid)
        {
            Id = id;
            MovieId = movieId;
            Movie = movie;
            WatchListId = watchlistid;

        }

        
        public override bool Equals(object? obj)
        {
            return base.Equals(obj);
        }
        public override int GetHashCode()
        {
            return base.GetHashCode();  
        }*/
    }
}
