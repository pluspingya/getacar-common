import { describe, expect, it } from '@jest/globals';
import { substituteWithJSONata } from './strings';

describe('substituteWithJSONata', () => {
  it('replaces JSONata expressions with values', async () => {
    const template = 'Hello {user.name}!';
    const data = { user: { name: 'Alice' } };
    await expect(substituteWithJSONata(template, data)).resolves.toBe('Hello Alice!');
  });

  it('formats Date values using provided timezone and format', async () => {
    const template = 'Date: {date}';
    const data = {
      date: new Date('2023-01-01T00:00:00Z'),
      timezone: 'UTC',
      dateTimeFormat: 'yyyy-MM-dd',
    };
    await expect(substituteWithJSONata(template, data)).resolves.toBe('Date: 2023-01-01');
  });
});
