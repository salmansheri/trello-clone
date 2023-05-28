interface Board {
    columns: Map<TypedColumns, Column>; 
} 

type TypedColumns = "todo" | "inProgress" | "done"; 

interface Column {
    id: TypedColumns; 
    todos: Todos[]

}

interface Todo  {
    $id: string; 
    $createdAt: string; 
    title: string; 
    status: TypedColumns; 
    image?: Image; 
}

interface Image {
    bucketId: string; 
    fileId: string; 

}