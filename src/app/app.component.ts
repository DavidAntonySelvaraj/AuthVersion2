import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './Register/register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { ForgotPasswordEmailComponent } from './forgot-password-email/forgot-password-email.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    LoginComponent,
    FormsModule,
    ReceptionistComponent,
    HttpClientModule,
    RegisterComponent,
    LogoutComponent,
    ForgotPasswordEmailComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'authenticatingcreds';
}
