interface IPrimitiveTask {
    PreCondition: () => boolean;
    Action: () => boolean;
    Effect: () => void;
}

export interface ICompoundTask {
    Transitions: ITransition[];
}

export interface ITransition {
    PreCondition: () => boolean;
    Method: TTask[];
}

export type TTask = IPrimitiveTask | ICompoundTask;

interface IDomain {
    RootTask: ICompoundTask;
}


export interface ISensor {

}

export class PlayRunner {
    
    public constructor() {

    }

    public Run() {

    }

}



export class Agent{

    public Sensors: ISensor[] = [];

    public Domain?: IDomain;

    public CurrentTask?: TTask;

    public WorldState: unknown = {};

    private RunPlan(): void {}

    public constructor() {
        const rootTask = this.Domain?.RootTask;
    }

    public Tick(): void {

    }

    public On

    public OnWorldStateChange() {
        this.RunPlan();
        if (this.CurrentTask) {
            this.CurrentTask = this.GetNextTask(this.CurrentTask);
        }       
    }
}