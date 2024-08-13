import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { FireService } from '../fire.service';
import { Router } from '@angular/router';
import { getAuth } from "firebase/auth";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  userData: User = new User();

  constructor(private router:Router,private fireservice:FireService) { }

  ngOnInit() {
  }

  async kayit()
  {
    const sonuc = await this.fireservice.kayitUser(this.userData);
    const auth = getAuth();
    const user = auth.currentUser;
    if (user)
    this.router.navigateByUrl('/home');
   else
   this.fireservice.presentAlert('Hata','Hatalı kullanıcı girişi,lütfen tekrar deneyiniz');
  }


}
