using LiftOff_Project.Data;
using LiftOff_Project.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LiftOff_Project.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserMovieIdController : ControllerBase
    {
        private readonly NWDbContext _userMovieIdContext;
        public UserMovieIdController(NWDbContext userMovieIdContext)
        {
            _userMovieIdContext = userMovieIdContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserMovieId>>> GetUserMovieId()
        {
            if (_userMovieIdContext.UserMovies == null)
            {
                return NotFound();
            }
            return await _userMovieIdContext.UserMovies.ToListAsync();

        }
        [HttpGet("{userid}")]
        public IEnumerable<UserMovieId> GetMovieIdForUser(int userid)
        {

            IEnumerable<UserMovieId> UserMovie = _userMovieIdContext.UserMovies
                  .Where(js => js.UserId == userid)
                  .ToList();
            return UserMovie;
        }
        
        [HttpPost]
        public async Task<ActionResult<UserMovieId>> PostUserMovieId(UserMovieId userMovieid)
        {

            _userMovieIdContext.UserMovies.Add(userMovieid);

            await _userMovieIdContext.SaveChangesAsync();
            return Ok();
        }
    }
}
