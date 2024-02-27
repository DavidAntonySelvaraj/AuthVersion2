import { Component } from '@angular/core';
import { CognitoService, IUser } from '../cognito.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password-email',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './forgot-password-email.component.html',
  styleUrl: './forgot-password-email.component.css',
})
export class ForgotPasswordEmailComponent {
  user: IUser;
  constructor(private router: Router, private cognitoservice: CognitoService) {
    this.user = {} as IUser;
  }
  public toForgotPassword(): void {
    if (this.user.email && this.user.email.length > 0) {
      this.router.navigate(['/forgot-password'], {
        queryParams: { email: this.user.email },
      });
    }
  }
}
