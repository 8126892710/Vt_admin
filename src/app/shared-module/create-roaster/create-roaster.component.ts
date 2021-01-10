import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
declare var $: any

@Component({
  selector: 'app-create-roaster',
  templateUrl: './create-roaster.component.html',
  styleUrls: ['./create-roaster.component.scss']
})
export class CreateRoasterComponent implements OnInit {

  firstForm: FormGroup;
  secondForm: FormGroup;
  roasterList: any = [];
  constructor(private fb: FormBuilder) {
    this.firstForm = this.fb.group({
      user: [''],
      user_type: [''],
    });
    this.secondForm = this.fb.group({
      list:this.fb.array([])
    })
  }

  ngOnInit() {
    this.callingJQuery();
    this.getRoasterlist();
  }

  get roasterFormlist(): FormArray {
    return this.secondForm.get('list') as FormArray;
  }

  innerForm(index:number) : FormArray {
    let roasterForm = this.secondForm.get('list') as FormArray;
    return roasterForm.at(index).get("pickup") as FormArray
  }

  public onSelect() {
    console.log("fir-===========>>>", this.firstForm.value);
  }

  public callingJQuery() {
    $('.mdb-select').materialSelect();
    $('.timepicker').pickatime({
      twelvehour: true
    });
  }

  public getRoasterlist() {
    this.roasterList = [
      {
        id: 1,
        name: 'AAA',
        pickup: [
          {
            id: 1,
            pickup_time: '',
            drop_time: '',
            pickup_location:'',
            drop_location:''
          },
          {
            id: 2,
            pickup_time: '',
            drop_time: '',
            pickup_location:'',
            drop_location:''
          },
          {
            id: 3,
            pickup_time: '',
            drop_time: '',
            pickup_location:'',
            drop_location:''
          },
          {
            id: 4,
            pickup_time: '',
            drop_time: '',
            pickup_location:'',
            drop_location:''
          },
          {
            id: 5,
            pickup_time: '',
            drop_time: '',
            pickup_location:'',
            drop_location:''
          },
          {
            id: 6,
            pickup_time: '',
            drop_time: '',
            pickup_location:'',
            drop_location:''
          },
          {
            id: 7,
            pickup_time: '',
            drop_time: '',
            pickup_location:'',
            drop_location:''
          }
        ]
      },
      {
        id: 2,
        name: 'BBB',
        pickup: [
          {
            id: 1,
            pickup_time: '',
            drop_time: '',
            pickup_location:'',
            drop_location:''
          },
          {
            id: 2,
            pickup_time: '',
            drop_time: '',
            pickup_location:'',
            drop_location:''
          },
          {
            id: 3,
            pickup_time: '',
            drop_time: '',
            pickup_location:'',
            drop_location:''
          },
          {
            id: 4,
            pickup_time: '',
            drop_time: '',
            pickup_location:'',
            drop_location:''
          },
          {
            id: 5,
            pickup_time: '',
            drop_time: '',
            pickup_location:'',
            drop_location:''
          },
          {
            id: 6,
            pickup_time: '',
            drop_time: '',
            pickup_location:'',
            drop_location:''
          },
          {
            id: 7,
            pickup_time: '',
            drop_time: '',
            pickup_location:'',
            drop_location:''
          }
        ]
      },
      {
        id: 2,
        name: 'CCC',
        pickup: [
          {
            id: 1,
            pickup_time: '',
            drop_time: '',
            pickup_location:'',
            drop_location:''
          },
          {
            id: 2,
            pickup_time: '',
            drop_time: '',
            pickup_location:'',
            drop_location:''
          },
          {
            id: 3,
            pickup_time: '',
            drop_time: '',
            pickup_location:'',
            drop_location:''
          },
          {
            id: 4,
            pickup_time: '',
            drop_time: '',
            pickup_location:'',
            drop_location:''
          },
          {
            id: 5,
            pickup_time: '',
            drop_time: '',
            pickup_location:'',
            drop_location:''
          },
          {
            id: 6,
            pickup_time: '',
            drop_time: '',
            pickup_location:'',
            drop_location:''
          },
          {
            id: 7,
            pickup_time: '',
            drop_time: '',
            pickup_location:'',
            drop_location:''
          }
        ]
      },
      {
        id: 2,
        name: 'DDD',
        pickup: [
          {
            id: 1,
            pickup_time: '',
            drop_time: '',
            pickup_location:'',
            drop_location:''
          },
          {
            id: 2,
            pickup_time: '',
            drop_time: '',
            pickup_location:'',
            drop_location:''
          },
          {
            id: 3,
            pickup_time: '',
            drop_time: '',
            pickup_location:'',
            drop_location:''
          },
          {
            id: 4,
            pickup_time: '',
            drop_time: '',
            pickup_location:'',
            drop_location:''
          },
          {
            id: 5,
            pickup_time: '',
            drop_time: '',
            pickup_location:'',
            drop_location:''
          },
          {
            id: 6,
            pickup_time: '',
            drop_time: '',
            pickup_location:'',
            drop_location:''
          },
          {
            id: 7,
            pickup_time: '',
            drop_time: '',
            pickup_location:'',
            drop_location:''
          }
        ]
      },
      {
        id: 2,
        name: 'EEE',
        pickup: [
          {
            id: 1,
            pickup_time: '',
            drop_time: '',
            pickup_location:'',
            drop_location:''
          },
          {
            id: 2,
            pickup_time: '',
            drop_time: '',
            pickup_location:'',
            drop_location:''
          },
          {
            id: 3,
            pickup_time: '',
            drop_time: '',
            pickup_location:'',
            drop_location:''
          },
          {
            id: 4,
            pickup_time: '',
            drop_time: '',
            pickup_location:'',
            drop_location:''
          },
          {
            id: 5,
            pickup_time: '',
            drop_time: '',
            pickup_location:'',
            drop_location:''
          },
          {
            id: 6,
            pickup_time: '',
            drop_time: '',
            pickup_location:'',
            drop_location:''
          },
          {
            id: 7,
            pickup_time: '',
            drop_time: '',
            pickup_location:'',
            drop_location:''
          }
        ]
      }
    ]
    for (let i = 0; i < this.roasterList.length; i++) {
      this.roasterFormlist.push(this.fb.group({
          id:this.roasterList[i].id,
          name:this.roasterList[i].name,
          pickup:this.fb.array([])
      }))
      for (let j = 0; j < this.roasterList[i].pickup.length; j++) {
        this.roasterFormlist.controls[i]['controls'].pickup.push(this.fb.group({
          id: this.roasterList[i].pickup[j].id,
          pickup_time:  this.roasterList[i].pickup[j].pickup_time,
          drop_time:  this.roasterList[i].pickup[j].drop_time,
          pickup_location: this.roasterList[i].pickup[j].pickup_location,
          drop_location: this.roasterList[i].pickup[j].drop_location
        }))
      }
    }
  }

}
