using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [AllowAnonymous]
    public class BuggyController : BaseApiController
    {
        private readonly DataContext _context;

        public BuggyController(DataContext context)
        {
            _context = context;
        }

        [HttpGet("bad-request")]
        public ActionResult<string> GetBadRequest()
        {
            return BadRequest("It is bad request");
        }


        [HttpGet("auth")]
        [Authorize]
        public ActionResult<string> GetUnauthorized()
        {
            return Unauthorized("You need to login before accessing this resource");
        }

        [HttpGet("not-found")]
        public ActionResult<AppUser> GetNotFound()
        {
            var user = _context.AppUsers.Find(-1);
            if(user == null) {
                return NotFound();
                //return StatusCode(StatusCodes.Status404NotFound, "Requested resource is not found");
            }
            return user;
        }

        [HttpGet("server-error")]
        public ActionResult<string> GetServerError()
        {
            var user = _context.AppUsers.Find(-1).ToString();
            return user;
        }
    }
}
