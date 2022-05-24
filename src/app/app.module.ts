import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHeaderComponent } from './dashboard/dashboard-header/dashboard-header.component';
import { DashboardContentComponent } from './dashboard/dashboard-content/dashboard-content.component';
import { SharedComponentsModule } from 'src/shared/shared-components.module';
import { DashboardModalComponent } from './dashboard/dashboard-modal/dashboard-modal.component';
import { SprintFormComponent } from './dashboard/dashboard-modal/sprint-form/sprint-form.component';
import { ProjectFormComponent } from './dashboard/dashboard-modal/project-form/project-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardHeaderComponent,
    DashboardContentComponent,
    DashboardModalComponent,
    SprintFormComponent,
    ProjectFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedComponentsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
