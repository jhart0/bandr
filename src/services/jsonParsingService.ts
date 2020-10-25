// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function GetHeaders(source: any = {}): unknown {
    const headers = []
    for (const key in source[0]) {
        headers.push({ key: key, name: key })
    }

    return headers
}
