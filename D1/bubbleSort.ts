const swap = (arr: number[], i: number, j: number): void => {
   const temp: number = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
};

const bubbleSort = (arr: number[], N: number): void => {
   for (let i: number = 0; i < N - 1; i++) {
      let isSwapped: boolean = false;
      for (let j: number = 0; j < N - i - 1; j++) {
         if (arr[j] > arr[j + 1]) {
            isSwapped = true;
            swap(arr, j, j + 1);
         }
      }
      if(!isSwapped) {
        break;
      }
   }
};

const arr: number[] = [3, 2, 1, -1, 0];
const N: number = arr.length;
bubbleSort(arr, N);

console.log(arr.join(" "));
