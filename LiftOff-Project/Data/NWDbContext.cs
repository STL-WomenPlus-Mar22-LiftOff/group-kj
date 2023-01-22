using LiftOff_Project.Models;
using Microsoft.EntityFrameworkCore;

namespace LiftOff_Project.Data
{
    public class NWDbContext : DbContext
    {

        //Primary models - Movies may be defunct post-API

        //These are all the tables in our database.
        public DbSet<User> Users { get; set; } // User table 
        public DbSet<WatchList> WatchLists { get; set; } //Watch list which has one to one relationship withe user table
        public DbSet<Movie> Movie { get; set; } // Add entry to the table when user adds to the watchlist. many to many relationship wiht watchlistmovieid table
        public DbSet<WatchListMovieId> WatchListMovieId { get; set; } // Add entry to the watchlist table when the user is adding to the watchlist this has many to many relationship with the watchlistmovieid and movie tables.

        //Testing Models will be defunct post-API
//        public DbSet<MyWatchListModel> MyWatchListModels { get; set; }
  //      public DbSet<TestingModel> TestingModels { get; set; }
        public NWDbContext(DbContextOptions<NWDbContext> options) : base(options)
        {

        }

        //This method is for the compound primary key. This is the place to put the configuration information about the models/tables
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<WatchListMovieId>()
                .HasKey(j => new { j.MovieId, j.WatchListId });
        }

    }
}
