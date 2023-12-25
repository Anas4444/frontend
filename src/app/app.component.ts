import { Component } from '@angular/core';
import { ItemserviceService } from './itemservice.service';
import { ProjectserviceService } from './projectservice.service';
import { item, daterange, project, journey } from 'src/constants/api_template';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'jcibardo-app';
  item_data: any
  project_data: any
  constructor(private _itemservice:ItemserviceService, private _projectservice:ProjectserviceService) {}

  ngOnInit(): void {
    this._itemservice.get_items().subscribe(res=>{
      this.item_data=res;
    });
    this._projectservice.get_projects().subscribe(res=>{
      this.project_data=res;
    });
  }
}

