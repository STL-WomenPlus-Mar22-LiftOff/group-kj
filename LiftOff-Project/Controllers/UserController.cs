using LiftOff_Project.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LiftOff_Project.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private IUserData _userData;
        public UserController(IUserData userdata)
        {
            _userData = userdata;
        }

        
        [HttpGet]
        public IActionResult GetUsers()
        {
            return Ok(_userData.GetUsers().ToArray());
        }
    }
}
