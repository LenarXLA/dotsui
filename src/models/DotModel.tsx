import { CommentModel } from "./CommentModel";

export class DotModel {

    private id: string;
    private x: number;
    private y: number;
    private radius: number;
    private color: string;
    private comments: CommentModel[];
  
    constructor(id: string, x: number, y: number, radius: number, color: string, comments: CommentModel[]) {
      this.id = id;
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.comments = comments;
    }
}
