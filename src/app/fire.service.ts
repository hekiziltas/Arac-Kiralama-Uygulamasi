import { Injectable } from '@angular/core';
import { Auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut } from '@angular/fire/auth';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, updateDoc } from '@angular/fire/firestore';
import { User } from './user.class';
import { AlertController } from '@ionic/angular';

  export interface carİnfo
  {
    id?:string;
    marka?:string;
    model?:string;
    detay?:string;
  }


@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor(private alertController:AlertController,private auth:Auth,private firestore:Firestore) { }


  yeniaraba(car:carİnfo)
  {
    const carsonuc = collection(this.firestore,'cars')
    return addDoc(carsonuc,car);
  }
  arabalistele():any
  {
    const carsonuc = collection(this.firestore,'cars')
    return collectionData(carsonuc,{idField:'id'});
  }
    
   
async kayitUser(user:User)
{
  try {
    const kayitKul = await createUserWithEmailAndPassword(this.auth, user.email,user.password)
    return kayitKul;
  }
  catch (error)
  {
    return error;
  }
}

 async girisUser(user:User)
 {
    try {
      const girenKul = await signInWithEmailAndPassword(this.auth,user.email,user.password)
      return girenKul;
    }
    catch (error)
    {
      return error;
    }
 }

 async cikisUser(user:User) 
 {
   try {
    const cikinUser = await signOut(this.auth)
    return true
   }
   catch (error)
   {
    return error;
   }
 }

 async presentAlert(durum:any,mesaj:any)
 {
  const alert = await this.alertController.create({
    header:durum,
    message:mesaj,
    buttons: ['Tamam'],
  });
  await alert.present();
 }


}
