export enum Brokers {
  RabbitMQ = 'rabbitmq',
}

export interface IConnectionOptions {
  connectionUrl: string;
  broker?: Brokers;
}

export interface IConnection extends IConnectionOptions {
  broker: Brokers;
}

export default class ConnectionHelper {
  public static get getDefaultBroker() {
    return Brokers.RabbitMQ;
  }

  public static validateConnection(
    connection: IConnectionOptions,
  ): IConnection {
    return {
      ...connection,
      broker: connection.broker || this.getDefaultBroker,
    };
  }
}
