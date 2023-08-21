using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _context;

        public UserRepository(DataContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<AppUser>> GetAllUsersAsync()
        {
            var users = await _context.AppUsers.ToListAsync();
            return users;
        }

        public async Task<AppUser?> GetUserById(int id)
        {
            var user = await _context.AppUsers.SingleOrDefaultAsync(x => x.Id == id);
            return user ?? null;
        }
    }
}