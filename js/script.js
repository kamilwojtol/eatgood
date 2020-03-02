const btn = document.querySelector(".btn");

// Add event listeners
btn.addEventListener("click", randomMeal());

function randomMeal() {
  const recipe = [
    {
      name: "Mexican bean soup with guacamole",
      image: "img/meal-1.jpg",
      prep: "30 minutes",
      diff: "easy",
      about:
        "This warming, spiced vegetarian soup packs in goodness and is filling too. The quick-to-assemble guacamole topping tastes as good as it looks",
      recipe:
        "Heat the oil in a medium pan, add the onion (reserving 1 tbsp to make the guacamole later) and pepper and fry, stirring frequently, for 10 mins. Stir in the garlic and spices, then tip in the tomatoes and beans with their liquid, half a can of water and the bouillon powder. Simmer, covered, for 15 mins. Meanwhile, peel and de-stone the avocado and tip into a bowl, add the remaining onion, coriander and lime juice with a little chilli (if using) and mash well. Ladle the soup into two bowls, top with the guacamole and serve."
    },
    {
      name: "Poached eggs with smashed avocado & tomatoes",
      image: "img/meal-2.jpg",
      prep: "20 minutes",
      diff: "easy",
      about:
        "Keep yourself full until lunchtime with this healthy breakfast boost. Delicious avocado serves as a butter alternative and goes well with a runny poached egg",
      recipe:
        "Heat a non-stick frying pan, very lightly brush the cut surface of the tomatoes with a little oil, then cook them, cut-side down, in the pan until they have softened and slightly caramelised. Meanwhile, heat a pan of water, carefully break in the eggs and leave to poach for 1-2 mins until the whites are firm but the yolks are still runny. Halve and stone the avocado, then scoop out the flesh and smash onto the bread. Add the eggs, grind over black pepper and add a handful of rocket to each portion. Serve the tomatoes on the side."
    },
    {
      name: "Spinach, sweet potato & lentil dhal",
      image: "img/meal-3.jpg",
      prep: "45 minutes",
      diff: "easy",
      about:
        "A comforting vegan one-pot recipe that counts for 3 of your 5-a-day! You can't go wrong with this iron-rich, low-fat, low-calorie supper",
      recipe:
        "Heat 1 tbsp sesame oil in a wide-based pan with a tight-fitting lid. Add 1 finely chopped red onion and cook over a low heat for 10 mins, stirring occasionally, until softened. Add 1 crushed garlic clove, a finely chopped thumb-sized piece of ginger and 1 finely chopped red chilli, cook for 1 min, then add 1 ½ tsp ground turmeric and 1 ½ tsp ground cumin and cook for 1 min more. Turn up the heat to medium, add 2 sweet potatoes, cut into even chunks, and stir everything together so the potato is coated in the spice mixture. Tip in 250g red split lentils, 600ml vegetable stock and some seasoning. Bring the liquid to the boil, then reduce the heat, cover and cook for 20 mins until the lentils are tender and the potato is just holding its shape. Taste and adjust the seasoning, then gently stir in the 80g spinach. Once wilted, top with the 4 diagonally sliced spring onions and ½ small pack torn basil leaves to serve. Alternatively, allow to cool completely, then divide between airtight containers and store in the fridge for a healthy lunchbox."
    }
  ];

  console.log(recipe[2]);
}
