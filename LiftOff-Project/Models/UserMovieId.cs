namespace LiftOff_Project.Models
{
    public class UserMovieId
    {
        public int UserId { get; set; }
       // public User User { get; set; }
        public int APIMovieId { get; set; }

        public UserMovieId(int userId, int aPIMovieId)
        {
            UserId = userId;
            APIMovieId = aPIMovieId;
         //   User = null;
        }

        public UserMovieId()
        {
        }
        public override bool Equals(object? obj)
        {
            return obj is UserMovieId userMovieId &&
                UserId == userMovieId.UserId;
        }
        public override int GetHashCode()
        {
            return base.GetHashCode();
        }

    }
}
