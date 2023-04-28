import { Component } from '@angular/core';
@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent {
    rate : number = 2;
    selectedOption: string | undefined;
    ngOnInit(): void{
      const ratingItemsList = document.querySelectorAll('.rating_item');
      const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);
      ratingItemsArray.forEach(item => item.parentNode.dataset.totalValue = this.rate)
      // alert(this.selectedOption)
      // const selectElement = document.getElementById('select') as HTMLSelectElement;
      // this.selectedOption = selectElement.value;
    }
    changeRate(rate:number){
        this.rate = rate;
        // alert(this.rate)
        const ratingItemsList = document.querySelectorAll('.rating_item');
        const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);
        ratingItemsArray.forEach(item => item.parentNode.dataset.totalValue = this.rate)
        // for(let i = 1; i <= this.rate; i++){
        //   ratingItemsArray[i]
        // }
    }
    saveOption(){
      const selectElement = document.getElementById('select') as HTMLSelectElement;
      this.selectedOption = selectElement.value;
    }
}
