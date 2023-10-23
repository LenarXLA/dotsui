export class CommentModel {

    private id: string;
    private text: string;
    private bgcolor: string;
  
    constructor(id: string, text: string, bgcolor: string) {
      this.id = id;
      this.text = text;
      this.bgcolor = bgcolor;
    }
}