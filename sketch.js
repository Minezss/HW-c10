var weight = [104, 95, 76, 92]

function average_weight()
{
  var sum = weight[0]+weight[1]+weight[2]+weight[3]
  var avg = sum/weight.length
  console.log(avg)
}

function setup() 
{
  createCanvas(400,400);
  average_weight();
}

function draw() 
{
background(51);

}

