///<reference path='MicroService.d.ts' />
///<reference path='Amqp.d.ts' />

declare module '@nm/micriservice' {

    enum Brokers {
        RabbitMQ = 'rabbitmq'
    }

    interface IConnection {
        amqpUrl: string;
        broker: Brokers;
    }

}