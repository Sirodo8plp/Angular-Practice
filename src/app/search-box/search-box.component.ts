import { Component, ElementRef, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { fromEvent, map, filter, debounceTime, tap, switchMap } from 'rxjs';
import { SearchResult } from '../youtube-search/search-result.model';
import { YoutubeSearchService } from '../youtube-search/youtube-search.service';

@Component({
  selector: 'app-search-box',
  template: ` <input
    type="text"
    class="form-control"
    placeholder="Search"
    autofocus
  />`,
})
export class SearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<
    SearchResult[]
  >();

  constructor(private youtube: YoutubeSearchService, private el: ElementRef) {}

  ngOnInit(): void {
    fromEvent(this.el.nativeElement, 'keyup')
      .pipe(
        map((e: any) => e.target.value),
        filter((text: string) => text.length > 1),
        debounceTime(300),
        tap(() => this.loading.emit(true)),
        switchMap((query: string) => this.youtube.search(query))
      )
      .subscribe({
        next: (results: SearchResult[]) => {
          this.loading.emit(false);
          this.results.emit(results);
        },
        error: (err: any) => {
          console.log(err);
          this.loading.emit(false);
        },
        complete: () => {
          this.loading.emit(false);
        },
      });
  }
}
