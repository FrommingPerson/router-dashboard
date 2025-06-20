import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { debounce, debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input({required: true}) totalRoutes!: number;
  @Input({required: true}) pageSize!: number;
  page = 1;
  protected readonly Math = Math;
  private pageSizeChange$ = new Subject<number>();


  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const pageParam = parseInt(params['page']);
      const sizeParam = parseInt(params['pageSize']);
      console.log(this.pageSize);

      if (!isNaN(pageParam)) this.page = pageParam;
      if (!isNaN(sizeParam)) this.pageSize = sizeParam;
    });

    this.pageSizeChange$
      .pipe(debounceTime(500))
      .subscribe((newSize) => {
        this.router.navigate(['/', 1, newSize]);
      });
  }

  get previousLink(): any[] {
    return ['/', this.page - 1, this.pageSize];
  }

  get nextLink(): any[] {
    return ['/', this.page + 1, this.pageSize];
  }

  onPageSizeChange(pageSize: number) {
    this.pageSizeChange$.next(pageSize);
  }
}
