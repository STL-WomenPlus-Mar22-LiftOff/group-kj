using LiftOff_Project.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LiftOff_Project.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly NWDbContext _dbcontext;
        public ValuesController(NWDbContext dbcontext)
        {
            _dbcontext = dbcontext;
        }
        [HttpGet]
        public async Task<IActionResult>Get()
        {
            var movies = await _dbcontext.Movies.ToListAsync();
            return Ok(movies);

        }
    }
}
