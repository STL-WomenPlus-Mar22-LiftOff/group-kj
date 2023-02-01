using LiftOff_Project.Models;
using Microsoft.EntityFrameworkCore;

namespace LiftOff_Project.Data
{
    public class UserMovieData : IUserMovieData
    {
        private readonly NWDbContext _context;
        public UserMovieData(NWDbContext context)
        {
            _context = context;
        }
        
        public List<UserMovieId> GetUserMovieIds()
        {
            throw new NotImplementedException();
        }

        public UserMovieId GetUserMovieId(int id)
        {
            throw new NotImplementedException();
        }

        public User AddUserMovieId(UserMovieId userMovieId)
        {
            throw new NotImplementedException();
        }

        public void DeleteUserMovieId(UserMovieId userMovieId)
        {
            throw new NotImplementedException();
        }

        public User EditUserMovieId(UserMovieId userMovieId)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<UserMovieId> GetUserMovieIdByUserId(int userId)
        {
            IEnumerable<UserMovieId> userMovieIds = _context.UserMovies
                .Where(x => x.UserId == userId)
                .ToList();
            return userMovieIds;
        }
    }
}
