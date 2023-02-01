namespace LiftOff_Project.Models
{
    public class WatchListMovieId
    {
        public int MovieId { get; set; }
       // public Movie Movie { get; set; }

        public int WatchListId { get; set; }
        //        public WatchList WatchList { get; set; }

        public WatchListMovieId()
        {

        }
        public WatchListMovieId(int movieid, int watchlistid)

        {
            MovieId = movieid;
            WatchListId = watchlistid;
        }

        public override bool Equals(object? obj)
        {
            return obj is WatchListMovieId id &&
                   MovieId == id.MovieId &&
                   WatchListId == id.WatchListId;
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(MovieId, WatchListId);
        }
    }
}
