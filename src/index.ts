
async function forEach  (array: Array<any>, callback: Function) {

    // Rewriting the forEach loop

    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }

    // It's as simple as that :) 

}

module.exports = forEach;