/**
 * Example:
 * ```typescript
 * type OrderProps = { id: string } & OneOf<{ channel: Channel }, { channelId: string, channelName: string }>
 *
 * const channel: Channel = Channel.create(channelProps).getValue();
 * // Valid
 * const propsA: OrderProps = { id: 'alpha', channel };
 * const propsB: OrderProps = { id: 'bravo', channelId: 'ck123', channelName: 'channel-123' };
 *
 * // Invalid
 * const propsX: OrderProps = { id: 'alpha' }; // neither channel nor channelId + channelName
 * const propsY: OrderProps = { id: 'bravo', channelId: 'ck123' }; // missing channelName
 * const propsZ: OrderProps = { id: 'bravo', channelName: 'channel-123' }; // missing channelId
 * ```
 */
type OneOf<TypeA, TypeB> = (TypeA & Partial<TypeB>) | (Partial<TypeA> & TypeB);

export default OneOf;