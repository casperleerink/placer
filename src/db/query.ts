import { eq, sql } from "drizzle-orm";
import { db } from "./config";
import { posts } from "./schema";


export interface BoundingBox {
    xMin: number;
    xMax: number;
    yMin: number;
    yMax: number;
}
export interface Post {
  id: number;
  x: number;
  y: number;
}
export async function getPostInBbox(bbox: BoundingBox): Promise<Post[]> {
    const postsInView = await db.select().from(posts).where(
        sql`x >= ${bbox.xMin} AND x <= ${bbox.xMax} AND y >= ${bbox.yMin} AND y <= ${bbox.yMax}`);


    return postsInView;
}

export async function getRelatedPosts(postId: number, radius: number): Promise<Post[]> {

  const post = await db.select().from(posts).where(eq(posts.id, postId))
  if (!post) {
    throw new Error("Post not found");
  }
    const bbox: BoundingBox = {
        xMin: post.x - radius,
        xMax: post.x + radius,
        yMin: post.y - radius,
        yMax: post.y + radius,
    };
    const postsInView = await getPostInBbox(bbox);

    return postsInView;
}
