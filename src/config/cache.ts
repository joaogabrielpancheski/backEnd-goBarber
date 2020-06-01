import { RedisOptions } from 'ioredis';

interface ICacheConfig {
  driver: 'redis';

  config: {
    redis: RedisOptions;
  };
}

const { REDIS_HOST, REDIS_PORT, REDIS_PASS } = process.env;

export default {
  driver: 'redis',

  config: {
    redis: {
      host: REDIS_HOST,
      port: REDIS_PORT,
      password: REDIS_PASS || undefined,
    },
  },
} as ICacheConfig;
