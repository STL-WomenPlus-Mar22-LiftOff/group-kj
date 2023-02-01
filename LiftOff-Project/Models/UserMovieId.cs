namespace LiftOff_Project.Models
{
    public class UserMovieId
    {
        public int UserId { get; set; }
        public User User { get; set; }
        public int APIMovieId { get; set; }

        public UserMovieId()
        {
        }
    }
}
