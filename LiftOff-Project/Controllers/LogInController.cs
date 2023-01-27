using LiftOff_Project.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LiftOff_Project.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class LogInController : ControllerBase
    {
        private IUserData _userData;

        public LogInController(IUserData userdata)
        {
            _userData = userdata;
        }


        [HttpGet("{UserName}")]
        public IActionResult GetUsers(string username)
        {

            //This is pulling the data from the database.
            return Ok(_userData.GetUserbyUserName(username));
            //return users;
        }

    }
}
