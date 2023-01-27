
using LiftOff_Project.Data;
using LiftOff_Project.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace LiftOff_Project.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class WatchListController : ControllerBase
    {
        private readonly NWDbContext _watchListContext;
        public WatchListController(NWDbContext watchListdata)
        {
            _watchListContext = watchListdata;
        }


        [HttpGet("/watchlist")]
        public async Task<ActionResult<IEnumerable<WatchList>>> GetWatchList()
        {
            if (_watchListContext.WatchLists == null)
            {
                return NotFound();
            }
            return await _watchListContext.WatchLists.ToListAsync();

        }

        //get the user in perticular id
        [HttpGet("{id}")]
        public async Task<ActionResult<WatchList>> GetWatchList(int id)
        {
            if (_watchListContext.WatchLists == null)
            {
                return NotFound();
            }
            var list = await _watchListContext.WatchLists.FindAsync(id);
            if (list == null)
            {
                return NotFound();
            }
            return list;
        }

 

        [HttpPost]

        public async Task<ActionResult<WatchList>> PostWatchList(WatchList list)
        {
            //var user = _userData.GetUser(id);

            //return Ok(user);
            _watchListContext.WatchLists.Add(list);
            //_userContext.SaveChanges();
            await _watchListContext.SaveChangesAsync();
            return Ok();
            //   return CreatedAtAction(nameof(GetUsers), new { id = user.Id }, user);

        }
    /*
        [HttpPut("{ID}")]
        public async Task<ActionResult> PutUser(int id, User user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }
            _watchListContext.Entry(user).State = EntityState.Modified;
            try
            {
                await _watchListContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }
            return Ok();

        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteUser(int id)
        {
            if (_watchListContext.Users == null)
            {
                return NotFound();
            }
            //var user = await _userContext.Users.FindAsync(id);
            var user = await _watchListContext.Users.FindAsync(id);
            {
                if (user == null)
                {
                    return NotFound();
                }
                _watchListContext.Users.Remove(user);
                await _watchListContext.SaveChangesAsync();
                return Ok();
            }
        }

        */
    }
}
