namespace LiftOff_Project.Models
{
    public class MyWatchListModel
    {
        /// <summary>
        /// This will eventually be a defunct class. Currently using for testing. When the final WatchList is designed 
        /// it will be "WatchList.cs" and basically the real model will exist to connect a list of movie Ids to a user,
        /// and when called will fetch movie JSON from TMDB for the actual information we'll populate a page with.
        /// I'm not trying to save their database on my computer haha.
        ///  the API only for this data.
        /// </summary>
        /// 

        public int Id { get; set; }
        public string Title { get; set; }

        public string Provider { get; set; }

        public int Rated { get; set; }
    }
}
