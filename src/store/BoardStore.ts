import { create } from 'zustand';
import { getTodosGroupedByColumn } from '@/libs/getTodosGroupedByColumn'; 
import { databases } from '@/appWrite';

interface BoardState {
    board: Board
    getBoard: () => void; 
    setBoardState: (board: Board) => void; 
    updateTodoInDB: (todo: Todo, columnId: TypedColumns) => void; 

}

const useBoardStore = create<BoardState>((set) => ({
    board: {
        columns: new Map<TypedColumns, Column>(),
    }, 
    getBoard: async() => {
       
        const board = await getTodosGroupedByColumn();
        // @ts-ignore
        set({ board }) 
    },
    setBoardState: (board) => set({ board }),
    updateTodoInDB: async(todo, columnId)  => {
        await databases.updateDocument(
            process.env.NEXT_PUBLIC_DATABASE_ID!,
            process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
            todo.$id,
            {
                title: todo.title,
                status: columnId, 
            }

        )

    }
})); 

export default useBoardStore; 