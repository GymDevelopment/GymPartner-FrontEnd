import { Component, OnInit } from '@angular/core';
import { HomeCard } from '../../../models/homeCard';
import { HomeCardService } from '../../../services/home-card.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cardData !: HomeCard[]
  clientType !: string;
  data : HomeCard[] = [
    {
      "title": "Perfil",
      "routeLink": "dashboard/coach-profile",
      "description": "Consulta tu información personal",
      "type": "coach",
      "image": "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    },
    {
      "title": "Clientes",
      "routeLink": "dashboard/coach-clients",
      "description": "Revisa tus clientes asignados",
      "type": "coach",
      "image": "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    },
    {
      "title": "Entrenamientos",
      "routeLink": "dashboard/coach-training-routine",
      "description": "Revisa y crea entrenamientos",
      "type": "coach",
      "image": "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    },
    {
      "title": "Plan Alimentario",
      "routeLink": "dashboard/coach-meal-plans",
      "description": "Crea y asigna planes alimentarios",
      "type": "coach",
      "image": "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    },
    {
      "title": "Perfil",
      "routeLink": "dashboard/client-profile",
      "description": "Consulta tu información personal",
      "type": "client",
      "image": "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    },
    {
      "title": "Estadísticas",
      "routeLink": "dashboard/client-statistics",
      "description": "Revisa tu progreso en el gimnasio",
      "type": "client",
      "image": "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    },
    {
      "title": "Entrenamientos",
      "routeLink": "dashboard/client-training-routine",
      "description": "Revisa tus entrenamientos programados",
      "type": "client",
      "image": "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    },
    {
      "title": "Plan Alimentario",
      "routeLink": "dashboard/client-meal-plans",
      "description": "Consulta tu plan alimenticio y sus detalles",
      "type": "client",
      "image": "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    }
  ]

  constructor(
    private homeCardService: HomeCardService,
    private userService : UserService 
    ) { }


  ngOnInit(): void {
    this.clientType = this.userService.userInformation.typeUser;
    //this.getHomeCardsData();
    console.log(this.data)
    this.cardData = this.data.filter((card: HomeCard) => card.type == this.clientType);
  }
  getHomeCardsData(){
    this.homeCardService.getHomeCard().subscribe((data: HomeCard[])=>
       { this.cardData = data;
      }
    )
  }
}
