import { Attendance } from "./attendance"

export interface StudentDetail {
    id? : number
    name: string,
    studentID: number,
    gender: string,
    email: string,
    phone: number,
    attendance_details?: Array<Attendance>
}
