import {Component, OnInit} from '@angular/core';
import {EntityBackendService} from "../services/entity.backend.service";
import {Mset} from "../models/mset";
import {SerializedScanner} from "../models/serialzedScanner";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-serialized-scanner',
  templateUrl: './serialized-scanner.component.html',
  styleUrls: ['./serialized-scanner.component.scss']
})
export class SerializedScannerComponent implements OnInit {

  serializedScanner: SerializedScanner;
  errorMessage = "";

  constructor(private serializedScannerService: EntityBackendService<SerializedScanner>,
              private route: ActivatedRoute,
              private router: Router
  ) {
    this.serializedScanner = new SerializedScanner(undefined, "")
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
        let id = +params['id'];
        if (id) {
          this.serializedScanner.id = id;
          this.get();
        }
      }
    );
  }

  get(): void {
    this.serializedScannerService.loadEntity(this.serializedScanner).subscribe(s =>
      this.serializedScanner = SerializedScanner.copy(s)
    )
  }


  save() {
    this.serializedScannerService.saveEntity(this.serializedScanner).subscribe((s) => {
      this.serializedScanner = SerializedScanner.copy(s)
      this.errorMessage = ""
    }, (error => {
      this.errorMessage = error.error.message;
      console.log(error)
      console.log(error.message)
      console.log(error.error)
      alert(error.message)
    }))
  }

}
