using LiftOff_Project.Data;
using LiftOff_Project.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LiftOff_Project.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class WatchListController : ControllerBase
    {
        private readonly NWDbContext _watchListContext;
        public WatchListController(NWDbContext watchListContext)
        {
            _watchListContext = watchListContext;
        }

        [HttpPost]
        public async Task<ActionResult<WatchListMovieId>> PostWatchList(WatchListMovieId watchlistmovieid)
        {

            _watchListContext.WatchListMovieId.Add(watchlistmovieid);

            await _watchListContext.SaveChangesAsync();
            return Ok();
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<WatchListMovieId>>> GetWatchList()
        {
            if (_watchListContext.WatchListMovieId == null)
            {
                return NotFound();
            }
            return await _watchListContext.WatchListMovieId.ToListAsync();

        }

        
    }
}