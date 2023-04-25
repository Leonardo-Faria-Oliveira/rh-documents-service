import { randomUUID } from 'crypto';

//Document types principal interface, we use to create and list.
export interface DocumentTypesProps {
  id?: string;
  name: string;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
  active?: boolean;
}

//Update document types interface
export interface DocumentTypesUpdateProps {
  id: string;
  name: string;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
  active?: boolean;
}

export class DocumentTypes {
  private _id?: string;
  private documentTypesProps: DocumentTypesProps;

  constructor(props: DocumentTypesProps, id?: string) {
    this._id = id ?? randomUUID();
    this.documentTypesProps = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: new Date(),
      active: props.active ?? true,
    };
  }

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this.documentTypesProps.name;
  }
  public set name(name: string) {
    this.documentTypesProps.name = name;
  }

  public get content(): string {
    return this.documentTypesProps.content;
  }
  public set content(content: string) {
    this.documentTypesProps.content = content;
  }
  public set createdAt(createdAt: Date) {
    this.documentTypesProps.createdAt = createdAt;
  }
  public get createdAt(): Date {
    return this.documentTypesProps.createdAt;
  }

  public get updatedAt(): Date {
    return this.documentTypesProps.updatedAt;
  }
  public set updatedAt(updatedAt: Date) {
    this.documentTypesProps.updatedAt = updatedAt;
  }

  public set active(active: boolean) {
    this.documentTypesProps.active = active;
  }
  public get active() {
    return this.documentTypesProps.active;
  }
}
