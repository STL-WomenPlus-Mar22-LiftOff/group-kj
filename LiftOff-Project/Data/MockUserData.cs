using LiftOff_Project.Models;

namespace LiftOff_Project.Data
{
    

    public class MockUserData : IUserData
    {
        private readonly NWDbContext _context;
        public MockUserData(NWDbContext context)
        {
            _context = context;
        }
        //create new user
        /*public User Create(User user)
        {
            _context.Users.Add(user);
           user.Id = _context.SaveChanges();
            return user;
        }*/
        public User AddUser(User user)
        {
            _context.Users.Add(user);
           user.Id = _context.SaveChanges();
            return user;
        }

        public User Create(User user)
        {
            throw new NotImplementedException();
        }

        /*public User AddUser(User user)
        {
        throw new NotImplementedException();
        }*/

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
        public User GetUser(string email)
        {
            throw new NotImplementedException();
        }
        public List<User> GetUsers()
        {

            //This is pulling the data from the database.
            return _context.Users.ToList();
            //return users;
        }
    }
}
