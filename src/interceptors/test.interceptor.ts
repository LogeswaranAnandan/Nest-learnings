import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class TestInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Inside :: Interceptor :: Before Execution');
    return next
      .handle()
      .pipe(
        tap((data) => console.log('Inside :: Interceptor :: After Execution', data)),
      );
  }
}