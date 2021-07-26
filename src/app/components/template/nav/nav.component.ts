import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  gitHubUser: any

  constructor(private gitHubService: GithubService) { }

  ngOnInit(): void {
    this.gitHubService.getUserInformation().subscribe(user => {
      this.gitHubUser = user;
    });
  }

}
