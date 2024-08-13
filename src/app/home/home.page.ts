import { Component } from '@angular/core';
import { FireService } from '../fire.service';
import { Router } from '@angular/router';
import { User } from '../user.class';
import { getAuth,signOut } from "firebase/auth";
import { Auth } from '@angular/fire/auth';
import { AracService } from '../arac.service';
import { AlertController } from '@ionic/angular';
import { carİnfo } from '../fire.service';






@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  arabalar:carİnfo[]=[];

  constructor(private alertController:AlertController,public aracService:AracService,private auth:Auth,private router:Router,private fireService:FireService) {
    this.fireService.arabalistele().subscribe((sonuc:any)=>{this.arabalar = sonuc;},hata=>{})
  }


  async cikis() {
    const auth = getAuth();
    try {
      await signOut(auth);
      this.router.navigateByUrl('/login');
    } catch (error) {
      console.error('Çıkış işlemi sırasında hata oluştu:', error);
    }
  }
  git(aracId:any)
  {
    this.router.navigate(['detay', {id:aracId}])
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alaesco Rent A Car',
     inputs:[
      {
        name:'araba_marka',
        placeholder:'Görmek İstediğiniz Aracı Yazınız...',
        type:'text',
      },
      {
        name:'araba_model',
        placeholder:'Görmek İstediğiniz Aracın Modelini Yazınız...',
        type:'text',
      },
      {
        name:'araba_detay',
        placeholder:'Görmek İstediğiniz Aracın Özelliklerini Yazınız...',
        type:'text',
      },
     ],
      buttons: [{
        text:'Vazgeç',
        role:'Cansel'
      },
      {
        text:'Ekle',
        handler: res=> {
          let car = {
            marka:res.araba_marka,
            model:res.araba_model,
            detay:res.araba_detay
          };
          this.fireService.yeniaraba(car);
          console.log('Araba Eklendi');
        }
      }
    ],
    });

    await alert.present();
  }



}
