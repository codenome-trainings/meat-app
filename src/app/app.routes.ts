import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { RestaurantsComponent } from './restaurants/restaurants.component'
import { RestaurantDetailComponent } from 'app/restaurant-detail/restaurant-detail.component'
import { MenuComponent } from 'app/restaurant-detail/menu/menu.component'
import { ReviewsComponent } from 'app/restaurant-detail/reviews/reviews.component'
import { TestComponent } from 'app/test/test.component'
import { OrderSumaryComponent } from 'app/order-sumary/order-sumary.component'
import { NotFoudComponent } from 'app/not-foud/not-foud.component'

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'restaurants', component: RestaurantsComponent },
    { path: 'restaurants/:id', component: RestaurantDetailComponent,
        children:
        [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: MenuComponent },
            { path: 'reviews', component: ReviewsComponent }
        ]},
    { path: 'order-sumary', component: OrderSumaryComponent },
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: 'order', loadChildren: './order/order.module#OrderModule' },
    { path: 'test', component: TestComponent },
    { path: '**', component: NotFoudComponent }
]
