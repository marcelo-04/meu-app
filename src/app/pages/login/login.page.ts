import { Component, OnInit, ViewChild } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  
  constructor(public Keyboard: Keyboard) { }

  ngOnInit() { }

  segmentChanged(event: any) {
    if(event.detail.value === "login") {
      this.slides.slidePrev();  
    } else {
      this.slides.slideNext(); 
    }
  }
}
