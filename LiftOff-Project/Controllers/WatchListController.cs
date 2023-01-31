using LiftOff_Project.Data;
using LiftOff_Project.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LiftOff_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WatchListController : ControllerBase
    {
        private readonly NWDbContext _watchListContext;
        public WatchListController(NWDbContext watchListContext)
        {
            _watchListContext = watchListContext;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<WatchList>>> GetWatchList()
        {
            if (_watchListContext.WatchLists == null)
            {
                return NotFound();
            }
            return await _watchListContext.WatchLists.ToListAsync();

        }

        [HttpGet("{id}")]
        public async Task<ActionResult<WatchList>> GetUsers(int id)
        {
            if (_watchListContext.WatchLists == null)
            {
                return NotFound();
            }
            var watchlist = await _watchListContext.WatchLists.FindAsync(id);
            if (watchlist == null)
            {
                return NotFound();
            }
            return watchlist;
        }

        [HttpPost]
        public async Task<ActionResult<WatchList>> PostWatchList(WatchList watchlist)
        {
            
            _watchListContext.WatchLists.Add(watchlist);
            await _watchListContext.SaveChangesAsync();
            return Ok();
        }
    }
}
