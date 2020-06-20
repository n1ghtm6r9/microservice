// !!! this class needs to change the provider (now it is alpha version)

import * as express from 'express';

export type HttpCallBack = (req: express.Request, res: express.Response) => any;
export type HttpErrCallBack = (err: any) => void;

export default class Server {
  private _expressServer: express.Express;

  constructor() {
    this._expressServer = express();
  }

  public get(path: string, callback: HttpCallBack) {
    this._expressServer.get(path, callback);
  }

  public post(path: string, callback: HttpCallBack) {
    this._expressServer.post(path, callback);
  }

  public put(path: string, callback: HttpCallBack) {
    this._expressServer.put(path, callback);
  }

  public delete(path: string, callback: HttpCallBack) {
    this._expressServer.delete(path, callback);
  }

  public use(path: string, callback: HttpCallBack) {
    this._expressServer.use(path, callback);
  }

  public all(path: string, callback: HttpCallBack) {
    this._expressServer.all(path, callback);
  }

  public listen(port: number, errCallback?: HttpErrCallBack) {
    console.info(`Starting to listen ${port} port`);

    this._expressServer.listen(port, errCallback);
  }
}
