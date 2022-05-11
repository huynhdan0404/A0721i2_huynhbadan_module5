import { Component, OnInit } from '@angular/core';
import { DictionaryServiceService } from '../service/dictionary-service.service';

@Component({
  selector: 'app-dictonar-detail',
  templateUrl: './dictonar-detail.component.html',
  styleUrls: ['./dictonar-detail.component.css']
})
export class DictonarDetailComponent implements OnInit {

  x:any;
  constructor(private dictionaryServiceService:DictionaryServiceService) { }

  ngOnInit(): void {
  }

  dictionryDetail(word:string){
  }
}
