export default function createConnection(serverUrl, roomId) {
    return {
        connect: () => {
            console.log(`Connected ${serverUrl} to room ${roomId}`);
        },
        disconnect: () => {
            console.log(`Disconnected ${serverUrl} from room ${roomId}`);
        },
    };
}

export function logVisit(roomId) {
    console.log(`User joined room ${roomId}`);
}
