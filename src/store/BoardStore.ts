import { create } from 'zustand';
import { getTodosGroupedByColumn } from '@/libs/getTodosGroupedByColumn'; 

interface BoardState {
    board: Board
    getBoard: () => void; 

}

const useBoardStore = create<BoardState>((set) => ({
    board: {
        columns: new Map<TypedColumns, Column>(),
    }, 
    getBoard: async() => {
       
        const board = await getTodosGroupedByColumn();
        // @ts-ignore
        set({ board }) 
    }
})); 

export default useBoardStore; 