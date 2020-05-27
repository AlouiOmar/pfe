import {Component, OnInit, ViewChild} from '@angular/core';
import {DxDataGridComponent} from 'devextreme-angular';
import {Location} from '@angular/common';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {


  @ViewChild('clientGrid') clientGrid: DxDataGridComponent;


  constructor(private authService: AuthService) {
    this.getPosts();
  }
  dataSource: any[];
  ngOnInit() {




  }


  getPosts() {
    this.authService.allUser().subscribe(data => {
      this.dataSource = data;
      console.log(data);
    });

  }


}
