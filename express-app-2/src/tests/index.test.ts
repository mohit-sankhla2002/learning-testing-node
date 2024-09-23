import { app } from '..';
import request from 'supertest';
import { describe, test, expect, it } from '@jest/globals';

describe('POST /sum', () => {
  it('should return 200 and the sum of two positive numbers', async () => {
    const res = await request(app).post('/sum').send({
      a: 1,
      b: 2,
    });

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ answer: 3 });
  });

  it('should return 200 and the sum of two negative numbers', async () => {
    const res = await request(app).post('/sum').send({
      a: -1,
      b: -2,
    });

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ answer: -3 });
  });

  it('should return 200 and the sum of two large numbers', async () => {
    const res = await request(app).post('/sum').send({
      a: 10000,
      b: 999999,
    });

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ answer: 1009999 });
  });
});
