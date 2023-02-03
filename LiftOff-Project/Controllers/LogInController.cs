using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using LiftOff_Project.Data;
using LiftOff_Project.Models;

namespace LiftOff_Project.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class LogInController : ControllerBase
    {
        private readonly NWDbContext _userContext;

        public LogInController(NWDbContext userdata)
        {
            _userContext = userdata;
        }

        [HttpGet]
        public IEnumerable<User> GetUsers()
        {


            IEnumerable<User> User = _userContext.Users                
                  .ToList();
            return User;
        }

        [HttpGet("{userid}")]
        public IEnumerable<User> GetUsers(string userid)
        {

            IEnumerable<User> User = _userContext.Users
                  .Where(js => js.Email == userid)
                  .ToList();
            return User;
        }
    }
}
