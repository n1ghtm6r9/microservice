///<reference path='index.d.ts' />

declare module '@nm/micriservice' {

    interface IAmqp {
        reqName: string;
        resName: string;
        options: IAmqpOptions;
    }

    interface IAmqpOptions {
        name: string;
        url: string;
    }

}