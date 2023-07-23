import { db } from "./config";
import type { Post } from "./schema";
import { posts } from "./schema";


export interface BoundingBox {
    xMin: number;
    xMax: number;
    yMin: number;
    yMax: number;
}

export async function getPostInBbox(bbox: BoundingBox): Promise<Post[]> {
    const postsInView = await db.select().from(posts)


    return postsInView;
}

// export async function getRelatedPosts(postId: number, radius: number): Promise<Post[]> {

//   const post = await db.select().from(posts).where(eq(posts.id, postId))
//   if (!post) {
//     throw new Error("Post not found");
//   }
//     const bbox: BoundingBox = {
//         xMin: post.x - radius,
//         xMax: post.x + radius,
//         yMin: post.y - radius,
//         yMax: post.y + radius,
//     };
//     const postsInView = await getPostInBbox(bbox);

//     return postsInView;
// }
