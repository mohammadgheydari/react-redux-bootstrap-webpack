export default function addNumber(number) {
    return {
        type: "ADD",
        payload: number
    }
}
export default function subtractNumber(number) {
    return {
        type: "SUBTRACT",
        payload: number
    }
}