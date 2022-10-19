import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addrecipe',
  templateUrl: './addrecipe.component.html',
  styleUrls: ['./addrecipe.component.css']
})
export class AddrecipeComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  recipeTitle=""
  description=""
  preparedBy=""
  category=""
  postedDate=""

  readValue=()=>{
    let data={
      "recipeTitle":this.recipeTitle,
      "description":this.description,
      "preparedBy":this.preparedBy,
      "category":this.category,
      "postedDate":this.postedDate
    }
    console.log(data)
    this.myapi.addRecipes(data).subscribe(
      (response)=>{
        console.log(response)
        alert("added")
      }
    )
  }

  ngOnInit(): void {
  }

}
