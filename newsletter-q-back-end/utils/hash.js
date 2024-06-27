import crypto from 'crypto';

export default async function stringToHash(str) {
    const hash = crypto.createHash('sha256', process.env.HASH_KEY)

    hash.update(str)

    const hashAsString = hash.digest('hex')

    return hashAsString
}