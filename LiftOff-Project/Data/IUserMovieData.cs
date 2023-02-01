using LiftOff_Project.Models;

namespace LiftOff_Project.Data
{
    public interface IUserMovieData
    {
        List<UserMovieId> GetUserMovieIds(); //Get the list of all the UserMovieIds

        UserMovieId GetUserMovieId(int id); //Get a Single UserMovieId

        User AddUserMovieId(UserMovieId userMovieId); //Add userMovieId to the database

        void DeleteUserMovieId(UserMovieId userMovieId); // Delete the userMovieId.

        User EditUserMovieId(UserMovieId userMovieId); //Edit the userMovieId data.
        IEnumerable<UserMovieId> GetUserMovieIdByUserId(int userId);
    }
}
