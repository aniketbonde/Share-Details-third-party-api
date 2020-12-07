import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShareDetailsCallService } from "../../services/share-details-call.service";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-share-option',
  templateUrl: './share-option.component.html',
  styleUrls: ['./share-option.component.css']
})
export class ShareOptionComponent implements OnInit {

  dataSource: Observable<any>;
  displayedColumns: string[] = ['open', 'symbol', 'date'];

  constructor(private shareDetailsService : ShareDetailsCallService) { }

  ngOnInit(): void {
  }

  assignComponent(component) {
    console.log('inside assignComponent...'+component);
    this.shareDetailsService.getShareDetails(component).subscribe((resp) => {
      if (resp) {
        this.dataSource = resp;
      }
    });
  }

}
