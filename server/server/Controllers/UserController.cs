using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        public static List<User> users = new List<User>()
        {
            new User() { Id = 111111111,Address="Ramchal",Mail="2434@fsd",Name="Miriam",Password="1234"},
            new User() { Id = 222222222,Address="Rabi Akiva",Mail="2434@fsd",Name="Ester",Password="654"},
            new User() { Id = 333333333,Address="Rashi",Mail="121@fsd",Name="Reuvan",Password="47888"},
            new User() { Id =444444444,Address="Lando",Mail="789@fsd",Name="Zipi",Password="4848"},
        };

        private readonly ILogger<UserController> _logger;

        public UserController(ILogger<UserController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public List<User> Get()
        {
            return users;
        }

        [HttpGet("{name}")]
        public User Get(string name)
        {
            var user = users.Find(x => x.Name == name);
            if (user != null)
                return user;
            return null;
        }

        [HttpPost]
        public bool Post([FromBody] User value)
        {
            users.Add(value);
            return true;
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] User value)
        {
            var user = users.Find(x => x.Id == id);
            if (user != null)
            {
                user.Mail = value.Mail;
                user.Address = value.Address;
                user.Name = value.Name;
                user.Password = value.Password;
            }
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var user = users.Find(x => x.Id == id);
            if (user != null)
                users.Remove(user);
        }

    }
}