import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, elementAt } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    data =
        [
            {
                "name": "Ruby Perry",
                "studentID": 854,
                "gender": "Female",
                "email": "ruby.perry@example.com",
                "phone": 1234567890,
                "attendance_details": [
                    {
                        "date": "2023-01-01",
                        "status": "Present"
                    }
                ]
            },
            {
                "name": "Louis Johnson",
                "studentID": 423,
                "gender": "Male",
                "email": "louis.johnson@example.com",
                "phone": 2345678901,
                "attendance_details": [
                    {
                        "date": "2023-01-01",
                        "status": "Absent"
                    }
                ]
            },
            {
                "name": "Ivy Mitchell",
                "studentID": 729,
                "gender": "Female",
                "email": "ivy.mitchell@example.com",
                "phone": 3456789012,
                "attendance_details": [
                    {
                        "date": "2023-01-01",
                        "status": "Present"
                    }
                ]
            },
            {
                "name": "Eleanor Green",
                "studentID": 615,
                "gender": "Female",
                "email": "eleanor.green@example.com",
                "phone": 4567890123,
                "attendance_details": [
                    {
                        "date": "2023-01-01",
                        "status": "Absent"
                    }
                ]
            },
            {
                "name": "Mason James",
                "studentID": 903,
                "gender": "Male",
                "email": "mason.james@example.com",
                "phone": 5678901234,
                "attendance_details": [
                    {
                        "date": "2023-01-01",
                        "status": "Present"
                    }
                ]
            },
            {
                "name": "Aria Hernandez",
                "studentID": 227,
                "gender": "Female",
                "email": "aria.hernandez@example.com",
                "phone": 6789012345,
                "attendance_details": [
                    {
                        "date": "2023-01-01",
                        "status": "Present"
                    }
                ]
            },
            {
                "name": "Michael Scott",
                "studentID": 854,
                "gender": "Male",
                "email": "michael.scott@example.com",
                "phone": 7890123456,
                "attendance_details": [
                    {
                        "date": "2023-01-01",
                        "status": "Absent"
                    }
                ]
            },
            {
                "name": "Leah Patel",
                "studentID": 711,
                "gender": "Female",
                "email": "leah.patel@example.com",
                "phone": 8901234567,
                "attendance_details": [
                    {
                        "date": "2023-01-01",
                        "status": "Present"
                    }
                ]
            },
            {
                "name": "Ethan Turner",
                "studentID": 309,
                "gender": "Male",
                "email": "ethan.turner@example.com",
                "phone": 9012345678,
                "attendance_details": [
                    {
                        "date": "2023-01-01",
                        "status": "Absent"
                    }
                ]
            },
            {
                "name": "Sofia Brown",
                "studentID": 301,
                "gender": "Female",
                "email": "sofia.brown@example.com",
                "phone": 1234567890,
                "attendance_details": [
                    {
                        "date": "2023-01-01",
                        "status": "Present"
                    }
                ]
            },
            {
                "name": "Luke Martinez",
                "studentID": 477,
                "gender": "Male",
                "email": "luke.martinez@example.com",
                "phone": 2345678901,
                "attendance_details": [
                    {
                        "date": "2023-01-01",
                        "status": "Present"
                    }
                ]
            },
            {
                "name": "Grace Evans",
                "studentID": 789,
                "gender": "Female",
                "email": "grace.evans@example.com",
                "phone": 3456789012,
                "attendance_details": [
                    {
                        "date": "2023-01-01",
                        "status": "Absent"
                    }
                ]
            },
            {
                "name": "William Lee",
                "studentID": 836,
                "gender": "Male",
                "email": "william.lee@example.com",
                "phone": 4567890123,
                "attendance_details": [
                    {
                        "date": "2023-01-01",
                        "status": "Present"
                    }
                ]
            },
            {
                "name": "Mia Davis",
                "studentID": 802,
                "gender": "Female",
                "email": "mia.davis@example.com",
                "phone": 5678901234,
                "attendance_details": [
                    {
                        "date": "2023-01-01",
                        "status": "Absent"
                    }
                ]
            },
            {
                "name": "Elijah King",
                "studentID": 110,
                "gender": "Male",
                "email": "elijah.king@example.com",
                "phone": 6789012345,
                "attendance_details": [
                    {
                        "date": "2023-01-01",
                        "status": "Present"
                    }
                ]
            },
            {
                "name": "Audrey Rivera",
                "studentID": 481,
                "gender": "Female",
                "email": "audrey.rivera@example.com",
                "phone": 7890123456,
                "attendance_details": [
                    {
                        "date": "2023-01-01",
                        "status": "Absent"
                    }
                ]
            },
            {
                "name": "Anthony Adams",
                "studentID": 628,
                "gender": "Male",
                "email": "anthony.adams@example.com",
                "phone": 8901234567,
                "attendance_details": [
                    {
                        "date": "2023-01-01",
                        "status": "Absent"
                    }
                ]
            },
            {
                "name": "Madison Scott",
                "studentID": 344,
                "gender": "Female",
                "email": "madison.scott@example.com",
                "phone": 9012345678,
                "attendance_details": [
                    {
                        "date": "2023-01-01",
                        "status": "Present"
                    }
                ]
            },
            {
                "name": "John Baker",
                "studentID": 999,
                "gender": "Male",
                "email": "john.baker@example.com",
                "phone": 1234567890,
                "attendance_details": [
                    {
                        "date": "2023-01-01",
                        "status": "Present"
                    }
                ]
            },
            {
                "name": "Scarlett Cooper",
                "studentID": 518,
                "gender": "Female",
                "email": "scarlett.cooper@example.com",
                "phone": 2345678901,
                "attendance_details": [
                    {
                        "date": "2023-01-01",
                        "status": "Absent"
                    }
                ]
            },
            {
                "name": "Lucas Torres",
                "studentID": 806,
                "gender": "Male",
                "email": "lucas.torres@example.com",
                "phone": 3456789012,
                "attendance_details": [
                    {
                        "date": "2023-01-01",
                        "status": "Absent"
                    }
                ]
            },
            {
                "name": "Chloe Clark",
                "studentID": 245,
                "gender": "Female",
                "email": "chloe.clark@example.com",
                "phone": 4567890123,
                "attendance_details": [
                    {
                        "date": "2023-01-01",
                        "status": "Absent"
                    }
                ]
            },
            {
                "name": "Andrew Hernandez",
                "studentID": 397,
                "gender": "Male",
                "email": "andrew.hernandez@example.com",
                "phone": 5678901234,
                "attendance_details": [
                    {
                        "date": "2023-01-01",
                        "status": "Present"
                    }
                ]
            },
            {
                "name": "Oliver Thomas",
                "studentID": 182,
                "gender": "Male",
                "email": "oliver.thomas@example.com",
                "phone": 6789012345,
                "attendance_details": [
                    {
                        "date": "2023-01-01",
                        "status": "Present"
                    }
                ]
            },
            {
                "name": "Avery Rodriguez",
                "studentID": 961,
                "gender": "Female",
                "email": "avery.rodriguez@example.com",
                "phone": 7890123456,
                "attendance_details": [
                    {
                        "date": "2023-01-01",
                        "status": "Present"
                    }
                ]
            },
            {
                "name": "Jaxon Wright",
                "studentID": 409,
                "gender": "Male",
                "email": "jaxon.wright@example.com",
                "phone": 8901234567,
                "attendance_details": [
                    {
                        "date": "2023-01-01",
                        "status": "Absent"
                    }
                ]
            },
            {
                "name": "Sophia Foster",
                "studentID": 716,
                "gender": "Female",
                "email": "sophia.foster@example.com",
                "phone": 9012345678,
                "attendance_details": [
                    {
                        "date": "2023-01-01",
                        "status": "Present"
                    }
                ]
            },
            {
                "name": "Sebastian Bailey",
                "studentID": 587,
                "gender": "Male",
                "email": "sebastian.bailey@example.com",
                "phone": 1234567890,
                "attendance_details": [
                    {
                        "date": "2023-01-01",
                        "status": "Present"
                    }
                ]
            },
            {
                "name": "Peyton Howard",
                "studentID": 246,
                "gender": "Female",
                "email": "peyton.howard@example.com",
                "phone": 2345678901,
                "attendance_details": [
                    {
                        "date": "2023-01-01",
                        "status": "Present"
                    }
                ]
            },
            {
                "name": "Christopher Davis",
                "studentID": 452,
                "gender": "Male",
                "email": "christopher.davis@example.com",
                "phone": 3456789012,
                "attendance_details": [
                    {
                        "date": "2023-01-01",
                        "status": "Absent"
                    }
                ]
            },
            {
                "name": "Makayla Allen",
                "studentID": 919,
                "gender": "Female",
                "email": "makayla.allen@example.com",
                "phone": 4567890123,
                "attendance_details": [
                    {
                        "date": "2023-01-01",
                        "status": "Absent"
                    }
                ]
            },
            {
                "name": "Alexander Rodriguez",
                "studentID": 972,
                "gender": "Male",
                "email": "alexander.rodriguez@example.com",
                "phone": 5678901234,
                "attendance_details": [
                    {
                        "date": "2023-01-01",
                        "status": "Present"
                    }
                ]
            },
            {
                "name": "Brianna Mitchell",
                "studentID": 704,
                "gender": "Female",
                "email": "brianna.mitchell@example.com",
                "phone": 6789012345,
                "attendance_details": [
                    {
                        "date": "2023-01-01",
                        "status": "Absent"
                    }
                ]
            },
            {
                "name": "Benjamin Lee",
                "studentID": 648,
                "gender": "Male",
                "email": "benjamin.lee@example.com",
                "phone": 7890123456,
                "attendance_details": [
                    {
                        "date": "2023-01-01",
                        "status": "Absent"
                    }
                ]
            },
            {
                "name": "Emma Hernandez",
                "studentID": 327,
                "gender": "Female",
                "email": "emma.hernandez@example.com",
                "phone": 8901234567,
                "attendance_details": [
                    {
                        "date": "2023-01-01",
                        "status": "Absent"
                    }
                ]
            },
            {
                "name": "Carter Williams",
                "studentID": 542,
                "gender": "Male",
                "email": "carter.williams@example.com",
                "phone": 9012345678,
                "attendance_details": [
                    {
                        "date": "2023-01-01",
                        "status": "Present"
                    }
                ]
            }
        ]
    title = 'Angular_Project';
    // constructor(private http : HttpClient){}
    // addPerson(){
    //   this.data.forEach(element => {
    //     return this.http.post('https://65488824dd8ebcd4ab23086e.mockapi.io/Details',element).subscribe(); 
    //     console.log(element);
    //   });
    // }
    constructor(private http: HttpClient) { }
    addPerson() {
        this.data.forEach(element=>{
            return this.http.post('https://65488824dd8ebcd4ab23086e.mockapi.io/studentDetails',element).subscribe();
            console.log(element);
        })
    }
}
