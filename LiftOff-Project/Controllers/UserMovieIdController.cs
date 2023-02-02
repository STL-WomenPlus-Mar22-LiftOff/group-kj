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
        public async Task<ActionResult<IEnumerable<UserMovieId>>> GetUserMovieIds()
        {
            if (_userMovieIdContext.UserMovies == null)
            {
                return NotFound();
            }

            return await _userMovieIdContext.UserMovies
                //.Where(x => x.UserId == userId)
                .ToListAsync();
        }

        [HttpGet("{userid}")]
        public async Task<List<UserMovieId>> GetUserMovieIdsByUserId(int userid)
        {
            //if (_userMovieIdContext.UserMovies == null)
            //{
            // //   return NotFound();
            //}
            List<UserMovieId> myMovieIds = new List<UserMovieId>();

            List<UserMovieId> myMovieResponse = await _userMovieIdContext.UserMovies
                .ToAsyncEnumerable()
                .Where(x => x.UserId == userid)
                .ToListAsync();
 
            foreach (var movie in myMovieResponse)
            {
                if (movie.UserId == userid)
                {
                    myMovieIds.Add(movie);
                }
            }

            return myMovieResponse;
        }
            
        
    }
}
