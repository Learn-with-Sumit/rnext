class Student {
    private name: string;
    protected roll: number;
    courses: Array<string>;

    constructor(name: string, roll: number, courses: Array<string>)
    {
        this.name = name;
        this.roll = roll;
        this.courses = courses;
    }
}

class HSCStudendant extends Student {
    backlogs: Array<number>;

    constructor(name: string, roll: number, courses: Array<string>,backlogs: Array<number>) {
        super(name, roll, courses)
        this.backlogs = backlogs;
    }
}