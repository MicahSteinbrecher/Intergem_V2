export function compareArray(x,y){
    console.log('compare array fireed');
    for (var key in x) {
        if (x.hasOwnProperty(key)) {
            if (x.key !== y.key) {
                return false;
            }
        }
    }
    return true;
}
