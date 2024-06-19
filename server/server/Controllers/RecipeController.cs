using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class RecipeController : ControllerBase
    {


        public static List<Recipe> recipes = new List<Recipe>()
        {
            new Recipe() { Id=1,CategoryId=2,RecipeName="birthday cake",UserId=1234,preparationTime=2,LevelDifficulty=5,DateAdded=DateTime.Now,
                ListComponent=new List<string>(){ "sugar","salt","flour"},
                preparationMethod=new List<string>(){"open the cupbourd","take the sugar","put in the pot"},
                Picture="https://ilovecupcakes.co.il/wp-content/uploads/2019/01/bday-cake.png"
            },
             new Recipe(){ Id=2,CategoryId=3,RecipeName="chokolate",UserId=1234,preparationTime=6,LevelDifficulty=2,DateAdded=DateTime.Now,
                ListComponent=new List<string>(){ "sugar","salt","flour"},
                preparationMethod=new List<string>(){"open the cupbourd","take the sugar","put in the pot"},
                Picture="https://www.10dakot.co.il/wp-content/uploads/2013/10/20131016_130937.jpg"
            }
        };

        private readonly ILogger<UserController> _logger;

        public RecipeController(ILogger<UserController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public List<Recipe> Get()
        {
            return recipes;
        }

        [HttpGet("{id}")]
        public Recipe Get(int id)
        {
            var recipe = recipes.Find(x => x.Id == id);
            if (recipe != null)
                return recipe;
            return null;
        }
        [HttpGet("categories")]
        public List<int> GetCategories()
        {
            List<int> categories = new List<int>();
            foreach (var recipe in recipes)
            {
                categories.Add(recipe.CategoryId);
            }
            return categories;
        }

        [HttpPost]
        public bool Post([FromBody] Recipe value)
        {
            recipes.Add(value);
            return true;
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Recipe value)
        {
            var recipe = recipes.Find(x => x.Id == id);
            if (recipe != null)
            {
                recipe.Id = value.Id;
                recipe.LevelDifficulty = value.LevelDifficulty;
                recipe.Picture= value.Picture;
                recipe.preparationMethod = value.preparationMethod;
                recipe.DateAdded = value.DateAdded;
                recipe.CategoryId = value.CategoryId;
                recipe.UserId = value.UserId;
                recipe.ListComponent = value.ListComponent;
                recipe.RecipeName = value.RecipeName;
                recipe.preparationTime = value.preparationTime;
                
            }
        }
 
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var user = recipes.Find(x => x.Id == id);
            if (user != null)
                recipes.Remove(user);
        }
    }
}
