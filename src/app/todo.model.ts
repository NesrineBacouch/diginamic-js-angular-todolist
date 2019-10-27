export class Todo  {



    public id: number;

    public label : string;

    constructor( id, label) {

        this.id = id;

        this.label = label;

    }

}
export let Todos: Todo[];