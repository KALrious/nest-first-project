import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface {
  listenTo(): string | Function {
    console.log('action');
  }
  beforeInsert(event: InsertEvent<any>): void | Promise<any> {
    console.log('before insert');
  }
  afterInsert(event: InsertEvent<any>): void | Promise<any> {
    console.log('after insert');
  }
}
