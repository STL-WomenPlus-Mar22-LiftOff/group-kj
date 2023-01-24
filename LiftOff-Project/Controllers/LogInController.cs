using LiftOff_Project.Data;
using LiftOff_Project.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LiftOff_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LogInController : ControllerBase
    {
        private readonly NWDbContext _userContext;
        public LogInController(NWDbContext userdata)
        {
            _userContext = userdata;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUser(string  email)
        {
           /* if (_userContext.Users == null)
            {
                return NotFound();
            }
            var user = await _userContext.Users.find(email);
            if (user == null)
            {
                return NotFound();
            }
            return Ok();*/

            List<User> users = _userContext.Users
                .Where(u => u.Email == email)
                .ToList();
            return Ok(users);

        }
    }
}
