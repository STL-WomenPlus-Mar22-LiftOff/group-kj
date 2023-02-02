using LiftOff_Project.Models;
namespace LiftOff_Project.Data
{
    public interface IUserData
    {

        List<User> GetUsers(); //Get the list of all the users

        User GetUser(int id); //Get a Single User

        User AddUser(User user); //Add user to the database

        void DeleteUser(User user); // Delete the user.

        User EditUser(User user); //Edit the user data.
        IEnumerable<User> GetUserbyUserName(string username);


    }
}