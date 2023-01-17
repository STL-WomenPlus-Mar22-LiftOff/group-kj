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
        private  MovieData _movieData;
        public ValuesController(MovieData movieData)
        {
            _movieData = movieData;
        }
        [HttpGet]

        [HttpGet]
        public IActionResult GetMovie()
        {
            return Ok(_movieData.GetMovies().ToArray());
        }

        [HttpPost]

        public IActionResult GetMovie(int id)
        {
            var movie = _movieData.GetMovie(id);

            return Ok(movie);


        }
    }
}
