function recursiveBinarySearch(arr, value, leftPosition, rightPosition) {
    
    if(leftPosition > rightPosition) {
        return -1;
    }
    
    midPivot = Math.floor((leftPosition + rightPosition)/2);

    if(midPivot === value) {
        return midPivot;
    } else if(midPivot > value) {
        return recursiveBinarySearch(arr, value, leftPosition, midPivot - 1);
    } else {
        return recursiveBinarySearch(arr, value, midPivot + 1, rightPosition);
    }

}