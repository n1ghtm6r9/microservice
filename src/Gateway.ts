import ConnectionHelper, {
  IConnection,
  IConnectionOptions,
} from './helpers/ConnectionHelper';
import Server from './Server';

export interface IGateway {
  options: IGatewayOptions;
}

export interface IGatewayOptions {
  microservices: string[];
  connection: IConnectionOptions;
}

export default class Gateway extends Server {
  private _connection: IConnection;

  constructor({ connection }: IGatewayOptions) {
    super();

    this._connection = ConnectionHelper.validateConnection(connection);
  }
}
