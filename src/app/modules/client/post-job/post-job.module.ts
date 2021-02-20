import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { PostJobComponent } from './post-job.component';
import { TitleComponent } from './title/title.component';
import { SideNavComponent } from './side-nav/side-nav/side-nav.component';
import { DetailsComponent } from './details/details.component';
import { CardComponent } from '../shared/components/card/card.component';
import { BudgetComponent } from './budget/budget.component';
import { PricingComponent } from './budget/pricing/pricing.component';
import { NaveItemComponent } from './side-nav/nave-item/nave-item.component';
import { ReviewComponent } from './review/review.component';
import { BasicCardComponent } from '../shared/components/basic-card/basic-card.component';
import { FixedInputComponent } from './budget/fixed-input/fixed-input.component';
import { GuardedRoutesGuard } from 'src/app/services/guard/guarded-routes.guard';
const routes: Routes = [
  {
    path: '',
    component: PostJobComponent,
    children: [
      { path: 'title', component: TitleComponent, canActivate:[GuardedRoutesGuard], data: { noPanel: true, role: "Employer"  } },
      { path: 'details', component: DetailsComponent, canActivate:[GuardedRoutesGuard], data: { noPanel: true, role: "Employer" } },
      { path: 'budget', component: BudgetComponent, canActivate:[GuardedRoutesGuard], data: { noPanel: true, role: "Employer" } },
      { path: 'review', component: ReviewComponent, canActivate:[GuardedRoutesGuard], data: { noPanel: true, role: "Employer" } },
    ],

    // { path: 'purchase-orders', component: PurchaseOrdersComponent },
    // { path: 'purchase-orders/:id', component: PurchaseOrderComponent },

    // { path: 'shipments', component: ShipmentsComponent },
    // { path: 'shipments/:id', component: ShipmentComponent }
  },
];

@NgModule({
  declarations: [
    TitleComponent,
    PostJobComponent,
    SideNavComponent,
    DetailsComponent,
    CardComponent,
    BudgetComponent,
    PricingComponent,
    NaveItemComponent,
    ReviewComponent,
    BasicCardComponent,
    FixedInputComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PostJobModule {}
