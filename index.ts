
import { decodeAddress } from '@polkadot/util-crypto';

export const nativeToAddr32 = (addr: string) =>
  '0x' + Buffer.from(decodeAddress(addr)).toString('hex');

const addrs = [
  '23AdbsfRysaabyrWS2doCFsKisvt7dGbS3wQFXRS6pNbQY8G',
  '25fqepuLngYL2DK9ApTejNzqPadUUZ9ALYyKWX2jyvEiuZLa',
  '23xqWQqdAKf4xwuKcCmvR5sQb8EPDKFzSGGtxqZjwKwtgiWM',
];

for (const addr of addrs) {
  const addr32 = nativeToAddr32(addr);
  console.log({ addr, addr32 });
}
