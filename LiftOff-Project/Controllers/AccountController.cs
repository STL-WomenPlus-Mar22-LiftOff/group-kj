using Microsoft.AspNetCore.Mvc;

namespace LiftOff_Project.Controllers
{
    public class AccountController : Controller
    {
        [Route("signup")]
        public IActionResult SignUp()
        {
            return View();
        }
    }
}
