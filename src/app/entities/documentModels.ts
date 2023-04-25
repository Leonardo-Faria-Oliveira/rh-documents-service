import { randomUUID } from 'crypto';

//Document models principal interface, we use to create and list.
export interface DocumentModelsProps {
  title: string;
  text: string;
  fields: string;
  digitalSignature: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  active?: boolean;
  typeId: string;
}

//Update document models interface
export interface DocumentModelsUpdateProps {
  id: string;
  title: string;
  text: string;
  fields: string;
  digitalSignature: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  active?: boolean;
  typeId: string;
}

export class DocumentModels {
  private _id?: string;
  private documentModelsProps: DocumentModelsProps;

  constructor(props: DocumentModelsProps, id?: string) {
    this._id = id ?? randomUUID();
    this.documentModelsProps = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: new Date(),
      active: props.active ?? true,
    };
  }

  public get title(): string {
    return this.documentModelsProps.title;
  }
  public set title(name: string) {
    this.documentModelsProps.title = this.title;
  }

  public get text(): string {
    return this.documentModelsProps.text;
  }
  public set text(text: string) {
    this.documentModelsProps.text = text;
  }

  public get fields(): string {
    return this.documentModelsProps.fields;
  }
  public set fields(fields: string) {
    this.documentModelsProps.fields = fields;
  }

  public get digitalSignature(): boolean {
    return this.documentModelsProps.digitalSignature;
  }
  public set digitalSignature(digitalSignature: boolean) {
    this.documentModelsProps.digitalSignature = digitalSignature;
  }

  public set createdAt(createdAt: Date) {
    this.documentModelsProps.createdAt = createdAt;
  }
  public get createdAt(): Date {
    return this.documentModelsProps.createdAt;
  }

  public get updatedAt(): Date {
    return this.documentModelsProps.updatedAt;
  }
  public set updatedAt(updatedAt: Date) {
    this.documentModelsProps.updatedAt = updatedAt;
  }

  public set active(active: boolean) {
    this.documentModelsProps.active = active;
  }
  public get active() {
    return this.documentModelsProps.active;
  }

  public get typeId(): string {
    return this.documentModelsProps.typeId;
  }
  public set typeId(typeId: string) {
    this.documentModelsProps.typeId = typeId;
  }
}
