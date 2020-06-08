///<reference path='index.d.ts' />

declare module '@nm/micriservice' {

    interface IMicroService {
        options: IMicroServiceOptions;
    }

    interface IMicroServiceOptions extends IMicroService {
        microservices: string[];
        connection: IConnection;
    }

}