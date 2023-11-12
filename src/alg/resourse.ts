import { Operation } from "./operation";

export class Resource{
    
    constructor(start:number,end:number){
        this.operations = [];
        this.timeStart = start;
        this.timeEnd = end;
        this.freeWorkTime = end - start;
    }

    private timeStart:number;
    private freeWorkTime:number;
    private timeEnd:number;
    private operations:Operation[];

    public defineOperation(operation:Operation){
        if(this.freeWorkTime<=operation.getLeadTime()&&!operation.getInterrupt()){
            return true;
        }
        if(operation.getInterrupt() && this.freeWorkTime>0){
            return true;
        }
        return false;
    }

    public pushOperation(operation:Operation){
        if(this.defineOperation(operation)){
            this.operations.push(operation);
        }
    }
}

export class ResourceGroup{

    constructor(){
        this.resources = [];
    }

    private resources:Resource[];
}