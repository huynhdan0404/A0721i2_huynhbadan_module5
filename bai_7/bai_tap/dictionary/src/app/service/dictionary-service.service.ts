import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { IWord } from '../models/iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {

   words:IWord[] = [
    {
      word: "hello",
      mean: "xin chào"
    },
    {
      word: "dog",
      mean: "con chó"
    },
    {
      word: "cat",
      mean: "con mèo"
    }
  ]

  constructor() { }

  translate(word1:string):any{
    for(let i=0;i < this.words.length;i++){
      if(this.words[i].word === word1){
        return this.words[i].mean;
      }
    }
  }

}
