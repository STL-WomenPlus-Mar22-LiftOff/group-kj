using LiftOff_Project.Models;
namespace LiftOff_Project.Data
{
    public interface IUserData
    {

        List<User> GetUsers(); //Get the list of all the users

        //List<WatchList> GetWatchListByUserId(int userid); // Get the watch list for the user

        IEnumerable<WatchList> GetWatchListByUserId(int userid);
      //  IEnumerable<User> GetUserbyID(string username, string password); //Get a Single User
        IEnumerable<User> GetUserbyID(int id);
        IEnumerable<User> GetUserbyUserName(string username);
        User AddUser(User user); //Add user to the database

        void DeleteUser(User user); // Delete the user.

        User EditUser(User user); //Edit the user data.

//        IEnumerable<WatchList> FindWatchListByUser(int id);

    }
}
