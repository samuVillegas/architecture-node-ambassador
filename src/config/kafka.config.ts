import { Kafka } from "kafkajs";
const kafka = new Kafka({
  clientId: "email-consumer",
  brokers: [process.env.BROKER_KAFKA],
  ssl: true,
  sasl: {
    mechanism: "plain",
    username: process.env.USERNAME_KAFKA,
    password: process.env.PASSWORD_KAFKA,
  },
});

export = kafka.producer();
