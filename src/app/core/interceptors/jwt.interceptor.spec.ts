import { TestBed } from '@angular/core/testing'
import { HttpClientModule, HttpInterceptorFn } from '@angular/common/http'

import { jwtInterceptor } from './jwt.interceptor'
import { HttpClientTestingModule } from '@angular/common/http/testing'


fdescribe('jwtInterceptor', () => {

  const interceptor: HttpInterceptorFn = (req, next) =>
    TestBed.runInInjectionContext(() => jwtInterceptor(req, next))

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule]
    })
  })

  it('should be created', () => {
    expect(interceptor).toBeTruthy()
  })
})
