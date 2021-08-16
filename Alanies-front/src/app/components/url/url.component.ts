import { UrlService } from './../../services/url.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.css'],
})
export class UrlComponent implements OnInit {
  urls: any;
  constructor(private urlService: UrlService) {}
  urlForm = new FormGroup({
    fullUrl: new FormControl(null),
  });
  ngOnInit(): void {
    this.getAllUrls();
  }

  submit() {
    console.log('url', this.urlForm.value);
    this.urlService.AddUrl(this.urlForm.value).subscribe((data) => {
      console.log('url', data);
      this.urlForm.reset();
      this.getAllUrls();
    });
  }
  getAllUrls() {
    this.urlService.getAll().subscribe((data: any) => {
      this.urls = data;
      console.log('urlll', this.urls);
    });
  }
  inc(url: any) {
    console.log('object');
    let obj = {
      fullUrl: url.fullUrl,
      shortUrl: url.shortUrl,
      clicks: url.clicks + 1,
    };

    this.urlService.AddUrl(obj).subscribe((data) => {
      console.log('url', data);
      this.getAllUrls();
    });
  }
}
