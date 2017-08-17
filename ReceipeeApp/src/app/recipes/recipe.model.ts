export class Recipe {
    public name : String ;
    public  description : String;
    public img_url : String;
    
    
    constructor(name:String, description:String, img_url:String) {
        this.name = name;
        this.description = description;
        this.img_url = img_url;
    }
}