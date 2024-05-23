class Student{
    constructor(first, last, subject){
        this.first = first;
        this.last = last;
        this.subject = subject;
    }
    getProfiles(){
        return [
            this.first,
            this.last,
            this.subject
        ]
    }
}

const studentas = new Student("Jonas", "Jonaitis", "JS");
console.log(studentas.getProfiles());

class VipStudent extends Student{
    constructor(first, last, subject, status){
        super(first, last, subject);
        this.status = status;
    }
}

studentasV = new VipStudent("Petras", "Petraitis", "JS", "Emperor");

console.log(studentasV.getProfiles())