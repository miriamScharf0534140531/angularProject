namespace server
{
    public class Recipe
    {
        public int Id { get; set; }
        public string? RecipeName { get; set; }
        public int CategoryId { get; set; }
        public double? preparationTime { get; set; }
        public int? LevelDifficulty { get; set; }
        public DateTime? DateAdded { get; set; }
        public List<string>? ListComponent { get; set; }
        public List<string>? preparationMethod { get; set; }
        public int? UserId { get; set; }
        public string? Picture { get; set; }



    }
}
