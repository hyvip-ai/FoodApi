import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http:HttpClient) { }

  //  client_id = ' 28b670aebfe14c2f9eeee4c056076408'; // Your client id
  //  client_secret = 'd792658a65134f36926479c53abee74c'; // Your secret
  //  redirect_uri = 'http://localhost:4200/callback'; // Your redirect uri
  searchbyingridient(ingridients:string,number:number){
    var searchurl= `https://api.spoonacular.com/recipes/findByIngredients?apiKey=01f0cb67dd234ad982fbcd5f8b65a851&ingredients=${ingridients}&number=${number}` 
    console.log(searchurl)
    return this.http.get(searchurl)
  }
  searchbynutri(pro:any,carbs:any,calo:any,fat:any,num:any){
    var searchurl = `https://api.spoonacular.com/recipes/findByNutrients?apiKey=01f0cb67dd234ad982fbcd5f8b65a851&minCarbs=10&maxCarbs=${carbs}&minProtein=10&maxProtein=${pro}&minFat=1&maxFat=${fat}&minCalories=10&maxCalories=${calo}&number=${num}`
    return this.http.get(searchurl);
  }
getrecipedetails(id:any)
{
  var searchurl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=01f0cb67dd234ad982fbcd5f8b65a851&includeNutrition=true`
  return this.http.get(searchurl);
}

showsimilar(data:any){
  var searchurl = `https://api.spoonacular.com/recipes/autocomplete?apiKey=01f0cb67dd234ad982fbcd5f8b65a851&number=20&query=${data}`
  return this.http.get(searchurl)
}
generaterandom(num:any,cuisunes:any,type:any,diet:any){
  var searchurl=`https://api.spoonacular.com/recipes/random?apiKey=01f0cb67dd234ad982fbcd5f8b65a851&number=${num}&tags=${cuisunes},${type},${diet}`

  return this.http.get(searchurl);
}

findformresturant(name:any,number:any){
  var searchurl = `https://api.spoonacular.com/food/menuItems/search?apiKey=01f0cb67dd234ad982fbcd5f8b65a851&query=${name}&number=${number}`
  return this.http.get(searchurl)
}

}


