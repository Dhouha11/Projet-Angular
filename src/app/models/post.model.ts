export class Post {
  id :number;
  title:string;
  contenu:string;
  constructor(i:number,t:string,c:string) {
    this.id=i;
    this.title=t;
    this.contenu=c;
  }
}
