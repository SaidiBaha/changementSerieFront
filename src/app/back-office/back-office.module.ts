import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import {BackOfficeRoutingModule} from "./back-office-routing.module";
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { TopNavComponent } from './layout/top-nav/top-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { WelcomeCardComponent } from './layout/welcome-card/welcome-card.component';





@NgModule({
   
    declarations: [
        LayoutComponent,
        SideNavComponent,
        TopNavComponent,
        WelcomeCardComponent,
     

    ],
    imports: [
        CommonModule,
        BackOfficeRoutingModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatDialogModule,
        MatMenuModule,
        MatExpansionModule,
        FlexLayoutModule,
        MatButtonModule,
    ]
   
})
export class BackOfficeModule { }
