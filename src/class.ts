export class Department {
    name: string;
    
    constructor(n: string) {
        this.name = n
    }
}

export const accounting = new Department('Accounting');
console.log(accounting);


export class C {
    private x = 10;
    getX = () => this.x;
    setX = (newVal: number) => { this.x = newVal; }
}

export let x = new C();
export let y = { ...{ some: "value" } };

console.log(x, y);