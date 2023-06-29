const merge = (left: number[], right: number[]): number[] => {
   let arr: number[] = [];
   let i: number = 0;
   let j: number = 0;
   while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
         arr.push(left[i]);
         i++;
      } else {
         arr.push(right[j]);
         j++;
      }
   }
   arr.push(...left.slice(i, left.length));
   arr.push(...right.slice(j, right.length));
   return arr;
};

const mergeSort = (arr: number[]): number[] => {
   if (arr.length <= 1) {
      return arr;
   }
   const mid: number = Math.floor(arr.length / 2);
   let left: number[] = arr.slice(0, mid);
   let right: number[] = arr.slice(mid, arr.length);
   left = mergeSort(left);
   right = mergeSort(right);
   return merge(left, right);
};

const arr: number[] = [3, 2, 1, -1, 0, 9, 2];
console.log(mergeSort(arr).join(" "));
