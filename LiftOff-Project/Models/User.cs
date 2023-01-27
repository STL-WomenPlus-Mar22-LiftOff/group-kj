namespace LiftOff_Project.Models
{
    public class User
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        //Will have auth in future, simple user exists for testing the User - WatchList hookup
        public string Password { get; set; }

        
        
        public WatchList WatchList { get; set; }
        
        public User (int id, string userName, string password, WatchList watchList, int watchListId)
        {
            Id = id;
            UserName = userName;
            Password = password;
            WatchList = watchList;
        }

        public User () { }

        public override bool Equals(object? obj)
        {
            return obj is User user &&
                   Id == user.Id;
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Id);
        }
    }
}
