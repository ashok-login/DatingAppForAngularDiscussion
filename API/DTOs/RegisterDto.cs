using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class RegisterDto
    {
        public string Username { get; set; } = default!;
        public string PasswordHash { get; set; } = default!;
    }
}