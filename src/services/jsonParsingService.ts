export default function GetHeaders(source: any): any {
    let headers = [];
    for(const key in source[0]) {
        headers.push({key: key, name: key});
    }
    return headers;
}
