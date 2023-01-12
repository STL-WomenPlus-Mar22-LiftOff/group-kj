using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace LiftOff_Project.Models
{
    public class User : IdentityDbContext<IdentityUser>
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        //Will have auth in future, simple user exists for testing the User - WatchList hookup
        //public string Password { get; set; }

        [Required(ErrorMessage = "enter your email")]
        [EmailAddress(ErrorMessage = "pls entr ur valid email")]
        [Display(Name = "email address")]
        public string Email { get; set; }


        [Required(ErrorMessage = "enter your pass")]
        [Compare("ConfirmPassword", ErrorMessage = "pass dsnt match")]
        [Display(Name = "Password")]
        [DataType(DataType.Password)]
        public string Password { get; set; }


        [Required(ErrorMessage = "Confirm ur Password ")]
        [Display(Name = "Confirm Password")]
        [DataType(DataType.Password)]
        public string ConfirmPassword { get; set; }

        public WatchList WatchList { get; set; }
        
        public User (int id, string userName, string password, WatchList watchList, int watchListId)
        {
            Id = id;
            UserName = userName;
            Password = password;
            WatchList = watchList;
        }

        public User () { }

        public override bool Equals(object? obj)
        {
            return obj is User user &&
                   Id == user.Id;
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Id);
        }
    }
}
