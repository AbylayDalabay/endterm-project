import { Component } from '@angular/core';
import { books } from '../models/book';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-info-book',
  templateUrl: './info-book.component.html',
  styleUrls: ['./info-book.component.css']
})
export class InfoBookComponent {
    check = false;
    id : number | undefined;
    listbook = books;
    fullDes = this.listbook[0].description;
    // myButton: HTMLElement;
    constructor(private route: ActivatedRoute){
    //   this.myButton = document.getElementById('show')!;
    //   this.myButton.onclick = this.handleClick.bind(this);
    }
    // private handleClick() {
    //   console.log('Button clicked!');
    //   // здесь можно добавить ваш код обработки события
    // }
    ngOnInit(): void{
      this.id = Number(this.route.snapshot.paramMap.get('id'));
      if (this.listbook[0].description.length >= 328){
        this.changeDes();
          // alert(this.listbook[0].description.length);
        this.check = true;
      }
      // this.vacancyService.getVacanciesCompanies(this.id).subscribe((vacancies) => this.vacancies = vacancies);
    }
    changeDes(){
      if (this.check == true){
        this.listbook[0].description = this.fullDes
        
      }
      else{
        this.listbook[0].description = this.listbook[0].description.substring(0,328)
        let words = this.listbook[0].description.split(' ');
        words.pop()
        this.listbook[0].description = words.join(" ");
      }
      this.check = !this.check
    }
}
