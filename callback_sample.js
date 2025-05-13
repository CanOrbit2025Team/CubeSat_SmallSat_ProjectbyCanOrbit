//call -back //call -back 

//call -back 
// synchronous---making dosa
//asynchronous----washing dish+stirr fry+cleaning
console.clear()
var dt=new Date()
console.log(dt)
console.log('hello')
for(i=0;i<100;i++){
    console.log('Loop')
}
console.log('End')
var diff=new Date()-dt
console.log(diff)// milliseconds


// example 2
/**The previous example featured a longTask function that used a while loop to delay execution for a specified time (e.g., 4000 milliseconds) 
 * by repeatedly checking the time difference and printing ***, preceded by console.log('started') and followed by console.log('End'). This 
 * demonstrated synchronous execution, as the loop blocked the JavaScript event loop, preventing the End message from appearing until 
 * the 4-second delay completed, resulting in a sequence of started, numerous ***, and End. The example, likely presented by your instructor,
 *  highlighted the limitations of synchronous code in JavaScript’s single-threaded environment, where such blocking can freeze a browser’s UI 
 * or halt Node.js operations. Its purpose was to contrast with asynchronous programming, emphasizing the need for non-blocking techniques to
 *  ensure responsiveness, and to teach the impact of long-running tasks on performance in real-world applications. */

//--is this synchronous/ asynchronous..why dis my instructor show me this example
function longTask(millSecondTime){
    dt=new Date()
    while((new Date-dt)<=millSecondTime){
        console.log("***")

    }
}
console.log('started')
longTask(4000)
console.log('End')
// repeated pattern--------------------synchronous....single thread
console.log('started')
longTask(2000)
console.log('End')
// repeated pattern-------------------synchronous.....single thread
console.log('started')
longTask(1000)
console.log('Asynchronous-End')

// Same but synchronus way
//---callback_sample2.js