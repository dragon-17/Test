import { $ } from "./Util/helper";


console.log("🐍🐉Hello¡¡¡");

function 𖠀𖠰(){
    let x=7;let y=4;
    
    let 𖠘= ['𖠘','𖤐','𖠀','𖠌'];
    
    𖠘.rnd=()=>𖠘[~~(Math.random()*𖠘.length)];
    
    
    window.𖠘=𖠘
    $("[m]").innerHTML=new Array(y).fill(0).map(_=>     new Array(x).fill(0).map(_=> 𖠘.rnd() ).join("|")).join("<br>");

}
    
$("[re]").onclick=𖠀𖠰;