import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserDetailsService } from './user-details.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userDetails: any;
  sub!: Subscription;
  imgWidth: number = 100;
  imgMargin: number = 2;
  title: string = "id : "

  constructor(private userdetailsService: UserDetailsService
    , private _Router: Router, private Arout: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.userdetailsService.getUser().subscribe({
      next: userditails => {
        console.log(userditails);
        this.userDetails = userditails;
        console.log(userditails)
      }
    });
    this.title += this.Arout.snapshot.paramMap.get('id');
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
