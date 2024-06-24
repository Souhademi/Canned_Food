import { ApplicationModule, Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { CannedService } from '../shared/canned.service';
import { AppComponent } from '../app.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Canned } from '../shared/canned.model';
import { provideHttpClient } from '@angular/common/http';


declare var M: any;

@Component({
  selector: 'app-canned',
  templateUrl: './canned.component.html',
  styleUrls: ['./canned.component.css'],
  standalone: true,
  providers: [CannedService],
  imports:[FormsModule,HttpClientModule,CommonModule,ApplicationModule]
})

export class CannedComponent implements OnInit {

 constructor(public cannedService: CannedService) {}

  ngOnInit() {
    this.refreshCannedList();
    this.resetForm();
  };

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.cannedService.selectedCanned = {
          _id: "",
          typeElement: "",
          flavor:"",
          weight:"",
          nutritionalValue:"",
          foodAdditives: "",
          sugar: "",
          protein: "",
          fats: "",
    }
  }


  onSubmit(form: NgForm) {// router.post
    if (form.value._id == "") {
      this.cannedService.postCanned(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshCannedList()
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.cannedService.putCanned(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshCannedList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshCannedList() {
    this.cannedService.getCannedList().subscribe((res)=> {
      this.cannedService.canneds = res as Canned[];
    });
  }

  onEdit(cn: Canned) {
    this.cannedService.selectedCanned = cn;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.cannedService.deleteCanned(_id).subscribe((res) => {
        this.refreshCannedList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
}




