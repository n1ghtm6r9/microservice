import { Gateway } from '../../src';

const app = new Gateway({
    microservices: ['service-one'],
    connection: {
        connectionUrl: ''
    }
});

app.listen(3000);




