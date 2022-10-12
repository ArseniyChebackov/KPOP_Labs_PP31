/* Task 1 */
console.log(`###############################################`)
console.log(`Task 1:`)


enum Category {
    BusinessAnalyst, 
    Developer, 
    Designer, 
    QA, 
    ScrumMaster
}

interface IntWorker {
id: number 
name: string 
surname: string 
available: boolean 
salary: number 
category: Category
}

function getAllWorkers(): IntWorker[] { 
    let workers = [
        {name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.BusinessAnalyst, id: 0},
        {name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Developer, id: 1 },
        {name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Designer, id: 2},
        {name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.ScrumMaster, id: 3}
    ]

    return workers
}

function getWorkerById(id: number): IntWorker | undefined {
    let workers = getAllWorkers()
    let getWorker = workers.find((worker) => {
        return  worker.id === id
    })

    return getWorker
}

function PrintWorker(worker: IntWorker) {
    console.log(`${worker.name} ${worker.surname} got salary ${worker.salary}`)
}

PrintWorker(getWorkerById(3)!)


/* Task 2 */
console.log(`\n###############################################`)
console.log(`Task 2:`)

interface PrizeLogger { 
    (prize: string): void
} 

interface IntWorker1 {
    id: number 
    name: string 
    surname: string 
    available: boolean 
    salary: number 
    category: Category
    markPrize: PrizeLogger
}

let logPrize: PrizeLogger = (prize: string): void => {
    console.log(prize)
}

logPrize("100001")


/* Task 3 */
console.log(`\n###############################################`)
console.log(`Task 3:`)


interface Person { 
    name: string
    email: string 
}

interface Author extends Person {
    numBooksPublished: number
}

interface Librarian extends Person {
    department: string
    assistCustomer(customer: string): void
}

let favouriteAuthor: Author = {
    name: "Stephen King",
    email: "stephen@gmail.com",
    numBooksPublished: 65
}

let favouriteLibrarian: Librarian = {
    name: "Dowser Smith",
    email: "dowser@gmail.com",
    department: "Philosophy",
    assistCustomer(customer: string): void {
        console.log("Dowser")
    }
}


/* Task 4 */
console.log(`\n###############################################`)
console.log(`Task 4:`)


class UniversityLibrarian implements Librarian {
    name: string
    email: string
    department: string

    assistCustomer(customer: string): void {
        console.log(`${this.name} is assisting ${customer}`)
    }
}

let favouriteLibrarian1: Librarian = new UniversityLibrarian()

favouriteLibrarian1.name = "Steve"
favouriteLibrarian1.assistCustomer("Dowser")


/* Task 5 */
console.log(`\n###############################################`)
console.log(`Task 5:`)



class ReferenceItem1 {

    
    title: string
    year: number
    constructor(newTitle: string, newYear: number) {
        this.title = newTitle 
        this.year = newYear 
        console.log('Creating new ReferenceItem...')
    }

    private _publisher: string 

    get publisher() { let upReg: string = this._publisher.toUpperCase(); return upReg }
    set publisher(newPublisher: string) { this._publisher = newPublisher }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`)
    }
}

class ReferenceItem2 {

    private _publisher: string 
    static department: string = "No Department"
    
    constructor(public title: string, protected year: number) {
        console.log('Creating new ReferenceItem...')
    }

    get publisher() { let upReg: string = this._publisher.toUpperCase(); return upReg }
    set publisher(newPublisher: string) { this._publisher = newPublisher }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year} by department: ${ReferenceItem2.department}`)
    }
}

let ref1: ReferenceItem1 = new ReferenceItem1("The Hitchhiker's Guide to the Galaxy", 1979)
ref1.printItem()
ref1.publisher = "Del Rey"
console.log(ref1.publisher)

console.log("")

let ref2: ReferenceItem2 = new ReferenceItem2("The Stand", 1978)
ref2.printItem()
ref2.publisher  = "Stephen King"
console.log(ref2.publisher)


/* Task 6 */
console.log(`\n###############################################`)
console.log(`Task 6:`)


class Encyclopedia extends ReferenceItem2 {
    constructor(public edition: number, title: string, year: number) {
        super(title, year)
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year} by department: ${ReferenceItem2.department}`)
        console.log(`Edition: ${this.edition}`)
    }
}

let refEncyclopedia : Encyclopedia = new Encyclopedia(101, "Encyclopedia", 2019)
refEncyclopedia.printItem()


/* Task 7 */
console.log(`\n###############################################`)
console.log(`Task 7:`)


abstract class ReferenceItem3 {

    private _publisher: string 
    static department: string = "No Department"
    
    constructor(public title: string, protected year: number) {
        console.log('Creating new ReferenceItem...')
    }

    get publisher() { let upReg: string = this._publisher.toUpperCase(); return upReg }
    set publisher(newPublisher: string) { this._publisher = newPublisher }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year} by department: ${ReferenceItem3.department}`)
    }

    abstract printCitation(): void
}

class Encyclopedia1 extends ReferenceItem3 {
    constructor(public edition: number, title: string, year: number) {
        super(title, year)
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year} by department: ${ReferenceItem3.department}`)
        console.log(`Edition: ${this.edition}`)
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`)
    }
}

let refEncyclopedia1: Encyclopedia1 = new Encyclopedia1(202, "Better Encyclopedia", 2022)
refEncyclopedia1.printItem()
refEncyclopedia1.printCitation()
