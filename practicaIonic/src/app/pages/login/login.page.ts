import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonItem, IonInput, IonInputPasswordToggle } from '@ionic/angular/standalone';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonInput, IonItem, IonButton, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonContent, CommonModule, FormsModule, IonInputPasswordToggle, ReactiveFormsModule]
})
export class LoginPage implements OnInit {
  
  loginForm: FormGroup;

  isLogin: boolean = true;

  constructor(private fb: FormBuilder, private alert: AlertController, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
   }

  ngOnInit() {
  }

  toggleForm() {
    this.isLogin = !this.isLogin;
    this.loginForm.reset();
  }

  onLogin() {
    if (this.isLogin) {
      if (this.loginForm.valid) {
        const { email, password } = this.loginForm.value;
        console.log(email, password);
        let data = {
          email: email,
          password: password
        }
        
      }
    } else {
      
    }
  
  }


  async mostrarAlerta (header: string, sub: string, message: string) {
    const alert = await this.alert.create({
      header: header,
      subHeader: sub,
      message: message,
      buttons: [
        {
        text: 'OK',
        role: 'confirm',
        handler: () => {
          this.router.navigate(['/tabs/tab1']);
      }}
      ],
    });
    await alert.present();
  }

  async mostrarError (header: string, sub: string, message: string) {
    const alert = await this.alert.create({
      header: header,
      subHeader: sub,
      message: message,
      buttons: [
        {
        text: 'OK',
        role: 'confirm'
      }
      ],
    });
    await alert.present();
  }
}
