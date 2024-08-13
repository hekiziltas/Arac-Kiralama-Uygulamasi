import { Injectable } from '@angular/core';
import { Arac } from './arac.class';
import { Firestore } from '@angular/fire/firestore';






@Injectable({
  providedIn: 'root'
})
export class AracService {
  araclar:Arac[] = [
{
  id:'1',
  marka:'BMW',
  model:'M8 Competition',
  resimUrl:'assets/img/1.jpg',
  detay:['Yakıt Tipi:Benzin','4.4 Lt V8 (617 Bg)','0-100 = 3.1sn']
},
{
  id:'2',
  marka:'Mercedes-Maybach',
  model:'S-680',
  resimUrl:'assets/img/2.jpg',
  detay:['Yakıt Tipi:Benzin','6 Lt V12 (604 Bg)','0-100 = 5.1sn']
},
{
  id:'3',
  marka:'Ferrari',
  model:'F8 Tributo',
  resimUrl:'/assets/img/3.jpg',
  detay:['Yakıt Tipi:Benzin','3.9 Lt V8 (720 Bg)','0-100 = 2.9sn']
},
{
  id:'4',
  marka:'Ferrari',
  model:'812 Superfast',
  resimUrl:'assets/img/4.jpg',
  detay:['Yakıt Tipi:Benzin','6.5 Lt V12 (790 Bg)','0-100 = 2.9sn']
},
{
  id:'5',
  marka:'Porsche',
  model:'911 Gt3 RS',
  resimUrl:'assets/img/5.jpg',
  detay:['Yakıt Tipi:Benzin','4.0 Lt V8 (525 Bg)','0-100 = 3.2sn']
},
]

  constructor() { }
}
