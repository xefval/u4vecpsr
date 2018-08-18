import { TestBed, inject } from '@angular/core/testing';

import { AuthorizationService } from './authorization.service';
import {
  HttpModule,
  Http,
  BaseRequestOptions,
  Response,
  ResponseOptions
} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {MockBackend} from '@angular/http/testing';

describe('AuthorizationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, HttpClientModule],
      providers: [
        AuthorizationService,
        MockBackend,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
  });

  it('should be created', inject([AuthorizationService], (service: AuthorizationService) => {
    expect(service).toBeTruthy();
  }));
});
