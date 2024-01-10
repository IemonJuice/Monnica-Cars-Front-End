import {NgModule, isDevMode} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';


import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import { provideStore, StoreModule } from '@ngrx/store'
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {FeaturesModule} from "./features/features.module";
import {HttpClientModule, provideHttpClient, withFetch, withInterceptors} from '@angular/common/http';
import {GraphQLModule} from './graphql.module';
import {jwtInterceptor} from "./core/interceptors/jwt.interceptor";
import { authReducer } from './store/reducers/auth.reducer'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FeaturesModule,
    StoreModule.forRoot({user:authReducer}, {}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    HttpClientModule,
    GraphQLModule,
  ],

  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch(), withInterceptors([jwtInterceptor]))
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
