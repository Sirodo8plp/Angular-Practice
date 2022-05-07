import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { youtubeSearchInjectables } from './services/youtube-search.service';
import { AppComponent } from './app.component';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import { MoreHttpRequestsComponent } from './more-http-requests/more-http-requests.component';
import { YoutubeSearchComponent } from './youtube-search/youtube-search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponent,
    MoreHttpRequestsComponent,
    YoutubeSearchComponent,
    SearchResultComponent,
    SearchBoxComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [youtubeSearchInjectables],
  bootstrap: [AppComponent],
})
export class AppModule {}
