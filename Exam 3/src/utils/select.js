
export function selectHelper(selectedValue,arr){
   for (const el of arr) {
    if(el.value === selectedValue){
        el.selected = 'selected';
        break;
    }
   }
   return arr;
}
