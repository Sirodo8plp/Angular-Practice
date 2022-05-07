import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResult } from './search-result.model';
import { map } from 'rxjs';

@Injectable()
export class YoutubeSearchService {
  constructor(
    private http: HttpClient,
    @Inject(YOUTUBE_API_KEY) private apiKey: string,
    @Inject(YOUTUBE_API_URL) private apiUrl: string
  ) {}

  search(query: string): Observable<SearchResult[]> {
    const params: string = [
      `q=${query}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`,
    ].join('&');
    const queryUrl = `${this.apiUrl}?${params}`;
    return this.http.get(queryUrl).pipe(
      map((response: any) => {
        return <any>response['items'].map((item: any) => {
          return new SearchResult({
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnailUrl: item.snippet.thumbnails.high.url,
          });
        });
      })
    );
  }
}

export const YOUTUBE_API_KEY: string =
  'AIzaSyD6cmLin-7PqCM4szHt78yMEB2MuqzagAY';
export const YOUTUBE_API_URL: string =
  'https://www.googleapis.com/youtube/v3/search';
