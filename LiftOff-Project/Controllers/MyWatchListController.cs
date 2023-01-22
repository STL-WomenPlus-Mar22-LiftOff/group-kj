using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using LiftOff_Project.Models;
using LiftOff_Project.Data;

namespace LiftOff_Project.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class MyWatchListController : ControllerBase
    {
        
        private IUserData _userData;
        public MyWatchListController(IUserData userdata)
        {
            _userData = userdata;
        }


        //[HttpGet]
        //public IActionResult GetUsers()
        //{
        //    return Ok(_userData.GetUsers().ToArray());
        //}


        [HttpGet("{UserId:int}")]

        public IActionResult GetWatchListByUserId(int userId)
        {
            return Ok(_userData.GetWatchListByUserId(userId));
        }
    }
}

/* private static readonly IEnumerable<MyWatchListModel> Items = new[]
{
     new MyWatchListModel{Id = 1 ,Title ="The GodFather"  ,Provider = "Disney", Rated =1 },
     new MyWatchListModel{Id = 2 ,Title ="The Highlander"  ,Provider = "HotStar",Rated = 1 },
     new MyWatchListModel{Id = 3 ,Title ="Highlander 2"  ,Provider = "Disney",Rated = 1 },
     new MyWatchListModel{Id = 4 ,Title ="The Last of Mohicans"  ,Provider = "Disney",Rated = 1 },
     new MyWatchListModel{Id = 5 ,Title ="Police academy 6"  ,Provider = "Hulu",Rated = 1 },
     new MyWatchListModel{Id = 6 ,Title ="Rear Window"  ,Provider = "Hulu",Rated = 1 },
     new MyWatchListModel{Id = 7 ,Title ="Road House"  ,Provider = "NetFlix",Rated = 1 },
     new MyWatchListModel{Id = 8 ,Title ="The Shawshank Redemption"  ,Provider = "NetFlix",Rated = 1 },
     new MyWatchListModel{Id = 9 ,Title ="Star Treck 4"  ,Provider = "Hulu",Rated = 1 },
     new MyWatchListModel{Id = 10 ,Title ="The Last of Mohicans"  ,Provider = "HotStar",Rated = 1 }
 };

 [HttpGet("{Rated:int}")]
 public MyWatchListModel[] Get(int rated)
 {

     MyWatchListModel[] items = Items.Where(i => i.Rated == rated).ToArray();
     Console.Write(items);
     System.Threading.Thread.Sleep(2000);
     return items;
 }
}
}*/
