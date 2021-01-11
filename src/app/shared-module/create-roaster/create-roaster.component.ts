import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { DataService } from 'src/app/_service/data-service.service';
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
  constructor(
    private fb: FormBuilder,
    private dataService: DataService
  ) {
    this.firstForm = this.fb.group({
      user: [''],
      user_type: [''],
    });
    this.secondForm = this.fb.group({
      list: this.fb.array([])
    })
  }

  public submitForm() {
    let data = { arr: this.secondForm.value.list };
    this.dataService.post('admin/createEmployeeRoster', data).subscribe(res => {
      this.dataService.showSuccess(res['responseMessage']);
    })
  }

  ngOnInit() {
    this.callingJQuery();
    // this.getRoasterlist();
    this.getEmployeeList();
  }

  get getListForm(): FormArray {
    return this.secondForm.get('list') as FormArray;
  }

  getForm(): FormArray {
    return this.secondForm.get('list') as FormArray;
  }

  itemOfList(index: number): FormArray {
    return this.getForm().at(index).get("pickup") as FormArray
  }

  public onSelect() {
    // console.log("fir-===========>>>", this.firstForm.value);
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
            pickup_location: '',
            drop_location: ''
          },
          {
            id: 2,
            pickup_time: '',
            drop_time: '',
            pickup_location: '',
            drop_location: ''
          },
          {
            id: 3,
            pickup_time: '',
            drop_time: '',
            pickup_location: '',
            drop_location: ''
          },
          {
            id: 4,
            pickup_time: '',
            drop_time: '',
            pickup_location: '',
            drop_location: ''
          },
          {
            id: 5,
            pickup_time: '',
            drop_time: '',
            pickup_location: '',
            drop_location: ''
          },
          {
            id: 6,
            pickup_time: '',
            drop_time: '',
            pickup_location: '',
            drop_location: ''
          },
          {
            id: 7,
            pickup_time: '',
            drop_time: '',
            pickup_location: '',
            drop_location: ''
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
            pickup_location: '',
            drop_location: ''
          },
          {
            id: 2,
            pickup_time: '',
            drop_time: '',
            pickup_location: '',
            drop_location: ''
          },
          {
            id: 3,
            pickup_time: '',
            drop_time: '',
            pickup_location: '',
            drop_location: ''
          },
          {
            id: 4,
            pickup_time: '',
            drop_time: '',
            pickup_location: '',
            drop_location: ''
          },
          {
            id: 5,
            pickup_time: '',
            drop_time: '',
            pickup_location: '',
            drop_location: ''
          },
          {
            id: 6,
            pickup_time: '',
            drop_time: '',
            pickup_location: '',
            drop_location: ''
          },
          {
            id: 7,
            pickup_time: '',
            drop_time: '',
            pickup_location: '',
            drop_location: ''
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
            pickup_location: '',
            drop_location: ''
          },
          {
            id: 2,
            pickup_time: '05:00 PM',
            drop_time: '08:00 PM',
            pickup_location: 'Hapur',
            drop_location: 'New Delhi'
          },
          {
            id: 3,
            pickup_time: '',
            drop_time: '',
            pickup_location: '',
            drop_location: ''
          },
          {
            id: 4,
            pickup_time: '',
            drop_time: '',
            pickup_location: '',
            drop_location: ''
          },
          {
            id: 5,
            pickup_time: '',
            drop_time: '',
            pickup_location: '',
            drop_location: ''
          },
          {
            id: 6,
            pickup_time: '',
            drop_time: '',
            pickup_location: '',
            drop_location: ''
          },
          {
            id: 7,
            pickup_time: '',
            drop_time: '',
            pickup_location: '',
            drop_location: ''
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
            pickup_location: '',
            drop_location: ''
          },
          {
            id: 2,
            pickup_time: '',
            drop_time: '',
            pickup_location: '',
            drop_location: ''
          },
          {
            id: 3,
            pickup_time: '',
            drop_time: '',
            pickup_location: '',
            drop_location: ''
          },
          {
            id: 4,
            pickup_time: '',
            drop_time: '',
            pickup_location: '',
            drop_location: ''
          },
          {
            id: 5,
            pickup_time: '',
            drop_time: '',
            pickup_location: '',
            drop_location: ''
          },
          {
            id: 6,
            pickup_time: '',
            drop_time: '',
            pickup_location: '',
            drop_location: ''
          },
          {
            id: 7,
            pickup_time: '',
            drop_time: '',
            pickup_location: '',
            drop_location: ''
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
            pickup_location: '',
            drop_location: ''
          },
          {
            id: 2,
            pickup_time: '',
            drop_time: '',
            pickup_location: '',
            drop_location: ''
          },
          {
            id: 3,
            pickup_time: '',
            drop_time: '',
            pickup_location: '',
            drop_location: ''
          },
          {
            id: 4,
            pickup_time: '',
            drop_time: '',
            pickup_location: '',
            drop_location: ''
          },
          {
            id: 5,
            pickup_time: '',
            drop_time: '',
            pickup_location: '',
            drop_location: ''
          },
          {
            id: 6,
            pickup_time: '',
            drop_time: '',
            pickup_location: '',
            drop_location: ''
          },
          {
            id: 7,
            pickup_time: '',
            drop_time: '',
            pickup_location: '',
            drop_location: ''
          }
        ]
      }
    ]
    for (let i = 0; i < this.roasterList.length; i++) {
      this.getListForm.push(this.fb.group({
        id: this.roasterList[i].id,
        name: this.roasterList[i].name,
        pickup: this.fb.array([])
      }))
      for (let j = 0; j < this.roasterList[i].pickup.length; j++) {
        this.getListForm.controls[i]['controls'].pickup.push(this.fb.group({
          id: this.roasterList[i].pickup[j].id,
          pickup_time: this.roasterList[i].pickup[j].pickup_time,
          drop_time: this.roasterList[i].pickup[j].drop_time,
          pickup_location: this.roasterList[i].pickup[j].pickup_location,
          drop_location: this.roasterList[i].pickup[j].drop_location
        }))
      }
    }
  }

  public getEmployeeList() {
    let data = {};
    this.dataService.post('admin/employeeList', data).subscribe(res => {
      for (let i = 0; i < res['data'].length; i++) {
        this.getListForm.push(this.fb.group({
          emp_id: res['data'][i].emp_id,
          name: res['data'][i].first_name ? (res['data'][i].last_name ? res['data'][i].first_name + ' ' + res['data'][i].last_name : res['data'][i].first_name) : (res['data'][i].first_name ? res['data'][i].first_name : ''),
          pickup: this.fb.array([])
        }))
        if (res['data'][i].pickup && res['data'][i].pickup.length) {
          for (let j = 0; j < res['data'][i].pickup.length; j++) {
            this.getListForm.controls[i]['controls'].pickup.push(this.fb.group({
              id: res['data'][i].pickup[j].id || '',
              pickup_time: res['data'][i].pickup[j].pickup_time || '',
              drop_time: res['data'][i].pickup[j].drop_time || '',
              pickup_location: res['data'][i].pickup[j].pickup_location || '',
              drop_location: res['data'][i].pickup[j].drop_location || '',
              date: res['data'][i].pickup[j].date || ''
            }))
          }
        }
        else {
          for (let j = 0; j < 5; j++) {
            this.getListForm.controls[i]['controls'].pickup.push(this.fb.group({
              id: '',
              pickup_time: '',
              drop_time: '',
              pickup_location: '',
              drop_location: '',
              date: `2021-01-${j + 18}`
            }))
          }
        }
      }
    })
  }

}
