import { TestBed, inject } from '@angular/core/testing';
import { CoursesService } from './courses-provider.service';
import { HttpClientModule } from '@angular/common/http';
import {
  HttpModule,
  Http,
  BaseRequestOptions,
  Response,
  ResponseOptions
} from '@angular/http';
import {MockBackend} from '@angular/http/testing';

describe('CoursesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        CoursesService,
        MockBackend,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
  });

  it('should be created', inject([CoursesService], (service: CoursesService) => {
    expect(service).toBeTruthy();
  }));
});
