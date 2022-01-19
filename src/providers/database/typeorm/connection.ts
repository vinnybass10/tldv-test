import { createConnection, getConnectionOptions } from 'typeorm';

interface IOptions {
  host: string;
}

console.log('Starting connection');
getConnectionOptions().then(options => {
  const newOptions = options as IOptions;
  newOptions.host = 'db';
  createConnection({
    ...options,
  }).then(() => {
    console.log('Connection stabelish');
  });
});
