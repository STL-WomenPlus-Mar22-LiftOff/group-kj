using LiftOff_Project.Models;

namespace LiftOff_Project.Data
{
    

    public class MockUserData : IUserData
    {
        private List<User> users = new List<User>()
        {
            new User()
            {
                Id = 1,
                UserName ="Priyanka"

            } ,
        };
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

        public List<User> GetUsers()
        {
            return users;
        }
    }
}
