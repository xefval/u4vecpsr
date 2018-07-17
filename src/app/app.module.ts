import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AuthorizationService } from './users/authorization.service';
import { CoreModule } from './core/core.module';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    UsersModule,
    CoursesModule
  ],
  providers: [AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
