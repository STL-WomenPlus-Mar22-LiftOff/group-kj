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
        private IUserData _userData;

        public LogInController(IUserData userdata)
        {
            _userData = userdata;
        }


        [HttpGet("{UserId:int}")]
        public IActionResult GetUsers(int userid)
        {

            //This is pulling the data from the database.
            return Ok(_userData.GetUserbyID(userid));
            //return users;
        }
    }
}
