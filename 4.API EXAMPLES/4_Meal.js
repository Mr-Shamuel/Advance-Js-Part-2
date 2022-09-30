


const handleSearch = () => {
    
    const searchInput = document.getElementById('input_text');
    const inputText = searchInput.value;
    if(inputText == '') {
      swal("Error!", "Please emter a name!", "error");
    }else if(searchInput.value == null){
      alert("fdjkfdjdlk")
    }
    else{
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`

    fetch(url)
        .then(res => res.json())
        .then(data => displayResult(data.meals))
    
    }
    searchInput.value = '';
}

const displayResult = (meals) => {
  console.log( meals[0]);
  const foodContainer = document.getElementById('foods');
  //clear previous results
  foodContainer.innerHTML  = '';
  // foodContainer.textContent = '';
  const singleFood = document.getElementById('foodsDetails');
  singleFood.innerHTML  = '';
 
  const foodContainers = document.getElementById('foods2');
  foodContainers.innerHTML = '';
    if(meals ==null){
      console.log("dkfjk")
    }
     
    meals.map(meal => {
        const div = document.createElement('div');
  //  console.log(meal)
        div.innerHTML = ` <div class="card m-2 my-3 " style="width: 18rem;">
      <div>
      <img class="card-img-top" src=${meal.strMealThumb} alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <hp class="card-text text-muted">${meal.strInstructions.slice(0,58)}</hp>
      
        
        <button onclick="handleDeatils('${meal.idMeal}')" class="btn btn-primary m-2 w-100  text-center ">View Details</button>
        
      </div>
      </div>
      </div>`;
        foodContainer.appendChild(div);

    })

  }
    
const handleDeatils=(id) => {
  const url=(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  fetch(url)
  .then((response) => response.json())
  .then(data=>SingleMeal(data.meals[0]))

}
const SingleMeal =(meal)=>{
  console.log(meal);
  const foodContainer = document.getElementById('foods');
  //clear previous results

  const singleFood = document.getElementById('foodsDetails');
  // singleFood.innerHTML  = '';

 
 
  singleFood.innerHTML = `
  <div class="card" style="width: 18rem;">
  <div class="card-header text-danger">
   Measures
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${meal.strMeasure1}</li>
    <li class="list-group-item">${meal.strMeasure2}</li>
    <li class="list-group-item">${meal.strMeasure3}</li>
    <li class="list-group-item">${meal.strMeasure4}</li>
    <li class="list-group-item">${meal.strMeasure5}</li>
    <li class="list-group-item">${meal.strMeasure6}</li>
    <li class="list-group-item">${meal.strMeasure7}</li>
    <li class="list-group-item">${meal.strMeasure8}</li>
 
   
  </ul>
</div>





  <div class="card m-2 my-3" style="width: 20rem;">
      <div>
      <img class="card-img-top " src=${meal.strMealThumb} alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title text-warning text-center">${meal.strMeal}</h5>
        <hp class="card-text text-muted">${meal.strInstructions.slice(0,100)}</hp>
        <div>
        <a href=${meal.strYoutube} class="btn btn-primary m-2 w-100  text-center " target="_blank" role="button" >See Video</a>    
        </div>
      </div>
      </div>
      </div>




      <div class="card" style="width: 18rem;">
  <div class="card-header text-danger">
   Ingredient
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${meal.strIngredient1}</li>
    <li class="list-group-item">${meal.strIngredient2}</li>
    <li class="list-group-item">${meal.strIngredient3}</li>
    <li class="list-group-item">${meal.strIngredient4}</li>
    <li class="list-group-item">${meal.strIngredient5}</li>
    <li class="list-group-item">${meal.strIngredient6}</li>
    <li class="list-group-item">${meal.strIngredient7}</li>
    <li class="list-group-item">${meal.strIngredient8}</li>

   
  </ul>
</div>
  
  `;


}






const showMeal = () => {
    
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=`
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => {
 const meals =data.meals;
 console.log(meals) 

            const foodContainer = document.getElementById('foods2');
           
            meals.map(meal => {
              console.log(meal.strMeal)
                const div = document.createElement('div');
                div.innerHTML = `<div class="card m-2 my-3 " style="width: 18rem;">
                <div>
                <img class="card-img-top" src=${meal.strMealThumb} alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${meal.strMeal}</h5>
                  <hp class="card-text text-muted">${meal.strInstructions.slice(0,58)}</hp>
                
                 <button onclick="handleDeatils('${meal.idMeal}')" class="btn btn-primary m-2 w-100  text-center ">View Details</button>
                </div>
                </div>
                </div>`;
                foodContainer.appendChild(div);
        
            })

            

        })
    
}

showMeal();