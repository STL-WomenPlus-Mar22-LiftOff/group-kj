using LiftOff_Project.Models;

namespace LiftOff_Project.Data
{


    public class UserData : IUserData
    {
        private readonly NWDbContext _context;
        public UserData(NWDbContext context)
        {
            _context = context;
        }
        public User AddUser(User user)
        {
            throw new NotImplementedException();
        }

        public void DeleteUser(User user)
        {
            throw new NotImplementedException();
        }

        public User EditUser(User user)
        {
            throw new NotImplementedException();
        }

        public User GetUser(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<User> GetUserbyUserName(string username)
        {

            //This is pulling the data from the database.
            IEnumerable<User> User = _context.Users
                  .Where(js => js.UserName == username)
                  .ToList();
            return User;
            //return users;
        }

        public List<User> GetUsers()
        {

            //This is pulling the data from the database.
            return _context.Users.ToList();
            //return users;
        }
    }
}