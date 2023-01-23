using LiftOff_Project.Data;
using LiftOff_Project.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LiftOff_Project.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly NWDbContext _userContext;
        public UserController(NWDbContext userdata)
        {
            _userContext = userdata;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            if (_userContext.Users == null)
            {
                return NotFound();
            }
            return await _userContext.Users.ToListAsync();

        }

        //get the user in perticular id
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUsers(int id)
        {
            if (_userContext.Users == null)
            {
                return NotFound();
            }
            var user = await _userContext.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            return user;
        }

        [HttpPost]

        public async Task<ActionResult<User>> PostUser(User user)
        {
            //var user = _userData.GetUser(id);

            //return Ok(user);
            _userContext.Users.Add(user);
            await _userContext.SaveChangesAsync();
            return CreatedAtAction(nameof(GetUsers), new { id = user.Id }, user);

        }

        [HttpPut("{ID}")]
        public async Task<ActionResult> PutUser(int id, User user)
        {
            if(id != user.Id)
            {
                return BadRequest();
            }
            _userContext.Entry(user).State = EntityState.Modified;
            try
            {
                await _userContext.SaveChangesAsync();
            }
            catch(DbUpdateConcurrencyException)
            {
                throw;
            }
            return Ok();

        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteUser(int id)
        {
            if(_userContext.Users == null)
            {
                return NotFound();
            }
            //var user = await _userContext.Users.FindAsync(id);
            var user = await _userContext.Users.FindAsync(id);
            {
                if(user == null)
                {
                    return NotFound();
                }
                _userContext.Users.Remove(user);
                await _userContext.SaveChangesAsync();
                return Ok();
            }
        }

    }
}
