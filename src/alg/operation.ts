export class Operation{

    constructor(leadTime:number,interrupt:boolean){
        this.leadTime = leadTime;
        this.interrupt = interrupt;
    }

    private resourseGroupId?:number;
    private nest?: Operation;
    private prev?: Operation;
    private leadTime:number;
    private interrupt:boolean;

    public getLeadTime():number{
        return this.leadTime;
    }

    public getInterrupt():boolean{
        return this.interrupt;
    }
}

export class Consignment{

    constructor(prior: number){
        this.operations = [];
        this.prior = prior;
    }

    private operations:Operation[];
    private prior:number;

}