export default class Recipe {
    constructor(
        id,
        name,
        description,
        ingredients,
        totalTime,
        cookTime,
        steps,
        image,
        creator,
        level,
        serving,
        like,
        createdAt,
        updatedAt
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.ingredients = ingredients;
        this.steps = steps;
        this.image = image;
        this.creator = creator;
        this.cookTime = cookTime;
        this.totalTime = totalTime;
        this.like = like;
        this.createdAt = createdAt;
        this.level = level;
        this.serving = serving;
        this.updatedAt = updatedAt;
    }

    static fromJson(json, creatorRef = null) {
        var creator = json.creator;
        if (creatorRef) {
            creator = creatorRef;
        }
        else {
            creator = json.creator._path.segments.join('/');
        }

        return new Recipe(
            json.id,
            json.name,
            json.description,
            json.ingredients,
            json.totalTime,
            json.cookTime,
            json.steps,
            json.image,
            creator,
            json.level,
            json.serving,
            json.like,
            json.createdAt,
            json.updatedAt
        );
    }
}