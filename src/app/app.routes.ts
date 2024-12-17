import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ForeignFlowsComponent } from './foreign-flows/foreign-flows.component';
import { DomesticFlowsComponent } from './domestic-flows/domestic-flows.component';
import { OverviewComponent } from './overview/overview.component';
import { AboutComponent } from './about/about.component';



// export const routes: Routes = [
//     {
//       path: '',
//       component: HomeComponent,
//       children: [
//         { path: 'foreign-flow', component: ForeignFlowsComponent },
//         { path: 'domestic-flow', component: DomesticFlowsComponent },
//       ],
//     },
//   ];

export const routes: Routes = [
    { path: '', component: HomeComponent },  // Load HomeComponent at root
    { path: 'foreign-flow', component: ForeignFlowsComponent },
    { path: 'domestic-flow', component: DomesticFlowsComponent },
    { path: 'overview', component: OverviewComponent },
    { path: 'about', component: AboutComponent },
  ];
// export const routes: Routes = [
//     { path: '', component: HomeComponent },
// ];
