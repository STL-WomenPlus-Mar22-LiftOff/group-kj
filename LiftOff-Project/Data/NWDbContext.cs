using LiftOff_Project.Models;
using Microsoft.EntityFrameworkCore;

namespace LiftOff_Project.Data
{
    public class NWDbContext : DbContext
    {

        //Primary models - Movies may be defunct post-API
        public DbSet<User> Users { get; set; }
        public DbSet<WatchList> WatchLists { get; set; }
        public DbSet<Movie> Movies { get; set; }
        public DbSet<WatchListMovieId> WatchListMovies { get; set; }

        //Testing Models will be defunct post-API
        public DbSet<MyWatchListModel> MyWatchListModels { get; set; }
        public DbSet<TestingModel> TestingModels { get; set; }
        public NWDbContext(DbContextOptions<NWDbContext> options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<WatchListMovieId>()
                .HasKey(j => new { j.MovieId, j.WatchListId });
        }

    }
}
