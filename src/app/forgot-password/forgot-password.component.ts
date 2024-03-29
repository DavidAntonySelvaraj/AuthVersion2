import { Component } from '@angular/core';
import { CognitoService, IUser } from '../cognito.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent {
  user: IUser;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cognitoservice: CognitoService
  ) {
    this.user = {} as IUser;
  }
  public ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      let email = params['email'];
      this.user.email = email;
      this.cognitoservice
        .forgotPassword(this.user)
        .then(() => {
          console.log('reset sent');
        })
        .catch((error) => {
          console.log('default error', error.code);
        });
    });
  }
  public resetPassword(): void {
    this.cognitoservice.forgotPasswordSubmit(this.user).then((resp) => {
      this.router.navigate(['/login']);
    });
  }
}
