namespace LiftOff_Project.Models
{
    public class WatchListMovieId
    {
        public int MovieId { get; set; }
       // public Movie Movie { get; set; }

        public int WatchListId { get; set; }
//        public WatchList WatchList { get; set; }

        public WatchListMovieId(int movieid,int watchlistid)
        {
            MovieId = movieid;  
            WatchListId = watchlistid;
        }
    }
}
