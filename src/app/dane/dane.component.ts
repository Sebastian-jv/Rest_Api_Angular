import { I18NHtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { BazaService } from '../baza.service';

@Component({
  selector: 'app-dane',
  templateUrl: './dane.component.html',
  styleUrls: ['./dane.component.css']
})


export class DaneComponent implements OnInit {
  read_user = false;
  first_choice = 0;
  show=false;
  modify = false;
  second_choice = -1;
  second_show =false;
  modify_choice = -1;
  second_modify = false;
  counter =0;
  activeInput='';
  answerRest='';
  save = false;
  username = 'test_user';
  user: User = {
    id: 0,
    p0: '',
    p1: '',
    p2: '',
    p3: '',
    p4: '',
    p5: '',
    p6: '',
    p7: '',
    p8: '',
    p9: ''
  };
  choice =[
    {"id":0,"name":"id"},
    {"id":1,"name":"p0"},
    {"id":2,"name":"p1"},
    {"id":3,"name":"p2"},
    {"id":4,"name":"p3"},
    {"id":5,"name":"p4"},
    {"id":6,"name":"p5"},
    {"id":7,"name":"p6"},
    {"id":8,"name":"p7"},
    {"id":9,"name":"p8"},
    {"id":10,"name":"p9"},
  ]
  choice_mod =[
    {"id":1,"name":"p0"},
    {"id":2,"name":"p1"},
    {"id":3,"name":"p2"},
    {"id":4,"name":"p3"},
    {"id":5,"name":"p4"},
    {"id":6,"name":"p5"},
    {"id":7,"name":"p6"},
    {"id":8,"name":"p7"},
    {"id":9,"name":"p8"},
    {"id":10,"name":"p9"},
  ]
  constructor(private baza: BazaService) { }
  onChangeUserName(e:any){
    this.username = e.target.value;
  }

  getData( ): void {
    this.baza.getUser(this.username).subscribe((t_user:any) => {
      if(t_user.length > 0){
        this.user = t_user[0];
        this.read_user = true;
      }   
      });
  }
  putData( ): void {
    this.baza.putUser(this.user).subscribe( (change_user : any) => {
     console.log(change_user);
     this.save = true;
     if(change_user.err == 0)
        this.answerRest = "Pomyślnie zapisano";
      else
      this.answerRest = "Bład podczas zapisu";
    });
    }
    hndSaveClick(){
      this.putData();
    }

    resetSave(){
      this.save = false;
      this.answerRest ='';
    }
    onChangeAreaData(ev:any){ 
       let a = parseInt(this.activeInput);
    switch(a)
    {
      case(1): 
        this.user.p0 = ev.target.value; break;
      case(2): 
        this.user.p1 = ev.target.value; break;
      case(3): 
        this.user.p2 = ev.target.value; break;
      case(4): 
        this.user.p3 = ev.target.value; break;
      case(5): 
        this.user.p4 = ev.target.value; break;
      case(6): 
        this.user.p5 = ev.target.value; break;
      case(7): 
        this.user.p6 = ev.target.value; break;
      case(8): 
        this.user.p7 = ev.target.value; break;
      case(9): 
        this.user.p8 = ev.target.value; break;
      case(10): 
        this.user.p9 = ev.target.value; break;
      }
    }
  
  ngOnInit(): void {
    
  }
  hndOnlick(){
    this.getData();
  }
  mainChange(val:any){
    this.first_choice = val.target.value;
    this.resetSave();
    if(val.target.value == 1)
    {
      this.modify = false;  
      this.show = true;
    }
    else if (val.target.value == 2){
      this.modify = true;
      this.show = false;
      this.second_show = false;
    }
    else{ 
      this.show = false;
      this.second_show = false;
      this.modify = false;
    }
  }
  secondShowChange(ch:any){
    this.second_choice = ch.target.value;
    if(ch.target.value != -1)
      this.second_show = true;
    else
      this.second_show = false;
  }
  valModifyChange(ch:any){
    this.modify_choice = ch.target.value;
    this.resetSave();
    if(ch.target.value != -1)
      this.second_modify= true;
    else
      this.second_modify = false;
  }
  choiceArea(x: any){
    let y = parseInt(x);
    switch(y)
    {
      case(0):  return String(this.user.id);
      case(1):  return this.user.p0;
      case(2):  return this.user.p1;
      case(3):  return this.user.p2;
      case(4):  return this.user.p3;
      case(5):  return this.user.p4;
      case(6):  return this.user.p5;
      case(7):  return this.user.p6;
      case(8):  return this.user.p7;
      case(9):  return this.user.p8;
      case(10):  return this.user.p9;
      default:    return "Bład wejscia";
    }
  }
  resetCounter(){
    this.counter = 0;
  }
  upCounter(){
    this.counter++;
  }
  setCounter(val:any){
    this.counter = val;
  }
  setActiveInput(evClick:any){
    this.activeInput = evClick.target.id;
  }
}
export interface User {
  id: number;
  p0: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  p5: string;
  p6: string;
  p7: string;
  p8: string;
  p9: string;
}