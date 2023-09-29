import { child, get, getDatabase, ref, set } from '@firebase/database';

export interface Note {
    timestamp: number,
    content: string,
    date: string,
}

export const updateRemote = async (date: string, content: string) => {
    const database = getDatabase();
    const now = Date.now();

    set(ref(database, `notes/${now}`), {
        timestamp: now,
        content: content,
        date: date,
    });
}

export const getRemote = async (): Promise<Array<Note>> => {
    const dbRef = ref(getDatabase());
    const rawNotes = await get(child(dbRef, `notes`)).then((snapshot) => {
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            return [];
        }
    });
    // Create items array
    const items = Object.keys(rawNotes).map(function(key) {
        return [key, rawNotes[key]];
    });

    // Sort the array decreasing based on the first element
    items.sort(function(first, second) {
        return - second[0] + first[0];
    });

    return items.map((item) => item[1] as Note);
}