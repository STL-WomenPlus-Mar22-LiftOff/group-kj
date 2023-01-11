using Microsoft.EntityFrameworkCore;

namespace LiftOff_Project.Data
{
    public class NWDbContext : DbContext
    {

        public NWDbContext(DbContextOptions <NWDbContext> options) : base(options)
        {

        }
    }
}
