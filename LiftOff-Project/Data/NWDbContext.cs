using LiftOff_Project.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace LiftOff_Project.Data
{
    public class NWDbContext : DbContext
    {

        //Primary models - Movies may be defunct post-API

        //These are all the tables in our database.
        public DbSet<User> Users { get; set; }

        //Testing Models will be defunct post-API
        public DbSet<MyWatchListModel> MyWatchListModels { get; set; }


        public DbSet<UserMovieId> UserMovies { get; set; }
        public NWDbContext(DbContextOptions<NWDbContext> options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<UserMovieId>()
                .HasKey(j => new { j.UserId, j.APIMovieId });
        }

    }
}
