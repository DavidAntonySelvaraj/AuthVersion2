import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CognitoService } from '../cognito.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css',
})
export class LogoutComponent {
  constructor(private cognitoservice: CognitoService) {}
  public ngOnInit(): void {
    this.cognitoservice.signOut().then(() => {
      console.log('loggedout');
    });
  }
}
