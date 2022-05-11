import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IWord } from '../models/iword';
import { DictionaryServiceService } from '../service/dictionary-service.service';

@Component({
  selector: 'app-dictionay-page-component',
  templateUrl: './dictionay-page-component.component.html',
  styleUrls: ['./dictionay-page-component.component.css']
})
export class DictionayPageComponentComponent implements OnInit {

  mean:string = "a";

 

  dictionay!: FormGroup;

  constructor(private dictionaryServiceService:DictionaryServiceService) { }

  ngOnInit(): void {
    this.dictionay = new FormGroup({
      word: new FormControl()
    })
  }

  translate(){
    this.mean = this.dictionaryServiceService.translate(this.dictionay?.value.word);
  }

}
