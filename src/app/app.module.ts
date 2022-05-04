import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserDemoComponent } from './user-demo/user-demo.component';
import { UserService } from './services/user.service';
import { AnalyticsDemoComponent } from './analytics-demo/analytics-demo.component';
import { AnalyticsImplementation } from './analytics-demo/analytics-demo.interface';
@NgModule({
  declarations: [AppComponent, UserDemoComponent, AnalyticsDemoComponent],
  imports: [BrowserModule],
  providers: [
    UserService,
    { provide: 'API_URL', useValue: 'http://my.api.com/v1' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
