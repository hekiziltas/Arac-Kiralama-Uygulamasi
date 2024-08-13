import { Component, OnInit } from '@angular/core';
import { Arac } from '../arac.class';
import { AracService } from '../arac.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detay',
  templateUrl: './detay.page.html',
  styleUrls: ['./detay.page.scss'],
})
export class DetayPage implements OnInit {
  arac:Arac;

  constructor(private aracService:AracService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.arac = this.aracGetir(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.arac); 
  }

  aracGetir(deger:any):Arac
  {
    return this.aracService.araclar.find(bul=>bul.id === deger);
  }

}
