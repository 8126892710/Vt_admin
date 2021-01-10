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
  secondForm: FormArray;
  roasterList: any = [];
  constructor(private fb: FormBuilder) {
    this.firstForm = this.fb.group({
      user: [''],
      user_type: [''],
      empArr: this.fb.array([this.createRow()])
    });
    // this.secondForm = this.fb.group({
    //   list:new FormArray([
    //     new FormGroup({
    //       id:
    //     })
    //   ])
    // })
    this.secondForm = this.fb.array([

    ])
  }

  ngOnInit() {
    this.callingJQuery();
  }
  createRow() {
    return this.fb.group({
      id: [''],
      name: [''],
      pickup: []
    })
  }

  public onSelect() {
    console.log("fir-===========>>>", this.firstForm.value)
  }

  public callingJQuery() {
    $('.mdb-select').materialSelect();
    $('.timepicker').pickatime({
      twelvehour: true
    });
  }

  public list() {
    this.roasterList = [
      {
        id: 1,
        name: 'AAA',
        pickup: [
          {
            id: 1,
            pickup_time: '',
            drop_time: '',
            location: ''
          },
          {
            id: 2,
            pickup_time: '',
            drop_time: '',
            location: ''
          },
          {
            id: 3,
            pickup_time: '',
            drop_time: '',
            location: ''
          },
          {
            id: 4,
            pickup_time: '',
            drop_time: '',
            location: ''
          },
          {
            id: 5,
            pickup_time: '',
            drop_time: '',
            location: ''
          },
          {
            id: 6,
            pickup_time: '',
            drop_time: '',
            location: ''
          },
          {
            id: 7,
            pickup_time: '',
            drop_time: '',
            location: ''
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
            location: ''
          },
          {
            id: 2,
            pickup_time: '',
            drop_time: '',
            location: ''
          },
          {
            id: 3,
            pickup_time: '',
            drop_time: '',
            location: ''
          },
          {
            id: 4,
            pickup_time: '',
            drop_time: '',
            location: ''
          },
          {
            id: 5,
            pickup_time: '',
            drop_time: '',
            location: ''
          },
          {
            id: 6,
            pickup_time: '',
            drop_time: '',
            location: ''
          },
          {
            id: 7,
            pickup_time: '',
            drop_time: '',
            location: ''
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
            location: ''
          },
          {
            id: 2,
            pickup_time: '',
            drop_time: '',
            location: ''
          },
          {
            id: 3,
            pickup_time: '',
            drop_time: '',
            location: ''
          },
          {
            id: 4,
            pickup_time: '',
            drop_time: '',
            location: ''
          },
          {
            id: 5,
            pickup_time: '',
            drop_time: '',
            location: ''
          },
          {
            id: 6,
            pickup_time: '',
            drop_time: '',
            location: ''
          },
          {
            id: 7,
            pickup_time: '',
            drop_time: '',
            location: ''
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
            location: ''
          },
          {
            id: 2,
            pickup_time: '',
            drop_time: '',
            location: ''
          },
          {
            id: 3,
            pickup_time: '',
            drop_time: '',
            location: ''
          },
          {
            id: 4,
            pickup_time: '',
            drop_time: '',
            location: ''
          },
          {
            id: 5,
            pickup_time: '',
            drop_time: '',
            location: ''
          },
          {
            id: 6,
            pickup_time: '',
            drop_time: '',
            location: ''
          },
          {
            id: 7,
            pickup_time: '',
            drop_time: '',
            location: ''
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
            location: ''
          },
          {
            id: 2,
            pickup_time: '',
            drop_time: '',
            location: ''
          },
          {
            id: 3,
            pickup_time: '',
            drop_time: '',
            location: ''
          },
          {
            id: 4,
            pickup_time: '',
            drop_time: '',
            location: ''
          },
          {
            id: 5,
            pickup_time: '',
            drop_time: '',
            location: ''
          },
          {
            id: 6,
            pickup_time: '',
            drop_time: '',
            location: ''
          },
          {
            id: 7,
            pickup_time: '',
            drop_time: '',
            location: ''
          }
        ]
      }
    ]
  }

}
