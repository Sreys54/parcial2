import { Pinguinos } from "./pinguinos";

export class PinguinosDetail extends Pinguinos {
    constructor(
        id: number,
        name: string,
        scientific_name: string,
        feeding: string,
        global_distribution: string,
        description: string,
        image: string,
    ){
        super(id,name,scientific_name,feeding,global_distribution,description,image)
    }
}
