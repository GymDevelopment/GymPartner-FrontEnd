import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import {transition, trigger , style, animate, keyframes} from '@angular/animations'
import { Navbar } from '../../../models/navbar';
import { NavbarService } from '../../../services/navbar.service';
import { SideNavToggle } from '../../../models/sideNavToggle';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('350ms',
          style({opacity: 1})
        )
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('350ms',
          style({opacity: 0})
        )
      ])
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms', 
          keyframes([
            style({transform: 'rotate(0deg)', offset: '0'}),
            style({transform: 'rotate(2turn)', offset: '1'})
          ])
        )
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {

  constructor(private navbarService: NavbarService, 
    private userService : UserService
    ) { }

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  
  collapsed = false;
  screenWidth = 0;
  navbarData !: Navbar[]
  data : Navbar[] = [
    {
       "routeLink": "home",
       "icon": "fal fa-home",
       "label": "Menú Principal",
       "type": "client"
     },
     {
       "routeLink": "client-profile",
       "icon": "fas fa-user",
       "label": "Perfil",
       "type": "client"
     },
     {
       "routeLink": "client-statistics",
       "icon": "fal fa-chart-bar",
       "label": "Estadisticas",
       "type": "client"
     },
     {
       "routeLink": "client-training-routine",
       "icon": "fas fa-dumbbell",
       "label": "Entrenamientos",
       "type": "client"
     },
     {
       "routeLink": "client-meal-plans",
       "icon": "fas fa-balance-scale-right",
       "label": "Plan Alimentario",
       "type": "client"
     },
     {
       "routeLink": "home",
       "icon": "fal fa-home",
       "label": "Menú Principal",
       "type": "coach"
     },
     {
       "routeLink": "coach-profile",
       "icon": "fas fa-user",
       "label": "Perfil",
       "type": "coach"
     },
     {
       "routeLink": "coach-training-routine",
       "icon": "fas fa-dumbbell",
       "label": "Entrenamientos",
       "type": "coach"
     },
     {
       "routeLink": "coach-meal-plans",
       "icon": "fas fa-balance-scale-right",
       "label": "Plan Alimentario",
       "type": "coach"
     },
     {
       "routeLink": "coach-clients",
       "icon": "fal fa-chart-bar",
       "label": "Clientes",
       "type": "coach"
     }
]
  userType:string = 'client';

  @HostListener('window.resize', ['$event'])
  onResize(event: any){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768){
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }

  changeToClient(){
    this.userType = 'client';
    this.userService.userType = 'client';
    this.getSidenavData();
  }
  changeToCoach(){
    this.userType = 'coach';
    this.userService.userType = 'coach';
    this.getSidenavData();
  }

  ngOnInit(): void {
    this.userService.userType = 'client';
    this.getSidenavData();
    //console.log(this.navData);
    this.screenWidth = window.innerWidth;
  }
  getSidenavData(){
    this.navbarData = this.data.filter(x=>x.type == this.userType)
    /* this.navbarService.getNavbar().subscribe(
      (data: Navbar[]) =>{this.navbarData = data.filter(x=>x.type == this.userType);
      }
    ); */
  }

  toggleCollapse():void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }
  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

}
