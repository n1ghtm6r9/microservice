import { connect as amqpConnect, Connection } from 'amqplib';

export interface IAmqp {
  reqName: string;
  resName: string;
  options: IAmqpOptions;
}

export interface IAmqpOptions {
  name: string;
  url: string;
}

export default class AmqpApp implements IAmqp {
  reqName: string;
  resName: string;
  options: IAmqpOptions;

  connection?: Connection;

  constructor(options: IAmqpOptions) {
    this.options = options;

    this.reqName = `${this.options.name}:requests`;
    this.resName = `${this.options.name}:responses`;
  }

  public async createConnection(
    reconnect: boolean = true,
  ): Promise<Connection> {
    if (!this.connection) {
      this.connection = await amqpConnect(this.options.url);

      if (reconnect) {
        ['error', 'close'].forEach((event) => {
          this.connection?.on(event, this.reconnectConnection);
        });
      }
    }

    return this.connection;
  }

  private reconnectConnection() {
    this.connection = undefined;
    this.createConnection();
  }
}
