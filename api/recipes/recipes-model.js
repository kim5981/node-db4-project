function getRecipeById(recipe_id){
    return Promise.resolve(`delicious recipe from recipe at id: ${recipe_id}`)
}

module.exports = {
    getRecipeById
}