import ConnectionHelper, {
  IConnection,
  IConnectionOptions,
} from './helpers/ConnectionHelper';

export interface IMicroServiceOptions {
  name: string;
  connection: IConnectionOptions;
}

export default class MicroService {
  private _name: string;
  private _connection: IConnection;

  constructor({ name, connection }: IMicroServiceOptions) {
    this._name = name;
    this._connection = ConnectionHelper.validateConnection(connection);
  }
}
