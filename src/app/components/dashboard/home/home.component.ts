import { Component, OnInit } from '@angular/core';
import { HomeCard } from '../../../models/homeCard';
import { HomeCardService } from '../../../services/home-card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  cardData !: HomeCard[];
  constructor(private homeCardService: HomeCardService) { }


  ngOnInit(): void {
    this.gethomeCardsData();
  }
  gethomeCardsData(){
    this.homeCardService.getHomeCard().subscribe((data: HomeCard[])=>
       { this.cardData = data;
      }
    )
  }

}
