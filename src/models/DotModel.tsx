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


{/* <Circle
key={dot.id}
id={dot.id}
x={dot.x}
y={dot.y}
radius={dot.radius} 
fill={dot.color} */}
// numPoints={5}
// innerRadius={20}
// outerRadius={40}
// fill="#89b717"
// opacity={0.8}
// draggable
// rotation={star.rotation}
// shadowColor="black"
// shadowBlur={10}
// shadowOpacity={0.6}
// shadowOffsetX={star.isDragging ? 10 : 5}
// shadowOffsetY={star.isDragging ? 10 : 5}
// scaleX={star.isDragging ? 1.2 : 1}
// scaleY={star.isDragging ? 1.2 : 1}
// onDragStart={handleDragStart}
// onDragEnd={handleDragEnd}
// />