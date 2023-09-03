using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Interfaces;
using API.Repositories;
using API.Services;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(
                            this IServiceCollection services, 
                            IConfiguration config)
        {
            services.AddDbContext<DataContext>(options => {
                options.UseSqlite(config.GetConnectionString("DefaultConnectionString"));
            });
            services.AddTransient<IUserRepository, UserRepository>();
            services.AddScoped<ITokenService, TokenService>();
            services.AddCors();
            return services;
        }
    }
}
