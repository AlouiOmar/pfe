import { LampeService } from 'src/app/services/lampe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listlampe',
  templateUrl: './listlampe.component.html',
  styleUrls: ['./listlampe.component.css']
})
export class ListlampeComponent implements OnInit {

  constructor(private lampeService: LampeService) {
    this.getPosts();
     }

   lampeList: any[];
    ngOnInit() {




    }
    getPosts() {
      this.lampeService.getDataSource().subscribe(data => {
        this.lampeList = data;
        console.log(data);
      });

    }
}
