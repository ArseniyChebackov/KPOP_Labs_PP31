enum Category {
    BusinessAnalyst, 
    Developer, 
    Designer, 
    QA, 
    ScrumMaster
}

function getAllWorkers(){
    let workers = [
        {Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.BusinessAnalyst, id: 0},
        {Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Developer, id: 1 },
        {Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Designer, id: 2},
        {Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.ScrumMaster, id: 3}
        ]

        return workers
}

/* Task 1 */
console.log(`###############################################`)
console.log(`Task 1:`)

function logFirstAvailable(workers: {Name: string, surname: string, available: boolean, salary: number}[]){
    console.log(`Кількість робітників: ${workers.length}`)

    for(let worker of workers){
        if(worker.available) {
            console.log(`${worker.Name} ${worker.surname} доступний`)
            break
        }
    }
}

logFirstAvailable(getAllWorkers())

/* Task2 */
console.log(`\n###############################################`)
console.log(`Task 2: `)

function getWorkersNamesByCategory (category: Category): Array<string> {
    let surnames: Array<string> = []
    let workers = getAllWorkers()
    for(let worker of workers){
        if(worker.category === category){
            surnames.push(worker.surname)
        }
    }
    return surnames
}

function logWorkersNames(names: string[]): void{
    names.forEach((name) => {
            console.log(name)
        }
    )
}

logWorkersNames(getWorkersNamesByCategory(Category.BusinessAnalyst))


/* Task3 */
console.log(`\n###############################################`)
console.log(`Task 3: `)

function getWorkersById(id: number){
    let workers = getAllWorkers()
    let getWorker = workers.find ((worker) => {
        return worker.id === id
    })

    let workerCred = {
        name: getWorker?.Name,
        surname: getWorker?.surname,
        salary: getWorker?.salary
    }

    return workerCred
}

getAllWorkers().forEach((worker) => {
    if(worker.category === Category.Developer) {
        console.log(`${worker.Name} ${worker.surname}`)
    }
})

console.log(getWorkersById(1))

/* Task4 */
console.log(`\n###############################################`)
console.log(`Task 4:`)


function createCustomerID(name: string, id: number): string{
    return name + " " + id
}

const myID: string = createCustomerID("Ann", 10)
console.log(myID)

let IdGenerator: typeof createCustomerID = (name: string, id: number): string => {
    return name + " " + id
}

IdGenerator = createCustomerID

console.log(IdGenerator("Arseniy", 4))


/* Task5 */
console.log(`\n###############################################`)
console.log(`Task 5.1 createCustomer():`)

function createCustomer(name: string, age?: number, city?: string): void{
    console.log(`${name} ${age ? age : ''} ${city ? city : ''}`)
}

createCustomer("Arseniy", 19, "Kyiv")

console.log(`\n###############################################`)
console.log(`Task 5.2 getWorkersNamesByCategory():`)

function getWorkersNamesByCategory1(category: Category = Category.ScrumMaster): Array<string>{
    let surnames: Array<string> = []
    let workers = getAllWorkers()

    for(let worker of workers) {
        if(worker.category === category) {
            surnames.push(worker.surname)
        }
    }

    return surnames
}

console.log(getWorkersNamesByCategory1())

console.log(`\n###############################################`)
console.log(`Task 5.3 logFirstAvailable():`)

function logFirstAvailable1(
    workers: {Name: string, surname: string, available: boolean, salary: number}[] = getAllWorkers()
) : void {
    console.log(`Number of workers: ${workers.length}`)

    for(let worker of workers) {
        if(worker.available) {
            console.log(`${worker.Name} ${worker.surname} is available`)
            break
        }
    }
}

logFirstAvailable1()

function getWorkersById1(id: number) {
    let workers = getAllWorkers()
    let foundWorker = workers.find((worker) => {
        return worker.id === id
    })

    return foundWorker
}

function checkoutWorkers(customer: string, ...workerIds: number[]): string[] {
    let available: string[] = []
    workerIds.forEach((id) => {
        let worker = getWorkersById1(id)
        if(worker?.available) {
            available.push(worker.Name + ' ' + worker.surname)
        }
    })

    console.log(`Customer: ${customer}`)

    return available
}

console.log(`\n###############################################`)
console.log(`Task 5.5 myWorkers:`)

let myWorkers = checkoutWorkers('Ann', 1, 2, 4)

myWorkers.forEach((name) => {
    console.log(name)
})
