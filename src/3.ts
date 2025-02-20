interface IComment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

const COMMENTS_URL: string = 'https://jsonplaceholder.typicode.com/comments';

const getData = async (url: string): Promise<IComment[]> => {
    const response: Response = await fetch(url);

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json() as IComment[];
}

getData(COMMENTS_URL)
    .then((data: IComment[]) => {
        data.forEach((comment) => {
            console.log(`ID: ${comment.id}, Email: ${comment.email}`);
        });
    });