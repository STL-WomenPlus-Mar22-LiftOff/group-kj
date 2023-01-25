using LiftOff_Project.Models;
using Microsoft.EntityFrameworkCore;

namespace LiftOff_Project.Data
{


    public class MockUserData : IUserData
    {
        private readonly NWDbContext _context;
        public MockUserData(NWDbContext context)
        {
            _context = context;
        }
        public User AddUser(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
            return user;
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

            //This is pulling the data from the database.
            return _context.Users.ToList();
            
            //return users;
        }

        public IEnumerable<WatchList> GetWatchListByUserId(int userid)
        {
           List<WatchList> MyWatchList =_context.WatchLists
                .Where(js => js.UserId == userid)
                .ToList();

            return MyWatchList;

            /*List<WatchListMovieId> MyWatchList = _context.WatchListMovieId
                .Where(js => js.WatchListId == userid)
                .Include(js => js.Movie)
                
                .ToList();
            return MyWatchList;*/

           

        }
        
    }
}
