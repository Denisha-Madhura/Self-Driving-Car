const canvas=document.getElementById('myCanvas');
canvas.width=200;
const ctx=canvas.getContext('2d');
const road = new Road(canvas.width/2,canvas.width*0.9);
const car=new Car(road.getLaneCenter(1),100,30,50);

animate();

function animate(){
    car.update();
    canvas.height=window.innerHeight;

    ctx.save();
    ctx.translate(0,-car.y+canvas.height*0.7); // to keep the car in the same position on the screen, while the road moves dow
    road.draw(ctx);
    car.draw(ctx);
    requestAnimationFrame(animate); // calls animate repeatedly, gives the illusion of motion

}