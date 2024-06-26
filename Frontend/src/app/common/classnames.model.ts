import { Document } from "../models/document.model";
import { EntityObject } from "../models/entityObjects.model";
import { Role } from "../services/roles.service";

export class EntityObjectDefinition<T extends EntityObject> {
    public classname: string;
    public type: { new(): T };
    constructor(classname: string, type: { new(): T }) {
        this.classname = classname;
        this.type = type;
    }
}

export class Classnames {

    /**
     * Default ones
     */
    public static _Role: EntityObjectDefinition<Role> = new EntityObjectDefinition<Role>("_Role", Role);
    public static _User: string = "_User";
    public static File: string = "_File";
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    public static Document: EntityObjectDefinition<Document> = new EntityObjectDefinition<Document>("Document", Document);
}