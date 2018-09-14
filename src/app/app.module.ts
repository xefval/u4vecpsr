import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoaderService } from './core/loader/loader.service';
import { CoreModule } from './core/core.module';
import { CoursesModule } from './courses/courses.module';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { coursesReducer } from './courses/courses.reducer';
import { CoursesEffects } from './courses/courses.effects';
import { authReducer } from './auth/auth.reducer';
import { AuthEffects } from './auth/auth.effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AuthModule,
    BrowserModule,
    CoreModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    CoursesModule,
    StoreModule.forRoot({
      auth: authReducer,
      courses: coursesReducer
    }),
    StoreDevtoolsModule.instrument({
      name: 'Courses DevTools'
    }),
    EffectsModule.forRoot([AuthEffects, CoursesEffects]),
  ],
  providers: [
    LoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
