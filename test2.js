//let weight = document.getElementById('weight')
// let weight1 = document.getElementById('weight1')
// //let height = document.getElementById('height')
// let height1 = document.getElementById('height1')
// //let age = document.getElementById('age')
 let BMI = document.getElementById('BMI')
 let BMI2 = document.getElementById('BMI2')
 let BMI3 = document.getElementById('BMI3')
 let BMI4 = document.getElementById('BMI4')
 let BMI5 = document.getElementById('BMI5')
//te3 = document.getElementById('test3')
//let button1 = document.getElementById('button1')


//weight.textContent = "Your Weight:"

// weight1.input = document.createElement("input");
// weight1.input.setAttribute("type", "text");
// document.body.appendChild(weight1.input);

// //height.textContent = "Your Height:"

// height1.input = document.createElement("input");
// height1.input.setAttribute("type", "text");
// document.body.appendChild(height1.input);

// //age.textContent = "Your Age:"

// age1.input = document.createElement("input");
// age1.input.setAttribute("type", "text");
// document.body.appendChild(age1.input);

// let button1 = document.createElement('button')
// button1.innerText = 'Can you click me?'
let button1 = document.getElementById('button1')
button1.innerText = "Click to find workout plans for people similar to you"


button1.addEventListener('click', () => {

        let inputWeight = document.getElementById('weight1').value;
        let inputHeight = document.getElementById('height1').value;
        let inputAge = document.getElementById('age1').value;
        //console.log(document.getElementById('weight1'))
        console.log("Weight: "+inputWeight)
        console.log("Height: " + inputHeight)
        console.log("Age: " + inputAge)
        //console.log("Gender: " + gender)

        

        BMI.textContent="BMI: "+inputWeight/(inputHeight*inputHeight)*703
if(inputWeight/(inputHeight*inputHeight)*703<=18.5){
    BMI2.textContent="Below 18.5 = Underweight.         If you are wanting to gain weight. You should begin going to the gym. You can start with basic exercise like Bicep curls for your biceps, Squats for your quads, and Crunches for your abs"
}
if(inputWeight/(inputHeight*inputHeight)*703>18.5 && inputWeight/(inputHeight*inputHeight)*703<=24.9){
    BMI3.textContent="18.5-24.9 = Normal.               You should maintain your weight. Stay active!"       
}
if(inputWeight/(inputHeight*inputHeight)*703>24.9 && inputWeight/(inputHeight*inputHeight)*703 <=30){
    BMI4.textContent="25-29.9 = Overweight              If you are wanting to lose weight, you can play sports like tennis, swimming, football, basketball, and many more. You should try to remain active throughout the day!"
}
if(inputWeight/(inputHeight*inputHeight)*703>30){
    BMI5.textContent="Over 30 = Obese                   If you are wanting to lose weight for your health, you should get a personal trainer perhaps!"
}
        

       
        // console.log(height1.input.value)
        // console.log(age1.input.value)

   
})
document.body.appendChild(button1) //What is this line doing?

