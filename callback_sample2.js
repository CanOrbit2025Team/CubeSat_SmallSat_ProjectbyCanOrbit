console.clear()
function longTask(millSecondTime){
    dt=new Date()
    while((new Date-dt)<=millSecondTime){
        console.log("***")

    }
}
function showEnd(){
    console.log('End')
}


console.log('started')
setTimeout(showEnd,2000)
// repeated pattern--------async
console.log('started')
setTimeout(showEnd,2000)
// repeated pattern-------async

console.log('started')
setTimeout(showEnd,2000)
console.log('-------------restaurant-example------------')
//console.clear();

// Function to simulate placing a food order
function placeOrder(orderId, callback) {
    console.log(`Order ${orderId} has been placed. Preparing your food...`);
    
    // Simulate asynchronous processing with a delay (e.g., 3 seconds)
    setTimeout(() => {
        const deliveryTime = "30 minutes";
        console.log(`Order ${orderId} is ready! Estimated delivery in ${deliveryTime}.`);
        // Callback function is called with the order details
        callback(orderId, deliveryTime);
    }, 3000); // 3000 milliseconds = 3 seconds
}

// Callback function to handle the order completion
function handleDelivery(orderId, deliveryTime) {
    console.log(`Notification: Order ${orderId} has been delivered after ${deliveryTime}!`);
    console.log("Please enjoy your meal or rate your delivery experience.");
}
//********************************************************************
// The execution begins with the first synchronous statement, which logs "Starting the ordering process..." to the console—this happens immediately. */
// Placing multiple orders with asynchronous callbacks
console.log("Starting the ordering process...");
//*Next, the placeOrder function is called with orderId 101 and the handleDelivery function as the callback */
placeOrder(101, handleDelivery);
//---go to placeOrder function
/* Inside placeOrder, it synchronously logs "Order 101 has been placed. Preparing your food..." to the console. 
Then, it encounters setTimeout, which schedules a task to run after a 3-second delay:
 this task will log that the order is ready, calculate a delivery time, and invoke the handleDelivery callback with orderId 101 and the delivery time "30 minutes". 
 Importantly, setTimeout doesn’t block execution—it queues the task in the event loop and allows the program to continue immediately. 
 So, the next line, "You can continue browsing the app...", logs right away, demonstrating the non-blocking nature of asynchronous code.*/
console.log("You can continue browsing the app..."); // Non-blocking


placeOrder(102, handleDelivery);
console.log("Keep using the app while orders are being prepared...");