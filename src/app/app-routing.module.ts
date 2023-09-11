import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CardLayoutComponent } from './card-layout/card-layout.component';

const routes: Routes = [
  { path: '', title: 'Card Display', component: CardComponent },
  {
    path: 'card-details',
    title: 'Card Details',
    component: CardDetailsComponent,
  },
  { path: 'card-layout', component: CardLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
