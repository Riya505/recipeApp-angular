import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addrecipe',
  templateUrl: './addrecipe.component.html',
  styleUrls: ['./addrecipe.component.css']
})
export class AddrecipeComponent implements OnInit {

  constructor() { }

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
  }

  ngOnInit(): void {
  }

}
